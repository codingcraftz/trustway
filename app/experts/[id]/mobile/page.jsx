import { experts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, MessageCircle, ArrowRight, ShieldCheck, Crown, Calculator } from "lucide-react";

// Lucide Icon 매핑 객체
const iconMap = {
    ShieldCheck: ShieldCheck,
    Crown: Crown,
    Calculator: Calculator,
};

export function generateStaticParams() {
    return experts.map((expert) => ({
        id: expert.id,
    }));
}

export default async function ExpertMobilePage({ params }) {
    const { id } = await params;
    const expert = experts.find((e) => e.id === id);

    if (!expert) {
        notFound();
    }

    const ExpertIcon = iconMap[expert.mobileIcon] || ShieldCheck;

    return (
        <div className="min-h-screen bg-slate-50 flex justify-center">
            {/* Mobile View Container (Max 420px) */}
            <div className="w-full max-w-[420px] bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] relative flex flex-col">

                {/* 상단 네비게이션바 (선택사항, 뒤로가기) */}
                <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10">
                    <Link href="/experts" className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm text-slate-600 hover:bg-slate-100 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                </div>

                {/* 프로필 헤더 영역 */}
                <div className="pt-20 pb-10 px-6 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 bg-slate-100">
                            <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        {/* 장식용 원형 배경 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-slate-100 rounded-full z-0 blur-md"></div>
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">{expert.name}</h1>
                    <p className="text-sm font-medium text-slate-500 mb-4">{expert.position}</p>

                    {/* 브랜딩 슬로건 영역 */}
                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full mb-2">
                        <ExpertIcon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-slate-700">{expert.mobileSlogan}</span>
                    </div>
                </div>

                {/* 링크 버튼 리스트 영역 */}
                <div className="px-6 flex-grow flex flex-col gap-4">
                    {/* Primary Button: 카카오톡 */}
                    <a
                        href={expert.kakaoLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#FEE500] hover:bg-[#FEE500]/90 text-black py-4 px-6 rounded-full font-semibold shadow-md flex items-center justify-between transition-transform active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 fill-current" />
                            <span>카카오톡으로 1:1 상담하기</span>
                        </div>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                    </a>

                    {/* Secondary Button: Solution */}
                    <Link
                        href="/solution"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 px-6 rounded-full font-medium shadow-md flex items-center justify-between transition-transform active:scale-[0.98]"
                    >
                        <span className="text-[15px]">재무 컨설팅 서비스 소개 확인</span>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                    </Link>

                    {/* Secondary Button: Expert Detail */}
                    <Link
                        href={`/experts/${expert.id}`}
                        className="w-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 py-4 px-6 rounded-full font-medium shadow-sm flex items-center justify-between transition-all active:scale-[0.98]"
                    >
                        <span className="text-[15px]">전문가 상세 이력 보기</span>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>

                    {/* Additional Info Box (Optional)*/}
                    <div className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-xs text-slate-500 font-light leading-relaxed break-keep text-center">
                            트러스트웨이는 고객님의 소중한 자산을 안전하고 체계적으로 관리하는 <strong className="font-medium">종합 금융 컨설팅 파트너</strong>입니다.
                        </p>
                    </div>
                </div>

                {/* 하단 푸터 영역 */}
                <div className="py-8 text-center mt-auto">
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                        © Trustway Jeju. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
