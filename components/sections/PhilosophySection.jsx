export function PhilosophySection() {
    return (
        <section className="py-40 bg-white relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center max-w-6xl">

                <div className="w-full max-w-3xl text-center space-y-16 animate-fade-in-up">
                    <div className="flex justify-center">
                        <div className="w-[1px] h-24 bg-slate-300"></div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-slate-400 font-mono text-xs tracking-[0.3em] uppercase">
                            The Trusted Path
                        </p>
                        <h2 className="text-3xl md:text-5xl font-sans font-light text-slate-900 tracking-tight leading-snug break-keep">
                            금융의 새로운 기준,
                            <br />
                            <strong className="font-semibold text-primary">가장 흔들림 없는 가이드</strong>가 됩니다.
                        </h2>
                    </div>

                    <div className="space-y-8 text-center text-slate-600 font-light leading-relaxed text-[16px] md:text-[17px] break-keep mx-auto tracking-wide">
                        <p>
                            시장은 흔들리고 변수는 통제할 수 없습니다.<br className="hidden sm:block" />
                            그러나 당신의 자산을 향한 철학과 방향성은 결코 흔들려서는 안 됩니다.
                        </p>
                        <p>
                            트러스트웨이는 상품을 나열하는 단순 판매 집단이 아닙니다.<br className="hidden sm:block" />
                            철저히 객관화된 데이터와 각 분야 최고 수준의 전문성을 바탕으로,<br className="hidden sm:block" />
                            고객 한 분 한 분의 여정에 가장 정확한 이정표를 제시하는 신뢰의 파트너입니다.
                        </p>
                        <p>
                            저축의 시작부터 안락한 은퇴, 그리고 완벽한 상속의 순간까지.<br className="hidden sm:block" />
                            우리는 가장 무거운 책임감으로 고객의 삶이라는 거대한 명세서를 함께 읽어 내려갑니다.
                        </p>
                    </div>

                    <div className="pt-8">
                        {/* Sincere Signature Touch */}
                        <p className="font-serif italic text-2xl text-slate-800">
                            Trustway Finance Partners
                        </p>
                        <div className="w-16 h-[1px] bg-slate-300 mx-auto mt-6"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
