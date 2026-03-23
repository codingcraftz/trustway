"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// [페이지 목적] 전역으로 사용되는 상단 헤더 내비게이션 바 (Header)
export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 라우팅 변경 시 모바일 메뉴 자동 닫힘
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // 리틀리 모바일 뷰 페이지 및 사내 관리자 페이지(/office)에서는 상단 글로벌 헤더를 숨김처리
    if (pathname && (pathname.match(/^\/experts\/[^\/]+\/mobile$/) || pathname.startsWith('/office'))) {
        return null;
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-4">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between max-w-7xl">
                {/* 로고 영역 */}
                <Link
                    href="/"
                    className="flex items-center"
                >
                    <img
                        src="/logo/trustway.png"
                        alt="TrustWay Logo"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* 데스크톱 GNB 메뉴 */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/about"
                        className="text-[14px] font-semibold tracking-widest transition-colors hover:text-primary text-slate-600 uppercase"
                    >
                        About
                    </Link>
                    {/*<Link
                        href="/solution"
                        className="text-[14px] font-semibold tracking-widest transition-colors hover:text-primary text-slate-600 uppercase"
                    >
                        Solution
                    </Link>
                    */}
                    <Link
                        href="/experts"
                        className="text-[14px] font-semibold tracking-widest transition-colors hover:text-primary text-slate-600 uppercase"
                    >
                        Expertise
                    </Link>
                    <Link
                        href="/location"
                        className="text-[14px] font-semibold tracking-widest transition-colors hover:text-primary text-slate-600 uppercase"
                    >
                        Location
                    </Link>
                    {/*<Link
                        href="/insights"
                        className="text-[14px] font-semibold tracking-widest transition-colors hover:text-primary text-slate-600 uppercase"
                    >
                        Insights
                    </Link>*/}
                    <Link
                        href="/#contact"
                        className="ml-4 px-7 py-3 bg-primary text-white text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors shadow-sm"
                    >
                        Contact
                    </Link>
                </nav>

                {/* 모바일 햄버거 메뉴 및 이벤트 연결 */}
                <button
                    className="md:hidden p-2 focus:outline-none z-[60]"
                    aria-label="메뉴 열기"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="space-y-1.5 relative w-6 h-5">
                        <span className={`absolute left-0 top-0 block w-6 h-0.5 transition-all duration-300 bg-primary ${isMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
                        <span className={`absolute left-0 top-2.5 block w-6 h-0.5 transition-all duration-300 bg-primary ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`absolute left-0 bottom-0 block w-6 h-0.5 transition-all duration-300 bg-primary ${isMenuOpen ? '-rotate-45 !top-2.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* 모바일 햄버거 GNB 화면 오버레이 */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-6 transition-all duration-300 origin-top overflow-hidden transform ${isMenuOpen ? 'opacity-100 scale-y-100 max-h-screen' : 'opacity-0 scale-y-0 max-h-0'}`}>
                <Link href="/about" className="text-[15px] font-semibold tracking-widest text-slate-800 uppercase border-b border-slate-100 pb-3">About</Link>
                <Link href="/solution" className="text-[15px] font-semibold tracking-widest text-slate-800 uppercase border-b border-slate-100 pb-3">Solution</Link>
                <Link href="/experts" className="text-[15px] font-semibold tracking-widest text-slate-800 uppercase border-b border-slate-100 pb-3">Expertise</Link>
                <Link href="/location" className="text-[15px] font-semibold tracking-widest text-slate-800 uppercase border-b border-slate-100 pb-3">Location</Link>
                <Link href="/insights" className="text-[15px] font-semibold tracking-widest text-slate-800 uppercase border-b border-slate-100 pb-3">Insights</Link>
                <Link href="/#contact" className="mt-4 text-center px-7 py-4 bg-primary text-white text-[14px] font-semibold tracking-[0.1em] rounded-sm uppercase hover:bg-primary/90 transition-colors shadow-sm">Contact</Link>
            </div>
        </header>
    );
}
