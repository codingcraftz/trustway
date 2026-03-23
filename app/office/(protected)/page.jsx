import { AlertTriangle, Users, FileText, Settings } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "사내 업무 시스템 | TrustWay Office"
};

export default function OfficeDashboard() {
    return (
        <div className="animate-fade-in-up space-y-10">
            <header className="border-b border-slate-200 pb-8">
                <h1 className="text-4xl font-extrabold text-[#031242] tracking-tighter">Office Dashboard</h1>
                <p className="text-slate-500 font-light mt-2 tracking-wide text-[15px]">
                    환영합니다. 트러스트웨이 통합 업무 로비입니다. (승인된 관리자/임직원 전용)
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <Link href="/office/customers" className="block outline-none group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group-hover:shadow-lg transition-all flex flex-col items-start min-h-[160px] h-full cursor-pointer group-hover:border-blue-200">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-blue-700 transition-colors">고객 관리 (CRM)</h3>
                        <p className="text-[13px] text-slate-500 mt-2 font-light leading-relaxed">
                            통합 고객 리스트 및 가족 그룹 단위 정보 등록/열람
                        </p>
                    </div>
                </Link>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col items-start min-h-[160px]">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mb-4">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">컨설팅 자료</h3>
                    <p className="text-[13px] text-slate-500 mt-2 font-light leading-relaxed">
                        내부 회의록 및 투자 리서치, 보험/연금 설계 레퍼런스
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col items-start min-h-[160px]">
                    <div className="p-3 bg-slate-100 text-slate-600 rounded-xl mb-4">
                        <Settings className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">시스템 설정</h3>
                    <p className="text-[13px] text-slate-500 mt-2 font-light leading-relaxed">
                        사내 계정 승인 및 권한 부여, 웹사이트 UI 설정 요소 관리
                    </p>
                </div>

            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 text-[13px] inline-flex items-start gap-3 w-full">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <p className="font-light leading-relaxed break-keep">
                    <strong>보안 경고:</strong> 이 시스템에 저장된 모든 데이터는 회사의 자산이며 극비 사항입니다. 외부 유출 시 법적 책임을 질 수 있습니다.
                </p>
            </div>
        </div>
    );
}
