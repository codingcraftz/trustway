import { getFamilyGroups } from "../actions";
import { CustomerForm } from "./components/CustomerForm";
import { UserPlus } from "lucide-react";

export const metadata = {
    title: "신규 고객 등록 | TrustWay CRM"
};

export default async function NewCustomerPage() {
    const familyGroups = await getFamilyGroups();

    return (
        <div className="space-y-8 animate-fade-in-up max-w-4xl mx-auto">
            <header className="border-b border-slate-200 pb-6">
                <div className="flex items-center gap-3">
                    <UserPlus className="w-8 h-8 text-[#031242]" />
                    <div>
                        <h1 className="text-3xl font-extrabold text-[#031242] tracking-tighter">신규 고객 등록</h1>
                        <p className="text-slate-500 font-light mt-1.5 tracking-wide text-[14px]">
                            새로운 고객의 인적사항을 입력하고 가족 그룹을 묶어 관리하세요.
                        </p>
                    </div>
                </div>
            </header>

            <CustomerForm familyGroups={familyGroups} />
        </div>
    );
}
