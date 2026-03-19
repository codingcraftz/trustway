import { Upload, Bell, ChevronRight, MessageCircle, Award, CheckCircle2, ChevronDown, User, Building2, Check } from "lucide-react";
import Image from "next/image";
import { mobileExperts } from "@/lib/mobileExperts";

export async function generateStaticParams() {
    return mobileExperts.map((expert) => ({
        id: expert.id,
    }));
}

export default async function ExpertMobilePage({ params }) {
    const { id } = await params;

    // 가져온 id에 해당하는 전문가 데이터 찾기
    const expert = mobileExperts.find(e => e.id === id);

    if (!expert) {
        return (
            <div className="fixed inset-0 bg-[#0A1120] flex items-center justify-center text-white">
                <p>전문가 프로필을 찾을 수 없습니다.</p>
            </div>
        );
    }

    return (
        // 최상위 컨테이너: 브라우저 전체 화면, 어두운 네이비 그레이 배경, 가운데 정렬
        <main className="fixed inset-0 z-[9999] bg-[#1a1f2bc0] flex items-center justify-center font-sans">

            {/* 모바일 폰 케이스 컨테이너 (실제 아이폰 형태 모방) */}
            <div className="relative w-full h-full sm:h-[90vh] sm:max-w-[520px] sm:aspect-[9/19] sm:rounded-[3rem] sm:border-[8px] sm:border-[#384252] bg-[#0A1120] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">

                {/* 1. 실제 스크롤이 일어나는 영역 */}
                <div className="relative z-10 w-full h-full overflow-y-auto scroll-smooth scrollbar-hide">
                    {/* 상단 액션 버튼 (공유, 알림) - Absolute positioned over hero */}
                    <header className="absolute top-0 left-0 right-0 w-full px-5 py-5 flex justify-between items-center z-50">
                        <button className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-black/60 transition-colors border border-white/10 active:scale-95">
                            <Upload className="w-4 h-4 text-white" strokeWidth={2} />
                        </button>
                        <button className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-black/60 transition-colors border border-white/10 active:scale-95">
                            <Bell className="w-4 h-4 text-white" strokeWidth={2} />
                        </button>
                    </header>

                    {/* 2. 전면 히어로 영역 (Profile Image & Name/Title) */}
                    <section className="relative w-full h-[55vh] min-h-[450px] shrink-0">
                        {/* 흐릿한 배경 이미지 (깊이감 부여) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 hidden"
                            style={{ backgroundImage: `url(${expert.backgroundImage})` }}
                        />

                        {/* 실제 프로필 이미지 (깨끗하게 노출) */}
                        <div
                            className="absolute inset-0 bg-contain bg-bottom bg-no-repeat z-10"
                            style={{ backgroundImage: `url(${expert.profileImage})` }}
                        />

                        {/* 부드러운 하단 그라데이션 오버레이 (텍스트 가독성) */}
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A1120] via-[#0A1120]/60 to-transparent" />

                        {/* 이름 및 타이틀 정보 (왼쪽 하단 고정) */}
                        <div className="absolute bottom-10 left-6 right-6 z-30 flex flex-col items-start gap-1">
                            <span className="bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-widest border border-blue-400/20 backdrop-blur-sm">
                                {expert.title}
                            </span>
                            <h1 className="text-white text-5xl font-black tracking-tight leading-none mt-1 drop-shadow-xl flex items-end gap-2">
                                {expert.name}
                            </h1>
                            <p className="text-slate-300 text-[14px] mt-3 font-medium tracking-wide italic leading-relaxed drop-shadow-md border-l-2 border-[#D4AF37] pl-3">
                                {expert.quote}
                            </p>
                        </div>

                        {/* 하단 화살표 스크롤 유도 */}
                        <div className="absolute bottom-2 left-0 right-0 z-30 flex justify-center opacity-60 animate-bounce">
                            <ChevronDown className="w-5 h-5 text-white/50" />
                        </div>
                    </section>

                    {/* 3. 경력 하이라이트 영역 (Career Highlights) */}
                    <section className="relative z-40 bg-[#0A1120] px-7 py-2 w-full flex flex-col gap-4">
                        <div className="flex items-center gap-2.5 mb-2 mt-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            <h2 className="text-white/90 text-[12px] font-bold tracking-[0.2em] uppercase">Career Highlights</h2>
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            {expert.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-3 w-full group">
                                    {bullet.highlight ? (
                                        <div className="mt-0.5 p-1.5 bg-gradient-to-br from-[#D4AF37] to-[#B38510] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.4)] flex-shrink-0 relative overflow-hidden">
                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 bg-white/20 w-full h-[200%] rotate-45 animate-pulse" />
                                            <Award className="w-3.5 h-3.5 text-black relative z-10" strokeWidth={2.5} />
                                        </div>
                                    ) : (
                                        <CheckCircle2 className="w-4 h-4 text-slate-500/80 mt-0.5 flex-shrink-0" />
                                    )}
                                    <p className={`text-[14.5px] leading-relaxed break-keep tracking-wide ${bullet.highlight
                                        ? "text-[#FFD700] font-bold drop-shadow-sm"
                                        : "text-slate-100 font-light"
                                        }`}>
                                        {bullet.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3-2. 상담 분야 영역 (Consulting Areas) */}
                    <section className="relative z-40 bg-[#0A1120] px-7 py-6 w-full flex flex-col gap-6">
                        <div className="flex items-center gap-2.5 mb-1 mt-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                            <h2 className="text-white/90 text-[12px] font-bold tracking-[0.2em] uppercase">Consulting Areas</h2>
                        </div>

                        <div className="flex flex-col gap-6 w-full">
                            {/* 개인 자산관리 분야 */}
                            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-2.5 mb-4 border-b border-slate-700/50 pb-3">
                                    <div className="p-1.5 bg-blue-500/20 rounded-lg">
                                        <User className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-white font-bold text-[15px] tracking-wide">개인 자산관리</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {expert.personalServices.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" strokeWidth={3} />
                                            <p className="text-slate-300 text-[13.5px] leading-snug break-keep">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 법인 경영 컨설팅 분야 */}
                            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-2.5 mb-4 border-b border-[#D4AF37]/20 pb-3">
                                    <div className="p-1.5 bg-[#D4AF37]/20 rounded-lg">
                                        <Building2 className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-[#D4AF37] font-bold text-[15px] tracking-wide">법인 경영 컨설팅</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {expert.corporateServices.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" strokeWidth={3} />
                                            <p className="text-slate-300 text-[13.5px] leading-snug break-keep">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. 서비스 소개 & 프리미엄 액션 카드 영역 */}
                    <section className="relative z-40 bg-[#0A1120] px-5 py-12 pb-24 w-full flex flex-col gap-5">

                        {/* 프리미엄 상담 메시지 카드 (Glassmorphism + Dark Mode) */}
                        <div className="w-full bg-gradient-to-br from-slate-800/80 to-[#121c2e] border border-slate-700/60 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
                            {/* Subtle background glow */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full transition-all duration-700 group-hover:bg-blue-500/20" />
                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#D4AF37]/5 blur-3xl rounded-full transition-all duration-700 group-hover:bg-[#D4AF37]/10" />

                            <p className="text-white/95 text-[15px] leading-relaxed font-serif font-medium whitespace-pre-line break-keep relative z-10 text-center">
                                {expert.cardText}
                            </p>
                            <div className="w-full flex justify-center mt-6 relative z-10">
                                <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-3 py-1 rounded-full text-[9px] font-sans font-bold tracking-[0.15em] uppercase">
                                    {expert.cardSub}
                                </span>
                            </div>
                        </div>

                        {/* 링크 버튼 리스트 (Modern Action Items) */}
                        <div className="flex flex-col gap-3.5 w-full mt-4">
                            {expert.links.map((link, idx) => {
                                // 카카오톡 특별 스타일링
                                if (link.type === "kakao") {
                                    return (
                                        <a key={idx} href={link.url} className="w-full bg-[#FEE500] hover:bg-[#F4DC00] rounded-[1.5rem] py-4 px-6 flex items-center justify-center gap-2.5 shadow-lg shadow-[#FEE500]/10 transition-transform active:scale-[0.98]">
                                            <MessageCircle className="w-5 h-5 text-black fill-black" strokeWidth={2} />
                                            <span className="text-black text-[15px] font-bold tracking-wide">{link.title}</span>
                                        </a>
                                    );
                                }

                                // 썸네일이 있는 프리미엄 링크
                                if (link.type === "thumbnail") {
                                    return (
                                        <a key={idx} href={link.url} className="w-full group bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 backdrop-blur-sm rounded-[1.5rem] p-3 pl-3 pr-5 flex items-center gap-4 transition-all duration-300 active:scale-[0.98]">
                                            <div className="w-[60px] h-[60px] shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                                {link.thumbnail ? (
                                                    <img src={link.thumbnail} alt={link.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                ) : (
                                                    <div className="w-full h-full bg-slate-700/50" />
                                                )}
                                            </div>
                                            <div className="flex-1 text-slate-200 text-[13.5px] font-medium leading-snug break-keep whitespace-pre-line">
                                                {link.title}
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={2.5} />
                                        </a>
                                    );
                                }

                                // 일반 텍스트 베이스 액션 버튼
                                return (
                                    <a key={idx} href={link.url} className="w-full group bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 backdrop-blur-sm rounded-[1.5rem] py-4 px-6 flex items-center justify-between transition-all duration-300 active:scale-[0.98]">
                                        <span className="text-slate-200 text-[14px] font-semibold leading-relaxed whitespace-pre-line break-keep group-hover:text-white transition-colors">
                                            {link.title}
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0 ml-4" strokeWidth={2.5} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* 최하단 Copyright */}
                        <div className="w-full text-center mt-12 mb-6">
                            <p className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
                                © Trustway Jeju. All rights reserved.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            {/* 내부 스크롤바 숨김 처리 */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </main>
    );
}
