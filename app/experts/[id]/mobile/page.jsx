import { Upload, Bell, ChevronRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { experts } from "@/lib/data";

// 정적 라우팅 생성 (기존 설정 유지)
export function generateStaticParams() {
    return experts.map((expert) => ({
        id: expert.id,
    }));
}

// 📌 테스트용 MOCK 데이터 
const MOCK_EXPERT = {
    id: "test-expert",
    name: "진재한",
    title: "금융투자전문가",
    quote: "이타자리(利他自利)\n'남을 이롭게 하면 그 선함이 나에게도 이롭게 돌아온다'",
    bullets: [
        "💡 오크힐라이프 자산관리 대표",
        "💡 LMK자산관리대부 경남총괄 파트너스"
    ],
    profileImage: "/img/프로필_고정길.png",
    backgroundImage: "/img/bg_sample.png",
    cardText: "\"삶의 시작부터 끝까지,\n든든한 언덕이 되어 평생을\n함께합니다.\"",
    cardSub: "Premium Financial Partners for Your Life",
    links: [
        {
            title: "종합 재무설계 상담 신청\n(자산/저축/투자/연금/절세/보험/법인/부동산 등)",
            url: "#",
            type: "text"
        },
        {
            title: "[ 📌나의 재무설계 자가진단 TEST ]\n체계적인 자산관리의 첫걸음을 시작하세요!",
            url: "#",
            type: "text"
        },
        {
            title: "부자들의 강력한 재테크 비밀, 복리의 힘.\n복리계산기로 당신의 미래자산을 설계해보세요!💸",
            url: "#",
            type: "thumbnail",
            thumbnail: "/img/icon_calc.png"
        },
        {
            title: "복잡한 투자판단, 'ETF CHECK'에서 간단하게!\n체계적인 ETF 정보로 안전한 재테크 완성하세요.📊",
            url: "#",
            type: "thumbnail",
            thumbnail: "/img/icon_etf.png"
        },
        {
            title: "연락하기",
            url: "#",
            type: "kakao"
        }
    ]
};

export default async function ExpertMobilePage({ params }) {
    // 실제 운영 시에는 param.id를 바탕으로 데이터를 불러옵니다.
    const expert = MOCK_EXPERT;

    return (
        // 최상위 컨테이너: 브라우저 전체 화면, 어두운 네이비 그레이 배경, 가운데 정렬
        <main className="fixed inset-0 z-[9999] bg-[#2c313a] flex items-center justify-center font-sans selection:bg-[#EADDCE] selection:text-black">

            {/* 모바일 폰 케이스 컨테이너 (실제 아이폰 형태 모방) */}
            <div className="relative w-full h-full sm:h-[90vh] sm:max-w-[420px] sm:aspect-[9/19] sm:rounded-[3rem] sm:border-[8px] sm:border-[#4a5568] bg-black overflow-hidden shadow-2xl flex flex-col">

                {/* 1. 컨테이너 내부 꽉 찬 고정 배경 (내부 스크롤과 무관하게 고정) */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${expert.backgroundImage})`,
                        backgroundColor: '#525a66' // 이미지 로딩 지연시 보여줄 유사한 톤 
                    }}
                />

                {/* 2. 가독성을 위한 검은색 그라데이션 오버레이 */}
                {/* 상단은 상대적으로 투명하고 하단으로 갈수록 매우 짙어짐 */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 backdrop-blur-[2px]" />

                {/* 3. 실제 스크롤이 일어나는 영역 */}
                <div className="relative z-10 w-full h-full overflow-y-auto scroll-smooth scrollbar-hide flex flex-col items-center">

                    {/* 상단 액션 버튼 (공유, 알림) */}
                    <header className="w-full px-5 py-5 flex justify-between items-center relative z-20 shrink-0">
                        <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white transition-colors active:scale-95">
                            <Upload className="w-[18px] h-[18px] text-slate-800" strokeWidth={2.5} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white transition-colors active:scale-95">
                            <Bell className="w-[18px] h-[18px] text-slate-800" strokeWidth={2.5} />
                        </button>
                    </header>

                    {/* 4. 인물 프로필 이미지 - mask-image로 배경에 자연스럽게 스며들도록 퍼지게 처리 */}
                    <div className="w-full relative h-[45vh] min-h-[380px] shrink-0 -mt-20 pointer-events-none">
                        <div
                            className="absolute inset-0 bg-contain bg-top bg-no-repeat z-10 scale-[1.12]"
                            style={{
                                backgroundImage: `url(${expert.profileImage})`,
                                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                    </div>

                    {/* 5. 프로필 정보 텍스트 영역 */}
                    <div className="w-full px-6 flex flex-col items-center relative z-20 text-center -mt-6 shrink-0">
                        <h1 className="text-white text-[22px] font-bold tracking-tight mb-3 drop-shadow-md flex gap-2">
                            <span className="opacity-90">{expert.title}</span>
                            <span>{expert.name}</span>
                        </h1>

                        <p className="text-white/95 text-[15px] pb-6 font-medium leading-relaxed whitespace-pre-line drop-shadow-sm text-center">
                            {expert.quote}
                        </p>

                        <div className="flex flex-col gap-1.5 items-center">
                            {expert.bullets.map((bullet, idx) => (
                                <p key={idx} className="text-white/95 text-[13.5px] font-medium tracking-wide drop-shadow-sm">
                                    {bullet}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* 6. 상담영역 타이틀 */}
                    <div className="w-full px-6 mt-16 mb-5 text-center shrink-0">
                        <h2 className="text-white/90 text-[15px] font-semibold drop-shadow-md shadow-black tracking-widest">상담영역</h2>
                    </div>

                    {/* 7. 카드 슬라이드 컨테이너 (1/3 표기된 상담영역 카드) */}
                    <div className="w-full px-6 pb-8 relative z-20 shrink-0">
                        <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#FAF8F5]/95 to-[#E8DCcb]/95 backdrop-blur-xl rounded-[2.5rem] shadow-xl flex flex-col justify-center items-center text-center p-8 relative overflow-hidden ring-1 ring-white/20">

                            <p className="text-[#3b352b] text-[1.2rem] leading-relaxed font-serif font-medium whitespace-pre-line break-keep">
                                {expert.cardText}
                            </p>
                            <p className="text-[#7d7568] text-[10px] font-serif tracking-widest mt-8 whitespace-pre-line uppercase leading-relaxed">
                                {expert.cardSub}
                            </p>

                            {/* Pagination 인디케이터 */}
                            <div className="absolute bottom-5 right-6 bg-[#3b352b]/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-semibold tracking-widest shadow-inner">
                                1/3
                            </div>
                        </div>
                    </div>

                    {/* 8. 링크 & 소셜 버튼 리스트 */}
                    <div className="w-full px-6 py-4 flex flex-col gap-4 relative z-20 shrink-0">
                        {expert.links.map((link, idx) => {

                            if (link.type === "thumbnail") {
                                return (
                                    <a key={idx} href={link.url} className="w-full bg-[#E5D7C3]/95 hover:bg-[#E5D7C3] backdrop-blur-xl rounded-[2.2rem] p-3 flex items-center gap-4 shadow-xl transition-all active:scale-[0.98]">
                                        <div className="w-[72px] h-[72px] shrink-0 rounded-[1.8rem] bg-white shadow-sm flex items-center justify-center overflow-hidden">
                                            {link.thumbnail && (
                                                <img src={link.thumbnail} alt={link.title} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                        <div className="flex-1 text-[#2d2a26] pr-2 text-[14px] font-semibold leading-snug break-keep whitespace-pre-line">
                                            {link.title}
                                        </div>
                                    </a>
                                );
                            }

                            if (link.type === "kakao") {
                                return (
                                    <a key={idx} href={link.url} className="w-full bg-[#E5D7C3]/95 hover:bg-[#E5D7C3] backdrop-blur-xl rounded-[2.2rem] p-4 flex items-center justify-center gap-2 shadow-xl transition-all active:scale-[0.98]">
                                        <MessageCircle className="w-[18px] h-[18px] fill-[#2d2a26] text-[#2d2a26]" />
                                        <span className="text-[#2d2a26] text-[15px] font-bold">{link.title}</span>
                                    </a>
                                );
                            }

                            return (
                                <a key={idx} href={link.url} className="w-full bg-[#E5D7C3]/95 hover:bg-[#E5D7C3] backdrop-blur-xl rounded-[2.2rem] py-5 px-6 flex items-center justify-center text-center shadow-xl transition-all active:scale-[0.98]">
                                    <span className="text-[#2d2a26] text-[14px] font-bold leading-relaxed whitespace-pre-line break-keep">
                                        {link.title}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    <div className="w-full px-6 pb-12 pt-6 flex justify-center relative z-20 shrink-0">                    {/* Additional Info Box (Optional)*/}
                        <p className="text-xs text-slate-100 font-light leading-relaxed break-keep text-center">
                            트러스트웨이는 고객님의 소중한 자산을 안전하고 체계적으로 관리하는 <strong className="font-medium">종합 금융 컨설팅 파트너</strong>입니다.
                        </p>
                    </div>

                    {/* 하단 푸터 영역 */}
                    <div className="py-8 text-center mt-auto">
                        <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                            © Trustway Jeju. All rights reserved.
                        </p>
                    </div>
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
        </main >
    );
}
