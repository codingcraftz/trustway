"use client";

import Image from "next/image";
import { X, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MobileCardTestPage() {
    return (
        <main className="fixed inset-0 z-[9999] bg-black flex items-center justify-center font-sans tracking-tight">
            {/* 모바일 뷰 컨테이너 (PC에서는 폰 사이즈로, 모바일에서는 전체화면) */}
            <div className="relative w-full h-full sm:h-[850px] sm:max-w-[420px] bg-[#1a1a1e] sm:rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">

                {/* 닫기 버튼 (왼쪽 상단 둥근 흰색) */}
                <Link href="/experts" className="absolute top-6 left-5 z-50 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-transform">
                    <X className="w-5 h-5 text-black" />
                </Link>

                {/* 콘텐츠 영역 (스크롤) */}
                <div className="flex-1 overflow-y-auto scrollbar-hide pb-36">

                    {/* 상단 프로필 이미지 & 명함 카드 영역 */}
                    <div className="relative w-full bg-slate-100" style={{ height: "65vh", minHeight: "500px" }}>
                        <Image
                            src="/img/프로필_박준영.png"
                            alt="박준영"
                            fill
                            className="object-cover object-top"
                        />

                        {/* 하단 투명한 다크 그라데이션 */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a1a1e] via-[#1a1a1e]/50 to-transparent pointer-events-none" />

                        {/* 플로팅된 오버레이 명함 카드 */}
                        <div className="absolute bottom-5 left-4 right-4 bg-[#283250]/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/5">
                            <h1 className="text-white text-[28px] font-bold mb-3 tracking-tighter">박준영</h1>
                            <p className="text-slate-200 text-[14px] font-medium mb-1 tracking-tight">재무 설계 매니저</p>
                            <p className="text-slate-200 text-[14px] font-medium mb-5 tracking-tight">트러스트웨이 제주</p>

                            <div className="flex gap-2">
                                <span className="bg-white/10 text-white/90 text-[12px] px-3 py-1.5 rounded-lg font-medium">저축·연금</span>
                                <span className="bg-white/10 text-white/90 text-[12px] px-3 py-1.5 rounded-lg font-medium">재무상담</span>
                                <span className="bg-white/10 text-white/90 text-[12px] px-3 py-1.5 rounded-lg font-medium">제주</span>
                            </div>
                        </div>
                    </div>

                    {/* 연락처 리스트 */}
                    <div className="w-full bg-[#1a1a1e] flex flex-col pt-1 pb-4">
                        <a href="tel:01000000000" className="flex items-center justify-between px-6 py-5 border-b border-white/5 active:bg-white/5 transition-colors">
                            <span className="text-slate-300 text-[14px]">휴대전화</span>
                            <div className="flex items-center gap-2">
                                <span className="text-white text-[15px] font-medium">+82 10-0000-0000</span>
                                <ChevronRight className="w-4 h-4 text-slate-500" />
                            </div>
                        </a>
                        <a href="mailto:trustway_jun@naver.com" className="flex items-center justify-between px-6 py-5 active:bg-white/5 transition-colors border-b border-white/5">
                            <span className="text-slate-300 text-[14px]">이메일</span>
                            <div className="flex items-center gap-2">
                                <span className="text-white text-[15px] font-medium">trustway_jun@naver.com</span>
                                <ChevronRight className="w-4 h-4 text-slate-500" />
                            </div>
                        </a>
                    </div>

                    {/* 소개글 텍스트 */}
                    <div className="px-6 py-8 bg-[#1a1a1e]">
                        <h2 className="text-white text-[18px] font-bold mb-6 tracking-tight">트러스트웨이 제주 재무 설계 매니저 소개</h2>
                        <p className="text-slate-300 text-[14.5px] leading-[1.7] break-keep mb-8 font-light">
                            저희 트러스트웨이 제주 지점은 제주 지역에서 고객님께 최상의 금융 서비스를 제공하는 것을 목표로 합니다.
                            저는 재무 설계 매니저로서, 감이 아닌 객관적인 데이터와 수치에 근거하여 고객님의 다양한 금융 니즈를 충족시키기 위해 노력하고 있습니다.
                        </p>

                        <h3 className="text-slate-100 text-[15px] font-bold mb-5 tracking-tight">주요 서비스:</h3>
                        <ul className="space-y-6 text-slate-300 text-[14.5px] font-light tracking-tight">
                            <li className="flex gap-2.5 items-start">
                                <span className="mt-[2px] text-xs opacity-60">•</span>
                                <span>수리적 분석 기반 맞춤형 저축 로드맵</span>
                            </li>
                            <li className="flex gap-2.5 items-start">
                                <span className="mt-[2px] text-xs opacity-60">•</span>
                                <span>객관적인 데이터 기반 펀드/투자 설계</span>
                            </li>
                            <li className="flex gap-2.5 items-start">
                                <span className="mt-[2px] text-xs opacity-60">•</span>
                                <span>목적자금 마련 및 노후 연금 정밀 설계</span>
                            </li>
                        </ul>

                        <p className="text-slate-300 text-[14.5px] leading-[1.7] break-keep mt-8 font-light">
                            트러스트웨이 제주 지점은 고객님의 재정적 목표 달성을 위해 최선을 다하고 있습니다.
                        </p>
                    </div>

                    {/* 포트폴리오/업무 환경 사진 그리드 (요청하신 하단 이미지 영역 모방) */}
                    <div className="grid grid-cols-2 gap-[1px] bg-slate-800 w-full mb-10">
                        <div className="relative aspect-square bg-[#F3F4F6]">
                            <Image src="/img/사무실1층_가로.jpg" alt="Portfolio 1" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-square bg-[#E5E7EB]">
                            <Image src="/img/사무실2층_세로.jpg" alt="Portfolio 2" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-square bg-[#D1D5DB]">
                            <Image src="/img/IMG_3810.jpg" alt="Portfolio 3" fill className="object-cover object-top" />
                        </div>
                        <div className="relative aspect-square bg-[#9CA3AF]">
                            <Image src="/img/bg_sample_2.jpg" alt="Portfolio 4" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* 하단 고정 하얀색 액션 영역 (사진과 동일구조) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white pt-6 pb-8 px-5 rounded-t-[20px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
                    <button className="w-full bg-[#1A1A1E] text-white py-[18px] rounded-xl text-[16px] font-bold tracking-tight active:scale-[0.98] transition-transform">
                        명함 선택 (상담 예약)
                    </button>
                    <p className="text-center text-[#8E8E93] text-[13px] mt-4 font-medium tracking-tight hover:text-black transition-colors cursor-pointer">
                        구독하고 자유롭게 편집하기
                    </p>
                </div>

                {/* 아이폰 하단 홈 인디케이터 흉내 */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-black rounded-full z-50 pointer-events-none" />
            </div>

            {/* 스크롤바 숨김용 스타일 */}
            <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }` }} />
        </main>
    );
}
