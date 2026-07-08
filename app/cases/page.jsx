import Link from "next/link";
import {
  Store,
  Users,
  Landmark,
  ShieldCheck,
  Building2,
  LineChart,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "제주 상담사례 · 이런 고민 이렇게 도와드립니다",
  description:
    "제주 자영업·신혼·은퇴 준비·법인까지. 유형별 재무 고민을 트러스트웨이가 어떻게 점검하고 설계하는지 확인하세요. 제주 재무설계·보험 리모델링 상담.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "제주 상담사례 · 이런 고민 이렇게 도와드립니다 | 트러스트웨이 제주",
    description:
      "제주도민 유형별 재무 고민과 트러스트웨이의 해결 접근.",
  },
};

const scenarios = [
  {
    icon: Store,
    who: "제주 자영업·소상공인",
    worry: "성수기·비수기 소득이 들쭉날쭉한데, 보험료랑 노후는 어떻게 준비하죠?",
    plan: [
      "소득 흐름에 맞춘 납입 구조 설계",
      "과한 소모성 보험 정리",
      "변동 소득형 노후·연금 준비",
    ],
  },
  {
    icon: Users,
    who: "사회초년생·신혼부부",
    worry: "보험료는 나가는데 저축이랑 목돈 준비가 하나도 안 돼 있어요.",
    plan: [
      "꼭 필요한 최소 보장만 남기기",
      "내 집·결혼 등 목적자금 저축 설계",
      "소모성 → 자산형 구조로 전환",
    ],
  },
  {
    icon: Landmark,
    who: "40~50대 은퇴 준비",
    worry: "국민연금만으론 노후가 막막한데, 지금 시작해도 늦지 않았을까요?",
    plan: [
      "국민·퇴직·개인 3층연금 점검",
      "은퇴 후 현금흐름 역산",
      "절세 연금(IRP·ISA) 활용",
    ],
  },
  {
    icon: ShieldCheck,
    who: "보험 과다 가입자",
    worry: "보험이 너무 많은데, 뭐가 중복이고 뭐가 정말 필요한지 모르겠어요.",
    plan: [
      "전체 증권 한눈에 분석",
      "중복·과보장 정리",
      "필요한 보장만 리모델링",
    ],
  },
  {
    icon: Building2,
    who: "법인 대표",
    worry: "법인 자금·CEO 퇴직·승계, 뭐부터 준비해야 할지 모르겠어요.",
    plan: [
      "CEO 퇴직플랜 설계",
      "법인 퇴직연금(DB·DC·IRP) 도입",
      "세무·노무 전문가 협업",
    ],
  },
  {
    icon: LineChart,
    who: "목돈 운용 고민",
    worry: "목돈은 있는데 어떻게 굴려야 할지… 예금만 두기는 아깝고요.",
    plan: [
      "위험 성향 진단",
      "방어·성장 자산 배분 설계",
      "보험 + 증권 통합 포트폴리오",
    ],
  },
];

export default function CasesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative bg-[#020717] text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <span className="text-slate-300 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
            제주 상담사례
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-[1.2] break-keep">
            이런 고민,
            <br />
            트러스트웨이가 이렇게 도와드립니다
          </h1>
          <p className="mt-8 max-w-2xl text-slate-300 leading-relaxed break-keep">
            제주도민이 자주 하는 재무 고민과, 저희가 점검부터 설계까지 접근하는
            방식을 정리했습니다.
          </p>
        </div>
      </section>

      {/* Scenarios */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map(({ icon: Icon, who, worry, plan }) => (
            <div
              key={who}
              className="flex flex-col rounded-2xl border border-slate-200 p-8 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                </div>
                <h2 className="text-lg font-bold break-keep">{who}</h2>
              </div>

              <p className="mt-5 rounded-xl bg-slate-50 p-4 text-[15px] text-slate-700 leading-relaxed break-keep">
                “{worry}”
              </p>

              <p className="mt-5 text-xs font-bold tracking-widest text-primary">
                이렇게 도와드립니다
              </p>
              <ul className="mt-3 space-y-2">
                {plan.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 text-sm text-slate-700 break-keep"
                  >
                    <span className="text-primary font-bold">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-500 leading-relaxed break-keep">
          ※ 위 내용은 상담 접근 방식을 설명하기 위한 예시입니다. 개인의 소득·자산·목표에
          따라 설계는 달라지며, 투자 상품에는 원금 손실 위험이 있고 특정 수익이나 원금을
          보장하지 않습니다.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#020717] text-white py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold break-keep">
            내 고민은 어디에 해당할까요?
          </h2>
          <p className="mt-5 text-slate-300 break-keep">
            제주에서 편하게 상담 신청하세요. 점검부터 시작합니다.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-3 bg-white text-slate-900 font-semibold text-sm tracking-widest px-8 py-4 hover:bg-slate-200 transition-colors"
          >
            무료 상담 신청 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
