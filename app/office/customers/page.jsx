import { getCustomers } from "./actions";
import { CustomerListFilters } from "./components/CustomerListFilters";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { Suspense } from "react";

export const metadata = {
    title: "고객 리스트 | TrustWay Office"
};

export default async function CustomersPage({ searchParams }) {
    // Next.js 15+ searchParams are async
    const params = await searchParams;
    const q = params.q || '';
    const categoryQuery = params.category || '전체';

    const customers = await getCustomers(q, categoryQuery);

    return (
        <div className="space-y-8 animate-fade-in-up">
            <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[#031242] tracking-tighter">고객 리스트</h1>
                    <p className="text-slate-500 font-light mt-2 tracking-wide text-[14px]">
                        통합 CRM을 통해 고객과 가족 그룹을 관리하세요.
                    </p>
                </div>
                <Link href="/office/customers/new">
                    <Button className="h-11 px-6 bg-[#031242] hover:bg-[#031242]/90 text-white rounded-lg shadow-sm font-bold tracking-tight">
                        <UserPlus className="w-4 h-4 mr-2" />
                        신규 고객 등록
                    </Button>
                </Link>
            </header>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <Suspense fallback={<div className="h-10 mb-6 bg-slate-50 animate-pulse rounded-lg" />}>
                    <CustomerListFilters />
                </Suspense>

                <div className="rounded-xl border border-slate-200 overflow-hidden mt-4">
                    <Table>
                        <TableHeader className="bg-slate-50/80">
                            <TableRow>
                                <TableHead className="font-semibold text-slate-700">고객명</TableHead>
                                <TableHead className="font-semibold text-slate-700">생년월일 / 성별</TableHead>
                                <TableHead className="font-semibold text-slate-700">가족 그룹</TableHead>
                                <TableHead className="font-semibold text-slate-700">연락처</TableHead>
                                <TableHead className="font-semibold text-slate-700">분류</TableHead>
                                <TableHead className="font-semibold text-slate-700 text-right">담당 직원</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-40 text-center text-slate-500 font-light">
                                        등록된 고객 정보가 없습니다.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                customers.map((c) => (
                                    <TableRow key={c.id} className="hover:bg-blue-50/50 transition-colors">
                                        <TableCell className="font-bold text-slate-900">{c.name}</TableCell>
                                        <TableCell className="text-slate-600">
                                            {c.birth_date ? c.birth_date : '-'} {c.gender && `(${c.gender})`}
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-[13px] bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium">
                                                {c.family_groups?.group_name || '그룹 미지정'}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-slate-600 tracking-tight">{c.phone_number}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={`
                                                ${c.category === '계약자' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 
                                                  c.category === '가망고객' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-600 border-slate-200'}
                                            `}>
                                                {c.category}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right text-slate-500 font-medium text-[13px]">
                                            {c.profiles?.name || '시스템'}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
