import { Search, PenLine, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "현황 분석",
    desc: "지금 든 보험·저축·투자·연금까지, 고객님의 전체 자산을 한눈에 진단합니다.",
  },
  {
    icon: PenLine,
    title: "구조 설계",
    desc: "중복·과보장은 정리하고, 생애주기와 목표에 맞춰 '새는 돈'을 '쌓이는 돈'으로 재설계합니다.",
  },
  {
    icon: Rocket,
    title: "실행 지원",
    desc: "보험 리모델링부터 연금·저축·자산 배분까지, 실제 세팅을 함께 진행합니다.",
  },
  {
    icon: RefreshCw,
    title: "정기 관리",
    desc: "시장과 상황이 바뀌면 다시 점검합니다. 한 번 팔고 끝이 아니라, 오래 함께 봅니다.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            How We Work
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-slate-900 break-keep">
            트러스트웨이는 이렇게 관리합니다
          </h2>
          <p className="mt-5 text-slate-600 break-keep">
            가입 권유가 아니라, <strong className="text-slate-800">분석과 점검</strong>부터 시작합니다.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative bg-white rounded-2xl border border-slate-200 p-8">
              <span className="absolute top-6 right-7 text-5xl font-black text-slate-100 select-none">
                {`0${i + 1}`}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-lg font-bold break-keep">{title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed break-keep">
                {desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
