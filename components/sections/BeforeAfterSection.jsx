import { ArrowRight, ArrowDown, TrendingDown, TrendingUp } from "lucide-react";

const rows = [
  {
    label: "보험 구조",
    before: "소모성 위주로 그대로 납입",
    after: "중복 정리 + 꼭 필요한 보장만",
  },
  {
    label: "보장",
    before: "중복·과보장으로 새는 보험료",
    after: "같은 보장, 낮아진 보험료",
  },
  {
    label: "노후 준비",
    before: "준비 없음",
    after: "절감액을 연금·저축으로 전환",
  },
];

const BEFORE_BARS = [58, 44, 32, 22, 13]; // 점점 사라짐
const AFTER_BARS = [16, 28, 40, 52, 66]; // 점점 쌓임

export function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Before &amp; After
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-slate-900 break-keep">
            사라지던 보험료가,
            <br className="sm:hidden" /> 자산이 됩니다
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] items-center">
          {/* BEFORE */}
          <div className="rounded-[28px] bg-slate-50 p-8 md:p-10">
            <p className="text-sm font-bold tracking-widest text-slate-400 mb-8">
              BEFORE · 지금
            </p>
            {rows.map((r, i) => (
              <div key={r.label} className={i > 0 ? "border-t border-slate-200 pt-5 mt-5" : ""}>
                <p className="text-sm text-slate-500 mb-1">{r.label}</p>
                <p className="text-lg font-semibold text-slate-700 break-keep">
                  {r.before}
                </p>
              </div>
            ))}
            {/* viz: 사라짐 */}
            <div className="border-t border-slate-200 pt-6 mt-6">
              <div className="flex items-end gap-2 h-[68px]">
                {BEFORE_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="w-5 rounded-t bg-slate-300"
                    style={{ height: `${h}px`, opacity: 1 - i * 0.15 }}
                  />
                ))}
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                <TrendingDown className="w-4 h-4" /> 매달 사라지는 보험료
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="hidden md:block w-9 h-9 text-primary" strokeWidth={2.5} />
            <ArrowDown className="md:hidden w-8 h-8 text-primary" strokeWidth={2.5} />
          </div>

          {/* AFTER */}
          <div className="relative rounded-[28px] bg-white border-2 border-primary p-8 md:p-10 shadow-xl shadow-primary/5">
            <div className="absolute -top-[2px] left-10 w-16 h-1.5 bg-primary rounded-b-full" />
            <p className="text-sm font-bold tracking-widest text-primary mb-8">
              AFTER · 트러스트웨이
            </p>
            {rows.map((r, i) => (
              <div key={r.label} className={i > 0 ? "border-t border-slate-100 pt-5 mt-5" : ""}>
                <p className="text-sm text-primary/70 mb-1">{r.label}</p>
                <p className="text-lg font-semibold text-slate-800 break-keep">
                  {r.after}
                </p>
              </div>
            ))}
            {/* viz: 쌓임 */}
            <div className="border-t border-slate-100 pt-6 mt-6">
              <div className="flex items-end gap-2 h-[68px]">
                {AFTER_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="w-5 rounded-t bg-primary"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-sm font-bold text-primary">
                <TrendingUp className="w-4 h-4" /> 자산으로 차곡차곡 쌓입니다
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500 leading-relaxed break-keep text-center max-w-3xl mx-auto">
          * 이해를 돕기 위한 예시입니다. 개인의 소득·보험 구조·목표에 따라 결과는
          달라지며, 특정 수익이나 원금을 보장하지 않습니다.
        </p>
      </div>
    </section>
  );
}
