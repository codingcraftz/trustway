import { Upload, Bell, ChevronRight, MessageCircle, Award, CheckCircle2, ChevronDown, User, Building2, Check } from "lucide-react";
import Image from "next/image";
import { mobileExperts } from "@/lib/mobileExperts";

export async function generateStaticParams() {
    return mobileExperts.map((expert) => ({
        id: expert.id,
    }));
}

// 두 가지 테마 정의 (Navy / Gold)
const THEMES = {
    navy: {
        bg: "bg-[#0A1120]",
        bgGradient: "from-[#0A1120] via-[#0A1120]/80",
        pill: "bg-blue-500/20 text-blue-300 border-blue-400/20",
        quoteBorder: "border-[#D4AF37]",
        textQuote: "text-slate-300",
        textName: "text-white",
        textSubtitle: "text-slate-300",
        iconDefault: "text-slate-500/80",
        cardBg: "from-slate-800/80 to-[#121c2e] border-slate-700/60",
        cardGlow1: "bg-blue-500/10",
        cardGlow2: "bg-[#D4AF37]/5",
        cardText: "text-white/95",
        
        personalCard: "bg-slate-800/30 border-slate-700/50",
        personalIconBg: "bg-blue-500/20",
        personalIcon: "text-blue-400",
        corpCard: "bg-[#D4AF37]/5 border-[#D4AF37]/20",
        corpIconBg: "bg-[#D4AF37]/20",
        corpIcon: "text-[#D4AF37]",
        
        buttonBg: "bg-slate-800/50 hover:bg-slate-700/50 border-slate-700/50 text-slate-200",
        buttonHoverText: "group-hover:text-white",
        accentLine: "bg-[#D4AF37]",
        bottomGradient: "from-[#0A1120] via-[#0A1120]/95",
    },
    gold: {
        // 고급스러운 차콜 브라운 베이스
        bg: "bg-[#161412]",               
        bgGradient: "from-[#161412] via-[#161412]/80",
        pill: "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20",
        quoteBorder: "border-[#C5A059]",
        textQuote: "text-[#D9CDB8]",
        textName: "text-[#FDFBF7]",
        textSubtitle: "text-[#A89F91]",
        iconDefault: "text-[#8C7A5E]",
        cardBg: "from-[#1F1C19]/90 to-[#141210] border-[#D4AF37]/20",
        cardGlow1: "bg-[#D4AF37]/10",
        cardGlow2: "bg-[#C5A059]/5",
        cardText: "text-[#E6D5B8]",
        
        personalCard: "bg-[#1F1C19]/60 border-[#D4AF37]/10",
        personalIconBg: "bg-[#C5A059]/10",
        personalIcon: "text-[#D9CDB8]",
        corpCard: "bg-[#D4AF37]/10 border-[#D4AF37]/30",
        corpIconBg: "bg-[#D4AF37]/20",
        corpIcon: "text-[#D4AF37]",
        
        buttonBg: "bg-[#1F1C19]/80 hover:bg-[#2A2622] border-[#D4AF37]/20 text-[#D9CDB8]",
        buttonHoverText: "group-hover:text-[#FDFBF7]",
        accentLine: "bg-[#D4AF37]",
        bottomGradient: "from-[#161412] via-[#161412]/95",
    }
};

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

    // 데이터에 세팅된 theme를 불러오고, 없으면 기본값(navy) 사용
    const t = THEMES[expert.theme || "navy"];
    
    // 링크 분류: 카카오톡 버튼만 하단 고정 배열, 나머지는 스크롤 리스트
    const kakaoLink = expert.links.find(l => l.type === "kakao");
    const otherLinks = expert.links.filter(l => l.type !== "kakao");

    return (
        <main className="fixed inset-0 z-[9999] bg-[#1a1f2bc0] flex items-center justify-center font-sans">
            {/* 모바일 폰 케이스 컨테이너 */}
            <div className={`relative w-full h-full sm:h-[90vh] sm:max-w-[520px] sm:aspect-[9/19] sm:rounded-[3rem] sm:border-[8px] sm:border-[#384252] ${t.bg} overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col`}>
                
                {/* 1. 실제 스크롤이 일어나는 영역 (하단에 버튼 여백 pb-28 확보) */}
                <div className="relative z-10 w-full h-full overflow-y-auto scroll-smooth scrollbar-hide pb-28">
                    
                    {/* 상단 액션 버튼 */}
                    <header className="absolute top-0 left-0 right-0 w-full px-5 py-5 flex justify-between items-center z-50">
                        <button className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-black/60 transition-colors border border-white/10 active:scale-95">
                            <Upload className="w-4 h-4 text-white" strokeWidth={2} />
                        </button>
                        <button className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-black/60 transition-colors border border-white/10 active:scale-95">
                            <Bell className="w-4 h-4 text-white" strokeWidth={2} />
                        </button>
                    </header>

                    {/* 히어로 영역 */}
                    <section className="relative w-full h-[55vh] min-h-[450px] shrink-0">
                        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 hidden" style={{ backgroundImage: `url(${expert.backgroundImage})` }} />
                        <div className="absolute inset-0 bg-cover bg-top bg-no-repeat z-10" style={{ backgroundImage: `url(${expert.profileImage})` }} />
                        
                        <div className={`absolute inset-0 z-20 bg-gradient-to-t ${t.bgGradient} to-transparent`} />
                        
                        <div className="absolute bottom-10 left-6 right-6 z-30 flex flex-col items-start gap-1">
                            <span className={`${t.pill} px-2.5 py-1 rounded-md text-[11px] font-bold tracking-widest border backdrop-blur-sm`}>
                                {expert.title}
                            </span>
                            <h1 className={`${t.textName} text-5xl font-black tracking-tight leading-none mt-1 drop-shadow-xl flex items-end gap-2`}>
                                {expert.name}
                            </h1>
                            <p className={`${t.textQuote} text-[14px] mt-3 font-medium tracking-wide italic leading-relaxed drop-shadow-md border-l-2 ${t.quoteBorder} pl-3`}>
                                {expert.quote}
                            </p>
                        </div>
                        
                        <div className="absolute bottom-2 left-0 right-0 z-30 flex justify-center opacity-60 animate-bounce">
                            <ChevronDown className="w-5 h-5 text-white/50" />
                        </div>
                    </section>

                    {/* 경력 영역 */}
                    <section className={`relative z-40 ${t.bg} px-7 py-2 w-full flex flex-col gap-4`}>
                        <div className="flex items-center gap-2.5 mb-2 mt-4">
                            <div className={`w-1.5 h-1.5 rounded-full ${t.accentLine}`} />
                            <h2 className="text-white/90 text-[12px] font-bold tracking-[0.2em] uppercase">Career Highlights</h2>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            {expert.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-3 w-full group">
                                    {bullet.highlight ? (
                                        <div className="mt-0.5 p-1.5 bg-gradient-to-br from-[#D4AF37] to-[#B38510] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.4)] flex-shrink-0 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-white/20 w-full h-[200%] rotate-45 animate-pulse" />
                                            <Award className="w-3.5 h-3.5 text-black relative z-10" strokeWidth={2.5} />
                                        </div>
                                    ) : (
                                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${t.iconDefault}`} />
                                    )}
                                    <p className={`text-[14.5px] leading-relaxed break-keep tracking-wide ${bullet.highlight ? "text-[#FFD700] font-bold drop-shadow-sm" : `${t.textSubtitle} font-light`}`}>
                                        {bullet.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* 컨설팅 분야 */}
                    <section className={`relative z-40 ${t.bg} px-7 py-6 w-full flex flex-col gap-6`}>
                        <div className="flex items-center gap-2.5 mb-1 mt-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${t.accentLine}`} />
                            <h2 className="text-white/90 text-[12px] font-bold tracking-[0.2em] uppercase">Consulting Areas</h2>
                        </div>
                        <div className="flex flex-col gap-6 w-full">
                            <div className={`${t.personalCard} rounded-2xl p-5 shadow-sm border`}>
                                <div className="flex items-center gap-2.5 mb-4 border-b border-white/10 pb-3">
                                    <div className={`p-1.5 rounded-lg ${t.personalIconBg}`}>
                                        <User className={`w-4 h-4 ${t.personalIcon}`} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-white font-bold text-[15px] tracking-wide">개인 자산관리</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {expert.personalServices.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${t.personalIcon}`} strokeWidth={3} />
                                            <p className={`${t.textSubtitle} text-[13.5px] leading-snug break-keep`}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`${t.corpCard} rounded-2xl p-5 shadow-sm border`}>
                                <div className="flex items-center gap-2.5 mb-4 border-b border-white/10 pb-3">
                                    <div className={`p-1.5 rounded-lg ${t.corpIconBg}`}>
                                        <Building2 className={`w-4 h-4 ${t.corpIcon}`} strokeWidth={2.5} />
                                    </div>
                                    <h3 className={`${t.corpIcon} font-bold text-[15px] tracking-wide`}>법인 경영 컨설팅</h3>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {expert.corporateServices.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${t.corpIcon}`} strokeWidth={3} />
                                            <p className={`${t.textSubtitle} text-[13.5px] leading-snug break-keep`}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 메시지 및 링크 리스트 영역 */}
                    <section className={`relative z-40 ${t.bg} px-5 py-6 pb-12 w-full flex flex-col gap-5`}>
                        <div className={`w-full bg-gradient-to-br ${t.cardBg} border backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group`}>
                            <div className={`absolute -right-10 -top-10 w-40 h-40 ${t.cardGlow1} blur-3xl rounded-full`} />
                            <div className={`absolute -left-10 -bottom-10 w-40 h-40 ${t.cardGlow2} blur-3xl rounded-full`} />
                            
                            <p className={`${t.cardText} text-[15px] leading-relaxed font-serif font-medium whitespace-pre-line break-keep relative z-10 text-center`}>
                                {expert.cardText}
                            </p>
                            <div className="w-full flex justify-center mt-6 relative z-10">
                                <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-3 py-1 rounded-full text-[9px] font-sans font-bold tracking-[0.15em] uppercase">
                                    {expert.cardSub}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-3.5 w-full mt-4">
                            {otherLinks.map((link, idx) => {
                                if (link.type === "thumbnail") {
                                    return (
                                        <a key={idx} href={link.url} className={`w-full group ${t.buttonBg} border backdrop-blur-sm rounded-[1.5rem] p-3 pl-3 pr-5 flex items-center gap-4 transition-all duration-300 active:scale-[0.98]`}>
                                            <div className="w-[60px] h-[60px] shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                                {link.thumbnail ? (
                                                    <img src={link.thumbnail} alt={link.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                ) : <div className="w-full h-full bg-slate-700/50" />}
                                            </div>
                                            <div className="flex-1 text-[13.5px] font-medium leading-snug break-keep whitespace-pre-line">
                                                {link.title}
                                            </div>
                                            <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={2.5} />
                                        </a>
                                    );
                                }
                                return (
                                    <a key={idx} href={link.url} className={`w-full group ${t.buttonBg} border backdrop-blur-sm rounded-[1.5rem] py-4 px-6 flex items-center justify-between transition-all duration-300 active:scale-[0.98]`}>
                                        <span className={`text-[14px] font-semibold leading-relaxed whitespace-pre-line break-keep ${t.buttonHoverText} transition-colors`}>
                                            {link.title}
                                        </span>
                                        <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-all shrink-0 ml-4" strokeWidth={2.5} />
                                    </a>
                                );
                            })}
                        </div>
                        
                        <div className="w-full text-center mt-12 mb-6 opacity-60">
                            <p className="text-[10px] text-white/50 font-mono tracking-widest uppercase">
                                © Trustway Jeju. All rights reserved.
                            </p>
                        </div>
                    </section>
                </div>
                
                {/* 2. 하단 고정 카카오톡 연락하기 버튼 */}
                {kakaoLink && (
                    <div className={`absolute bottom-0 left-0 right-0 z-50 px-5 pb-8 pt-10 bg-gradient-to-t ${t.bottomGradient} to-transparent md:rounded-b-[3rem] pointer-events-none`}>
                        <a href={kakaoLink.url} className="w-full pointer-events-auto bg-[#FEE500] hover:bg-[#F4DC00] rounded-[1.5rem] py-4 px-6 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(254,229,0,0.15)] transition-transform active:scale-[0.98]">
                            <MessageCircle className="w-5 h-5 text-black fill-black" strokeWidth={2} />
                            <span className="text-black text-[15px] font-bold tracking-tight">{kakaoLink.title}</span>
                        </a>
                    </div>
                )}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }` }} />
        </main>
    );
}
