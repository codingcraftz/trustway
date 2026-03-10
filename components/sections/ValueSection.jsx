import { ShieldAlert, TrendingUp, Layers } from "lucide-react";

export function ValueSection() {
    return (
        <section className="py-32 md:py-48 bg-slate-50 relative border-b border-slate-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                <div className="flex flex-col lg:flex-row justify-between mb-24 gap-12 lg:gap-24 animate-fade-in-up">
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-slate-400"></div>
                            <span className="text-slate-500 font-mono tracking-widest text-xs uppercase">
                                Integrated Financial Architecture
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-sans font-light text-slate-900 leading-[1.25] tracking-tight">
                            Strategic Portfolio <br />
                            <strong className="font-semibold text-primary">Advanced Protection</strong> & <br />
                            Endless Trust
                        </h2>
                    </div>

                    <div className="lg:w-1/2 flex items-end">
                        <p className="text-[15px] text-slate-500 leading-relaxed font-light border-l border-slate-300 pl-6 max-w-lg break-keep">
                            투자, 저축, 절세, 보험, 연금이 완벽하게 맞물린 자산 관리를 경험하세요. <br className="hidden md:block" />
                            트러스트웨이는 각 분야 최정예 전문가들의 유기적인 데이터 결합을 통해, 빈틈없이 돌아가는 <strong className="text-slate-800 font-medium">통합 재무 포트폴리오</strong>를 설계합니다.
                        </p>
                    </div>
                </div>

                {/* Infographic / Interconnected Layout */}
                <div className="relative w-full max-w-5xl mx-auto mt-20">

                    {/* Connecting Lines between boxes (desktop only) */}
                    <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-slate-300 z-0 border-t border-dashed border-slate-400"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                        {/* Box 1 */}
                        <div className="bg-white p-10 border border-slate-200 hover:border-slate-400 transition-colors shadow-sm animate-fade-in-up delay-200 flex flex-col group">
                            <div className="w-16 h-16 rounded-none bg-slate-100 flex items-center justify-center mb-8 border border-slate-200 text-slate-700 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <ShieldAlert strokeWidth={1} className="w-8 h-8" />
                            </div>
                            <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Phase 01 / Defense</h3>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">Risk Management</h4>
                            <p className="text-sm text-slate-500 font-light leading-relaxed h-full break-keep border-t border-slate-100 pt-4 mt-auto">
                                질병, 재난, 상속 분쟁 등 통제 불가능한 변수로부터 자산의 훼손을 완벽히 차단하는 데이터 기반 다중 방어막.
                            </p>
                        </div>

                        {/* Box 2: Center Highlight */}
                        <div className="bg-[#031242] p-10 border border-transparent shadow-xl transform lg:-translate-y-8 animate-fade-in-up delay-400 flex flex-col group overflow-hidden relative">
                            {/* Abstract wireframe bg */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 z-0"></div>

                            <div className="w-16 h-16 rounded-none bg-white/10 flex items-center justify-center mb-8 border border-white/20 text-white relative z-10">
                                <Layers strokeWidth={1} className="w-8 h-8" />
                            </div>
                            <h3 className="text-xs font-mono tracking-widest text-blue-300 uppercase mb-2 relative z-10">Core System</h3>
                            <h4 className="text-xl font-bold text-white mb-4 relative z-10">Wealth Architecture</h4>
                            <p className="text-sm text-slate-300 font-light leading-relaxed h-full break-keep border-t border-white/20 pt-4 mt-auto relative z-10">
                                시중은행 VIP 자산관리 인프라와 재무 설계를 결합하여, 고객의 전 생애에 맞춘 목적지향적 웰스 매니지먼트.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-white p-10 border border-slate-200 hover:border-slate-400 transition-colors shadow-sm animate-fade-in-up delay-600 flex flex-col group">
                            <div className="w-16 h-16 rounded-none bg-slate-100 flex items-center justify-center mb-8 border border-slate-200 text-slate-700 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <TrendingUp strokeWidth={1} className="w-8 h-8" />
                            </div>
                            <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">Phase 02 / Growth</h3>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">Asset & Tax Plan</h4>
                            <p className="text-sm text-slate-500 font-light leading-relaxed h-full break-keep border-t border-slate-100 pt-4 mt-auto">
                                수익성 높은 저축, 투자 전략부터 IRP/ISA 계좌를 통한 절세와 연금 확보까지. 미래를 향한 자산의 든든한 성장 로드맵.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
