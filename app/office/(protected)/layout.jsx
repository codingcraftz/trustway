import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function ProtectedOfficeLayout({ children }) {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    // Not logged in -> redirect to login
    if (!user) {
        redirect('/office/login');
    }

    // Checking the profiles table for 'is_approved' status
    const { data: profile } = await supabase
        .from('profiles')
        .select('is_approved')
        .eq('id', user.id)
        .single();

    // Not approved -> redirect to wait page
    if (!profile || !profile.is_approved) {
        redirect('/office/wait');
    }

    // Approved -> render internal dashboard
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            {/* Simple Top Navigation for Office Dashboard */}
            <header className="bg-[#031242] text-white p-4 shadow-md flex justify-between items-center z-10 sticky top-0">
                <div className="font-bold text-lg tracking-wider flex items-center gap-2">
                    <img src="/logo/trustway.png" alt="Logo" className="h-5 brightness-0 invert opacity-90" />
                    Office
                </div>
                <div className="flex items-center gap-4 text-sm font-light">
                    <span>{user.email}</span>
                    <form action="/office/login/actions" method="POST" className="m-0">
                        {/* Fake form for sign out, or client-side. We use a link for simplicity */}
                        <a href="/office/login" className="text-blue-200 hover:text-white transition-colors underline underline-offset-4">
                            Logout
                        </a>
                    </form>
                </div>
            </header>
            
            <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-10">
                {children}
            </main>
        </div>
    );
}
