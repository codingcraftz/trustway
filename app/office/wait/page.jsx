"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function WaitPage() {
    const router = useRouter();
    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/office/login");
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-slate-50 relative overflow-hidden">
            <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 p-10 md:p-14 text-center z-10 relative">

                {/* Pending Icon Animation */}
                <div className="w-20 h-20 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-amber-200 animate-ping opacity-20" />
                    <span className="text-3xl">⏳</span>
                </div>

                <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-4">관리자 승인 대기 중</h1>

                <div className="space-y-4 mb-10 text-slate-600 font-light text-[15px] leading-relaxed break-keep">
                    <p>
                        현재 관리자의 허가를 기다리고 있습니다.<br />
                        <strong className="font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">허가 없이 로그인한 분은 관리자에게 문의하세요.</strong>
                    </p>
                    <p className="text-sm">
                        승인 처리 완료 후 사내 시스템에 접근하실 수 있습니다.
                    </p>
                </div>

                <div className="space-y-4">
                    <button onClick={handleLogout} className="text-sm font-light text-slate-400 hover:text-slate-600 underline underline-offset-4 tracking-wide">
                        다른 계정으로 로그인 (Logout)
                    </button>
                </div>
            </div>
        </div>
    );
}
