import { ShieldCheck, PiggyBank, LineChart, Landmark, Receipt, Scale } from "lucide-react";

const stages = [
  {
    age: "사회초년기",
    sub: "20~30대 초반",
    items: ["비상금·저축 습관 만들기", "보험 점검(리스크 관리)", "첫 종잣돈 형성"],
  },
  {
    age: "자산형성기",
    sub: "30~40대",
    items: ["주택·교육 등 목적자금", "저축·투자 배분 설계", "보장 리모델링"],
  },
  {
    age: "은퇴준비기",
    sub: "50대",
    items: ["국민·퇴직·개인 3층연금", "절세(IRP·ISA) 활용", "자산 배분 재정비"],
  },
  {
    age: "노후생활기",
    sub: "은퇴 이후",
    items: ["연금 인출 전략", "의료·간병 대비", "상속·증여 설계"],
  },
];

const domains = [
  { icon: ShieldCheck, label: "리스크 관리" },
  { icon: PiggyBank, label: "저축" },
  { icon: LineChart, label: "투자" },
  { icon: Landmark, label: "연금" },
  { icon: Receipt, label: "절세" },
  { icon: Scale, label: "상속·증여" },
];

export function LifeCycleSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Life-Cycle Planning
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-slate-900 break-keep">
            인생의 모든 단계를, 체계적으로 설계합니다
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed break-keep max-w-2xl mx-auto">
            소득과 자산의 규모와 관계없이, 재무설계는 모두에게 필요합니다.
            트러스트웨이는 지금부터 노후까지, 생애주기 전체를 함께 설계합니다.
          </p>
        </div>

        {/* income / expense curve */}
        <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10 mb-12 overflow-hidden">
          <svg viewBox="0 0 1000 340" className="w-full h-auto" role="img" aria-label="생애주기 수입·지출 곡선">
            {/* baseline */}
            <line x1="40" y1="270" x2="960" y2="270" stroke="#cbd5e1" strokeDasharray="4 6" />
            {/* stage dividers */}
            {[280, 540, 760].map((x) => (
              <line key={x} x1={x} y1="40" x2={x} y2="270" stroke="#e2e8f0" strokeDasharray="3 6" />
            ))}
            {/* 지출 (orange) */}
            <path
              d="M40,258 C 300,252 470,180 680,110 C 800,72 900,110 960,165"
              fill="none" stroke="#f37a20" strokeWidth="4" strokeLinecap="round"
            />
            {/* 수입 (navy) */}
            <path
              d="M40,262 C 260,256 380,150 560,110 C 720,78 830,120 960,225"
              fill="none" stroke="#1a2a4e" strokeWidth="4" strokeLinecap="round"
            />
            {/* legend */}
            <g fontSize="20" fontWeight="700">
              <circle cx="905" cy="150" r="6" fill="#f37a20" />
              <text x="920" y="156" fill="#f37a20">지출</text>
              <circle cx="905" cy="232" r="6" fill="#1a2a4e" />
              <text x="920" y="238" fill="#1a2a4e">수입</text>
            </g>
            {/* stage labels */}
            <g fontSize="21" fontWeight="700" fill="#334155" textAnchor="middle">
              <text x="160" y="308">사회초년기</text>
              <text x="410" y="308">자산형성기</text>
              <text x="650" y="308">은퇴준비기</text>
              <text x="860" y="308">노후생활기</text>
            </g>
          </svg>
        </div>

        {/* stage cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <div
              key={s.age}
              className="rounded-2xl border border-slate-200 p-6 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-primary font-black text-lg">{`0${i + 1}`}</span>
                <h3 className="text-lg font-bold break-keep">{s.age}</h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-slate-700 break-keep">
                    <span className="text-primary font-bold">·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* domains */}
        <div className="mt-14">
          <p className="text-center text-sm font-semibold text-slate-500 mb-6">
            트러스트웨이가 한 번에 관리하는 영역
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.8} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
