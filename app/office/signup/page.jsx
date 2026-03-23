import Link from "next/link";
import { SignupForm } from "./components/SignupForm";

export const metadata = {
    title: "신규 임직원 계정 가입 | TrustWay Office"
};

export default function SignupPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#031242]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

            {/* Widen the max-width to accommodate complex form components */}
            <div className="w-full max-w-[620px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative z-10 my-10">
                <div className="bg-[#031242] p-10 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                    <img src="/logo/trustway.png" alt="TrustWay" className="h-8 mx-auto mb-4 filter brightness-0 invert opacity-90 relative z-10" />
                    <h1 className="text-2xl font-black text-white tracking-tight relative z-10">TrustWay Employee Portal</h1>
                    <p className="text-blue-200/80 text-[13px] mt-2 tracking-wide font-light relative z-10">
                        신규 임직원 시스템 접근 권한 신청서
                    </p>
                </div>

                <div className="p-8 md:p-12 pb-8">
                    <SignupForm />

                    {/* Disclaimer Added Here */}
                    <div className="mt-8 p-5 bg-amber-50 rounded-xl border border-amber-100">
                        <p className="text-[13px] text-amber-800 leading-relaxed font-medium break-keep">
                            💡 <strong className="font-bold">신청 후 관리자의 승인이 있어야 서비스 이용이 가능합니다.</strong><br/>승인 전까지는 대기 페이지로 표시됩니다. 작성하신 개인 정보는 철저히 암호화되어 보관됩니다.
                        </p>
                    </div>

                    <div className="mt-8 text-center border-t border-slate-100 pt-6">
                        <p className="text-[14px] font-medium text-slate-500">
                            이미 계정이 있으신가요?{" "}
                            <Link href="/office/login" className="text-[#031242] font-bold hover:underline">
                                로그인으로 돌아가기
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
