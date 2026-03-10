import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Mail, Award, BookOpen, Star, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { experts } from "@/lib/data";

export async function generateStaticParams() {
    return experts.map((expert) => ({
        id: expert.id,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const expert = experts.find((e) => e.id === resolvedParams.id);
    if (!expert) return { title: "전문가 상세 | TrustWay" };

    return {
        title: `${expert.name} ${expert.position.split(" / ")[0]} | 전문가 파트너 | TrustWay`,
        description: expert.description,
    };
}

export default async function ExpertDetailPage({ params }) {
    const resolvedParams = await params;
    const expert = experts.find((e) => e.id === resolvedParams.id);

    if (!expert) {
        notFound();
    }

    // 직함과 롤(Role) 분리
    const [positionTitle, positionRole] = expert.position.split(" / ");

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="flex flex-col lg:flex-row w-full min-h-screen items-stretch">

                {/* === Left Side (Sticky Image Hero) === */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen relative overflow-hidden bg-slate-100 hidden lg:block">
                    <img
                        src={expert.image}
                        alt={`${expert.name} ${expert.position}`}
                        className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle Dark Gradient Overlay at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent pointer-events-none" />

                    {/* Back button (Floating on image) */}
                    <Link href="/experts" className="absolute top-24 left-10 z-20 group">
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-white/20 hover:scale-105">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide uppercase">Teams</span>
                        </div>
                    </Link>

                    {/* Floating Hero Info Box */}
                    <div className="absolute bottom-16 left-12 right-12 z-20">
                        <p className="text-blue-300 font-semibold tracking-widest text-sm uppercase mb-4 flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-blue-300 block"></span>
                            {positionTitle}
                        </p>
                        <h1 className="text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-tight mb-2">
                            {expert.name}
                        </h1>
                        <p className="text-2xl xl:text-3xl text-slate-300 font-light mix-blend-screen">
                            {positionRole}
                        </p>
                    </div>
                </div>

                {/* === Mobile Only Image Header === */}
                <div className="w-full h-[60vh] relative lg:hidden bg-slate-100 overflow-hidden shrink-0 mt-16">
                    <img
                        src={expert.image}
                        alt={`${expert.name} ${expert.position}`}
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent pointer-events-none" />

                    <Link href="/experts" className="absolute top-6 left-6 z-20">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm hover:bg-white/30">
                            <ChevronLeft className="w-4 h-4" />
                            <span className="text-sm font-semibold">Back</span>
                        </div>
                    </Link>
                </div>


                {/* === Right Side (Scrollable Details) === */}
                <div className="w-full lg:w-1/2 bg-slate-50 relative z-10 flex flex-col justify-between -mt-10 lg:mt-0 rounded-t-[2.5rem] lg:rounded-none shadow-[0_-15px_40px_rgba(0,0,0,0.15)] lg:shadow-none min-h-screen">
                    <div className="px-6 sm:px-10 xl:px-16 pt-16 pb-40 lg:pt-32 max-w-3xl mx-auto w-full flex-grow">

                        {/* Mobile Title (Hidden on Desktop since it's on the image) */}
                        <div className="lg:hidden mb-12">
                            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-primary block"></span>
                                {positionTitle}
                            </p>
                            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                                {expert.name}
                            </h1>
                            <p className="text-xl text-slate-500 font-medium">
                                {positionRole}
                            </p>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-16">
                            <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
                                <div className="flex items-center gap-2 text-slate-400 mb-3">
                                    <Star className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Experience</span>
                                </div>
                                <p className="text-2xl font-black text-slate-800">{expert.years}</p>
                            </div>
                            <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
                                <div className="flex items-center gap-2 text-slate-400 mb-3">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Contact</span>
                                </div>
                                <p className="text-[15px] xl:text-base font-bold text-slate-800 break-all">{expert.email}</p>
                            </div>
                        </div>

                        {/* Core Value (Bio) */}
                        <section className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tighter">핵심 가치</h2>
                            </div>
                            <div className="pl-6 border-l-4 border-blue-200 py-2 mb-8">
                                <p className="text-slate-700 text-2xl font-semibold leading-relaxed break-keep">
                                    "{expert.description}"
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {expert.tags.map((tag, idx) => (
                                    <Badge key={idx} variant="secondary" className="px-5 py-2 text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors shadow-sm rounded-xl">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </section>

                        <Separator className="bg-slate-200 my-16" />

                        {/* Background & Education */}
                        <section className="mb-16">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tighter">주요 약력</h2>
                            </div>
                            <ul className="space-y-8">
                                {expert.education.map((item, idx) => (
                                    <li key={idx} className="flex gap-6 group relative">
                                        <div className="relative mt-1.5 shrink-0">
                                            <div className="w-4 h-4 rounded-full border-[3px] border-primary bg-white z-10 relative group-hover:scale-125 transition-transform"></div>
                                            {/* Line connector */}
                                            {idx !== expert.education.length - 1 && (
                                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+2rem)] bg-slate-200 -z-0"></div>
                                            )}
                                        </div>
                                        <span className="text-slate-700 text-xl font-medium leading-relaxed break-keep pb-2">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Certifications */}
                        <section className="mb-16">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tighter">보유 자격</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-5">
                                {expert.certificates.map((cert, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 hover:-translate-y-1 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-lg">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Fixed Bottom CTA Container */}
                    <div className="fixed lg:sticky bottom-0 left-0 lg:left-1/2 right-0 w-full lg:w-1/2 bg-white/90 backdrop-blur-xl border-t border-slate-200 p-6 lg:p-8 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left hidden lg:block">
                                <p className="text-[13px] font-black tracking-widest text-primary uppercase mb-1">Book a consultation</p>
                                <p className="text-slate-500 font-semibold text-sm">트러스트웨이와 내일을 설계하세요.</p>
                            </div>

                            <Button asChild className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-bold rounded-2xl shadow-xl transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(3,18,66,0.3)] active:translate-y-0">
                                <Link href={`/?expertId=${expert.id}#contact`}>
                                    예약 문의하기
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
