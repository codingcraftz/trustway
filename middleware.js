import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Fetch user to trigger cookie refresh if necessary
    await supabase.auth.getUser();

    // Domain Rewrite Logic for office.trustway.kr
    const url = request.nextUrl.clone();
    const hostname = request.headers.get("host") || "";
    const isOfficeDomain = hostname === "office.trustway.kr" || hostname.startsWith("office.localhost");

    if (isOfficeDomain && !url.pathname.startsWith('/office')) {
        url.pathname = `/office${url.pathname === '/' ? '' : url.pathname}`;
        
        const rewriteRes = NextResponse.rewrite(url);
        // Copy refreshed cookies from supabaseResponse if they were updated
        supabaseResponse.cookies.getAll().forEach((cookie) => {
            rewriteRes.cookies.set(cookie.name, cookie.value, cookie);
        });
        return rewriteRes;
    }

    return supabaseResponse;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
