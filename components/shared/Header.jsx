"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// [페이지 목적] 전역으로 사용되는 상단 헤더 내비게이션 바 (Header)
export function Header() {
    const pathname = usePathname();

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
                    <Link
                        href="/solution"
                        className="text-[14px] font-semibold tracking-widest transition-colors hover:text-primary text-slate-600 uppercase"
                    >
                        Solution
                    </Link>
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
                    <Link
                        href="/insights"
                        className="text-[14px] font-semibold tracking-widest transition-colors hover:text-primary text-slate-600 uppercase"
                    >
                        Insights
                    </Link>
                    <Link
                        href="/#contact"
                        className="ml-4 px-7 py-3 bg-primary text-white text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors shadow-sm"
                    >
                        Contact
                    </Link>
                </nav>

                {/* 모바일 햄버거 메뉴 (임시) */}
                <button
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="메뉴 열기"
                >
                    <div className="space-y-1.5">
                        <span className="block w-6 h-0.5 transition-colors bg-primary"></span>
                        <span className="block w-6 h-0.5 transition-colors bg-primary"></span>
                        <span className="block w-6 h-0.5 transition-colors bg-primary"></span>
                    </div>
                </button>
            </div>
        </header>
    );
}
