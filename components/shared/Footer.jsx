"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
    const pathname = usePathname();

    // 모바일 명함 페이지 및 오피스 사내망 페이지에서는 푸터 숨김 대상
    if (pathname && (pathname.match(/^\/experts\/[^\/]+\/mobile$/) || pathname.startsWith('/office'))) {
        return null;
    }

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-16 text-slate-400">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* 왼쪽 로고 및 저작권 */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <img
                        src="/logo/trustway.png"
                        alt="TrustWay Logo"
                        className="h-10 w-auto opacity-70 brightness-0 invert"
                    />
                    <p className="text-sm font-light text-slate-500">
                        트러스트웨이 본부<br/>
                        © {new Date().getFullYear()} TrustWay. All rights reserved.
                    </p>
                </div>
                
                {/* 오른쪽 연락처 및 문의 정보 */}
                <div className="flex flex-col items-center md:items-end space-y-3 text-sm">
                    <div className="text-center md:text-right">
                        <p className="font-light mb-1">웹사이트 관련 도입 문의 및 버그 제보</p>
                        <a href="mailto:codingcraftz@gmail.com" className="font-semibold text-slate-300 hover:text-white transition-colors underline underline-offset-4 decoration-primary/50">
                            codingcraftz@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-4 mt-4 pt-4 border-t border-slate-800">
                        <Link href="/about" className="text-xs hover:text-white transition-colors">About</Link>
                        <Link href="/location" className="text-xs hover:text-white transition-colors">Location</Link>
                        <Link href="/office" className="text-xs hover:text-primary transition-colors">Staff Only</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
