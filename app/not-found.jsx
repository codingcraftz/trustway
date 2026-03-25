import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center font-sans px-6">
            <div className="relative w-full max-w-lg flex flex-col items-center justify-center text-center">
                {/* 배경 조명 효과 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E6D5B8]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    {/* 상단 아이콘 */}
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl">
                        <AlertTriangle className="w-7 h-7 text-[#E6D5B8]/80" strokeWidth={1.5} />
                    </div>

                    {/* 내용 텍스트 */}
                    <h2 className="text-[20px] font-semibold text-white/90 tracking-wide mb-3">
                        페이지를 찾을 수 없습니다
                    </h2>
                    <p className="text-[15px] font-medium text-[#8E8E93] leading-relaxed break-keep mb-10 max-w-[280px]">
                        요청하신 페이지의 주소가 잘못되었거나,<br />
                        현재 삭제되어 접근할 수 없습니다.
                    </p>

                    {/* 홈으로 가기 버튼 */}
                    <Link
                        href="/"
                        className="group relative flex items-center justify-center gap-2.5 w-full max-w-[240px] bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white/90 py-4 px-6 rounded-[1.2rem] shadow-lg transition-all duration-300 active:scale-[0.98]"
                    >
                        <Home className="w-[18px] h-[18px] opacity-70 group-hover:scale-110 group-hover:text-[#E6D5B8] transition-all" strokeWidth={2} />
                        <span className="text-[15px] font-bold tracking-wide">홈으로 돌아가기</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
