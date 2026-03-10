import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative w-full h-[95vh] min-h-[750px] flex items-center overflow-hidden bg-[#020717]">
            {/* Background elements representing 'path' and 'data lines' */}
            <div className="absolute inset-0 z-0 opacity-40">
                {/* Minimalist Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]"></div>

                {/* Diagonal Abstract Lines / "Paths" */}
                <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-transparent via-blue-900/10 to-transparent transform -skew-x-[35deg] origin-top opacity-50"></div>
                <div className="absolute bottom-0 left-[-20%] w-[100%] h-1/2 border-t border-slate-700/50 transform -skew-y-12 backdrop-blur-3xl"></div>

                {/* Deep Lighting Focus */}
                <div className="absolute top-1/2 right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 z-10" />
            </div>

            <div className="container relative z-20 px-6 md:px-12 xl:px-24 mx-auto max-w-7xl pt-20">
                <div className="max-w-4xl space-y-10 border-l-2 border-slate-600 pl-8 md:pl-12">

                    <div className="animate-fade-in-up delay-100 flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400"></div>
                        <span className="text-slate-400 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                            Integrated Financial Solutions
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-medium text-white leading-[1.1] tracking-tighter break-keep animate-fade-in-up delay-300 mb-8">
                        Navigating <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 font-light">
                            Your Life&apos;s Data
                        </span>
                    </h1>

                    <p className="text-sm md:text-lg text-slate-400 font-light leading-relaxed max-w-xl break-keep animate-fade-in-up delay-500 mb-12">
                        사회 초년생의 첫 저축부터 가장의 가족 보험, 우아한 연금 준비까지.<br className="hidden md:block" />
                        트러스트웨이는 모두의 합리적 내일을 설계하는 평생의 동행 파트너입니다.
                    </p>

                    <div className="animate-fade-in-up delay-700">
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-6 px-10 py-4 border border-slate-600/50 bg-slate-900/30 backdrop-blur-md text-white font-medium text-sm tracking-widest hover:border-slate-400 hover:bg-slate-800/50 transition-all uppercase"
                        >
                            Discover The Masterplan
                            <div className="w-6 h-[1px] bg-white group-hover:w-10 transition-all duration-300"></div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Technical ticker/indices overlay at the bottom */}
            <div className="absolute bottom-0 left-0 w-full border-t border-slate-800 bg-black/40 backdrop-blur-md z-30 py-4 flex overflow-hidden">
                <div className="animate-fade-in flex space-x-12 px-12 opacity-40">
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-widest">
                        <span>Risk Metrics</span>
                        <span className="text-blue-400">Sys Active</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-widest">
                        <span>Tax & Pension Plan</span>
                        <span className="text-blue-400">Ver 2.4</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-widest hidden md:flex">
                        <span>Savings & Investment</span>
                        <span className="text-blue-400">Optimizing</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
