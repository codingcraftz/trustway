import { login } from "./actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
    title: "사내 시스템 로그인 | TrustWay Office"
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#031242]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

            <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative z-10">
                <div className="bg-[#031242] p-10 text-center relative overflow-hidden">
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <img src="/logo/trustway.png" alt="TrustWay" className="h-16 mx-auto mb-4 filter brightness-0 invert opacity-90 relative z-10" />
                    <h1 className="text-2xl font-black text-white tracking-tight relative z-10">Office Portal</h1>
                    <p className="text-blue-200/80 text-[13px] mt-2 tracking-wide font-light relative z-10">트러스트웨이 사내 업무 시스템</p>
                </div>

                <div className="p-10 pt-8">
                    <form action={login} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-xs font-mono tracking-widest text-[#031242]/70 uppercase font-semibold">ID</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="h-12 border-slate-200 focus-visible:ring-[#031242]/20 focus-visible:border-[#031242] text-sm px-4 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-xs font-mono tracking-widest text-[#031242]/70 uppercase font-semibold">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="h-12 border-slate-200 focus-visible:ring-[#031242]/20 focus-visible:border-[#031242] text-sm px-4 rounded-xl"
                            />
                        </div>
                        <div className="pt-4">
                            <Button type="submit" className="w-full h-12 bg-[#031242] hover:bg-[#031242]/90 text-white rounded-xl shadow-md font-semibold tracking-wide transition-all active:scale-[0.98]">
                                로그인
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 text-center border-t border-slate-100 pt-6">
                        <p className="text-sm font-light text-slate-500">
                            처음 오셨나요?{" "}
                            <Link href="/office/signup" className="text-[#031242] font-semibold hover:underline">
                                계정 신청하기
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
