import Image from "next/image";
import { X, ChevronRight, Award, CheckCircle2, Building2, User, MessageCircle, Phone, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { mobileExperts } from "@/lib/mobileExperts";
import { MobileShareHeader } from "@/components/shared/MobileShareHeader";
import { getExpertMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
    return mobileExperts.map((expert) => ({
        id: expert.id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const expert = mobileExperts.find((e) => e.id === id);
    return getExpertMetadata(expert);
}

export default async function MobileCardTestPage({ params }) {
    const { id } = await params;

    // mobileExperts 에서 찾기
    const expert = mobileExperts.find(e => e.id === id);

    if (!expert) {
        return (
            <div className="fixed inset-0 bg-[#000000] flex items-center justify-center text-white">
                <p>전문가 프로필을 찾을 수 없습니다.</p>
            </div>
        );
    }

    const phoneNumber = expert.phone || "+82 10-0000-0000";
    const emailAddress = expert.email || `${id}@trustway.co.kr`;

    const kakaoLink = expert.links?.find(l => l.type === "kakao");
    const otherLinks = expert.links?.filter(l => l.type !== "kakao") || [];

    // 초현대식 프리미엄 테마 (다크 모드 + 유리 질감 + 은은한 샌드골드 포인트)
    const t = {
        bg: "bg-[#050505]", // 완전한 딥 블랙
        cardBg: "bg-[#121214]", // 떠있는 섬 형태의 카드 배경
        cardBorder: "border border-white/[0.06]", // 아주 미세한 테두리
        accentText: "text-[#E6D5B8]", // 우아한 밝은 샌드골드
        accentIconBg: "bg-[#E6D5B8]/10",
        primaryText: "text-[#FFFFFF]",
        mutedText: "text-[#8E8E93]", // 현대적인 애플식 그레이
    };

    return (
        <main className="fixed inset-0 z-[9999] bg-black flex items-center justify-center font-sans tracking-tight">
            {/* 모바일 뷰 컨테이너 */}
            <div className={`relative w-full h-full sm:h-[850px] sm:max-w-[420px] ${t.bg} sm:rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl ring-1 ring-white/10`}>

                {/* 상단 닫기 버튼 (유리 질감) */}
                <Link href={`/experts/${id}`} className="absolute top-6 left-5 z-50 w-10 h-10 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-transform border border-white/10 shadow-lg">
                    <X className="w-5 h-5 text-white/90" />
                </Link>

                {/* 우측 상단 공유하기 버튼 */}
                <MobileShareHeader 
                    expertName={expert.name} 
                    expertTitle={expert.title} 
                    className="absolute top-6 right-5 z-50" 
                />

                {/* 콘텐츠 영역 (스크롤) */}
                <div className="flex-1 overflow-y-auto scrollbar-hide pb-36">

                    {/* 상단 프로필 이미지 & 명함 카드 영역 */}
                    <div className="relative w-full bg-[#E6D5B8] bg-[#121214]" style={{ height: "62vh", minHeight: "480px" }}>
                        <Image
                            src={expert.profileImage}
                            alt={expert.name}
                            fill
                            className="object-cover object-top"
                        />

                        {/* 그라데이션 오버레이 (사진이 자연스럽게 블랙 배경으로 녹아들게) */}
                        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />

                        {/* 초현대적 형태의 플로팅 명함 카드 (Glassmorphism) */}
                        <div className="absolute inset-x-5 bottom-0 bg-white/[0.03] backdrop-blur-[30px] rounded-[24px] p-7 shadow-2xl border border-white/[0.08] translate-y-8 z-10 flex flex-col items-center text-center">
                            <span className="px-3 py-1 bg-white/10 rounded-full text-[#E6D5B8] text-[11px] font-semibold tracking-widest uppercase mb-4 border border-white/5">
                                {expert.title}
                            </span>
                            <h1 className="text-white text-[32px] font-extrabold mb-1 tracking-tight drop-shadow-md">
                                {expert.name}
                            </h1>
                            <p className={`${t.mutedText} text-[14px] font-medium mb-6 tracking-wide`}>
                                트러스트웨이 제주본부
                            </p>

                            <div className="flex gap-2.5 justify-center flex-wrap w-full mt-2">
                                {["재무설계", "증권", "보험", "연금"].map((kw, idx) => (
                                    <span key={idx} className="bg-white/5 text-white/80 text-[12.5px] px-3.5 py-1.5 rounded-full font-medium border border-white/10 shadow-sm tracking-wide">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 플로팅 카드로 인해 생긴 여백 */}
                    <div className="h-16"></div>

                    <div className="px-5 space-y-4">

                        {/* 1. 빠른 연락처 모듈 (아일랜드 스타일) */}
                        <div className={`${t.cardBg} ${t.cardBorder} rounded-[24px] p-2 flex flex-col`}>
                            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="flex items-center justify-between px-4 py-4 active:bg-white/5 transition-colors rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                        <Phone className="w-4 h-4 text-[#E6D5B8]" />
                                    </div>
                                    <span className={`${t.mutedText} text-[14px] font-medium`}>휴대전화</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-[15px] font-semibold tracking-wide">{phoneNumber}</span>
                                    <ChevronRight className="w-4 h-4 text-white/30" />
                                </div>
                            </a>
                            <div className="h-[1px] w-[calc(100%-2rem)] mx-auto bg-white/5"></div>
                            <a href={`mailto:${emailAddress}`} className="flex items-center justify-between px-4 py-4 active:bg-white/5 transition-colors rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                                        <Mail className="w-4 h-4 text-[#E6D5B8]" />
                                    </div>
                                    <span className={`${t.mutedText} text-[14px] font-medium`}>이메일</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-[15px] font-semibold tracking-wide">{emailAddress}</span>
                                    <ChevronRight className="w-4 h-4 text-white/30" />
                                </div>
                            </a>
                        </div>

                        {/* 2. 슬로건 카드 */}
                        <div className="py-6 px-2 text-center">
                            <MessageCircle className="w-6 h-6 text-[#E6D5B8]/40 mx-auto mb-4" />
                            <p className="text-white/90 text-[16px] leading-relaxed font-medium break-keep">
                                {expert.cardText.replace(/"/g, '')}
                            </p>
                            <p className="text-[#E6D5B8] text-[11px] font-bold tracking-[0.2em] uppercase mt-4 opacity-80">
                                {expert.cardSub}
                            </p>
                        </div>

                        {/* 3. 주요 이력 (Careers) 아일랜드 모듈 */}
                        <div className={`${t.cardBg} ${t.cardBorder} rounded-[24px] p-6`}>
                            <h3 className="text-white text-[16px] font-bold mb-5 flex items-center gap-2.5">
                                <FileText className="w-5 h-5 text-[#E6D5B8]" />
                                주요 이력
                            </h3>
                            <div className="flex flex-col gap-4">
                                {expert.bullets.map((bullet, idx) => (
                                    <div key={idx} className="flex items-center gap-3.5 group">
                                        {bullet.highlight ? (
                                            <div className="p-1.5 bg-[#E6D5B8]/20 rounded-full flex-shrink-0 border border-[#E6D5B8]/30">
                                                <Award className="w-3.5 h-3.5 text-[#E6D5B8]" />
                                            </div>
                                        ) : (
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0 ml-2" />
                                        )}
                                        <p className={`text-[14px] leading-relaxed break-keep tracking-wide ${bullet.highlight ? "text-white font-semibold" : "text-[#8E8E93] font-medium"}`}>
                                            {bullet.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. 서비스 (Services) 아일랜드 모듈 */}
                        <div className={`${t.cardBg} ${t.cardBorder} rounded-[24px] overflow-hidden`}>

                            {/* 개인 자산관리 파트 */}
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">
                                        <User className="w-4 h-4 text-[#E6D5B8]" />
                                    </div>
                                    <h4 className="text-white font-bold text-[15px] tracking-wide">개인 자산관리</h4>
                                </div>
                                <ul className="flex flex-col gap-3.5">
                                    {expert.personalServices.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#E6D5B8]/60 flex-shrink-0" />
                                            <p className="text-white/80 text-[14px] font-medium leading-snug break-keep">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 법인 경영 컨설팅 파트 (있을 경우만) */}
                            {expert.corporateServices && expert.corporateServices.length > 0 && (
                                <div className="p-6 bg-white/[0.02] border-t border-white/5">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">
                                            <Building2 className="w-4 h-4 text-[#E6D5B8]" />
                                        </div>
                                        <h4 className="text-white font-bold text-[15px] tracking-wide">법인 경영 컨설팅</h4>
                                    </div>
                                    <ul className="flex flex-col gap-3.5">
                                        {expert.corporateServices.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-[#E6D5B8]/60 flex-shrink-0" />
                                                <p className="text-white/80 text-[14px] font-medium leading-snug break-keep">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 다른 웹링크들 */}
                        {otherLinks.length > 0 && (
                            <div className="flex flex-col gap-3">
                                {otherLinks.map((link, idx) => (
                                    <a key={idx} href={link.url} className="w-full bg-[#121214] border border-white/10 rounded-[20px] py-4 px-6 flex items-center justify-between active:scale-[0.98] transition-transform shadow-sm">
                                        <span className="text-white/90 text-[14px] font-medium leading-relaxed whitespace-pre-line break-keep">{link.title}</span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                            <ChevronRight className="w-4 h-4 text-[#E6D5B8]" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* 제작자 표시 풋터 영역 */}
                    <div className="w-full text-center mt-8 mb-2 pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-2 opacity-90">
                        <p className="text-[10px] text-white/50 font-mono tracking-widest uppercase mb-1">
                            © {new Date().getFullYear()} Trustway.
                        </p>
                        <div className="flex flex-col items-center gap-1.5 text-[11.5px] text-white/40 font-medium tracking-wide">
                            <span className="text-white/60">페이지 관련 문의 및 버그제보</span>
                            <span className="flex items-center gap-1">
                                Designed & Developed by <strong className="text-white/80 font-semibold text-[12px]">codingcraftz</strong>
                            </span>
                            <a href="mailto:codingcraftz@naver.com" className="text-[#E6D5B8]/80 hover:text-white underline underline-offset-4 decoration-[#E6D5B8]/30 transition-colors mt-0.5">
                                codingcraftz@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* 하단 강력한 플로팅 액션 버튼 (애플 스타일의 둥근 플로팅 바) */}
                <div className="absolute bottom-6 left-5 right-5 z-20 flex flex-col items-center">
                    <a href={kakaoLink ? kakaoLink.url : "#"} target={kakaoLink ? "_blank" : "_self"} className="w-full bg-[#E6D5B8] text-black py-[16px] rounded-[18px] text-[16px] font-extrabold tracking-tight active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(230,213,184,0.3)]">
                        <MessageCircle className="w-5 h-5 fill-black" strokeWidth={2} />
                        1:1 카카오톡 상담 예약
                    </a>
                </div>

                {/* 시스템 홈바 영역 */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-white/30 rounded-full z-50 pointer-events-none" />
            </div>

            {/* 스크롤바 숨김용 스타일 */}
            <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }` }} />
        </main>
    );
}
