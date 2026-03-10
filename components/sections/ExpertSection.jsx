import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experts } from "@/lib/data";

export function ExpertSection() {
    return (
        <section className="py-32 md:py-48 bg-[#020b26] relative overflow-hidden text-slate-300">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px] relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 border-b border-slate-800 pb-16 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <p className="text-blue-400 font-mono tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-blue-500"></span>
                            Elite Partners
                        </p>
                        <h2 className="text-3xl md:text-5xl font-sans font-light text-white tracking-tight break-keep leading-[1.2]">
                            오직 결과로 증명하는 <br />
                            <strong className="font-medium text-slate-200">최상위 금융 전문가</strong>
                        </h2>
                    </div>
                    <div>
                        <Link
                            href="/experts"
                            className="group flex items-center gap-3 text-sm font-mono tracking-widest text-slate-400 hover:text-white transition-colors uppercase"
                        >
                            View Full Profiles
                            <span className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-slate-400 group-hover:bg-slate-800 transition-all">
                                <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {experts.map((expert, idx) => (
                        <Link href={`/experts/${expert.id}`} key={expert.id} className={`group block focus:outline-none h-[500px] animate-fade-in-up delay-${(idx + 2) * 100}`}>
                            <div className="relative w-full h-full border border-slate-800 bg-[#050f2e] overflow-hidden transition-all duration-500 group-hover:border-blue-900/50 flex flex-col justify-end p-8">

                                {/* Black & White to subtle color image transition */}
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-110 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020b26] via-[#020b26]/90 to-transparent"></div>

                                {/* Hard Spec Tags Overlay */}
                                <div className="absolute top-8 right-8 flex flex-col items-end space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {expert.tags.slice(0, 2).map(tag => (
                                        <div key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-slate-300 font-mono">
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative z-10">
                                    <div className="h-[1px] w-12 bg-blue-500 mb-6 group-hover:w-full transition-all duration-700"></div>
                                    <p className="text-blue-400 font-mono tracking-[0.25em] text-[11px] uppercase mb-2 group-hover:text-blue-300 transition-colors">
                                        {idx === 0 ? "Integrated Planning" : idx === 1 ? "Wealth & Tax" : "Savings & Pension"}
                                    </p>
                                    <h3 className="text-3xl font-sans font-medium text-white tracking-tight flex items-center justify-between">
                                        {expert.name}
                                        <ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                                    </h3>
                                    <p className="text-slate-500 text-sm mt-3 font-light leading-relaxed h-[42px] overflow-hidden group-hover:text-slate-300 transition-colors">
                                        {expert.description.substring(0, 50)}...
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
