import Link from "next/link";
import { ArrowRight, ShieldCheck, PiggyBank, Landmark, Building2 } from "lucide-react";

export const metadata = {
  title: "제주 상담사례 · 재무설계 포트폴리오",
  description:
    "제주도 보험 리모델링, 연금·은퇴설계, 자산관리 실제 상담사례. 소모성 보험을 줄이고 자산이 되는 구조로 바꾼 제주도민 재무설계 사례를 소개합니다.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "제주 상담사례 · 재무설계 포트폴리오 | 트러스트웨이 제주",
    description:
      "보험 다이어트부터 연금·은퇴, 법인 재무까지. 제주에서 자산을 설계한 실제 상담사례.",
  },
};

const cases = [
  {
    icon: ShieldCheck,
    tag: "보험 리모델링",
    title: "40대 자영업자 · 보험 다이어트",
    before: "실손 2개 중복 + 과도한 진단비로 월 부담 과중, 노후 준비는 미비.",
    action: "중복·과보장을 정리하고 꼭 필요한 보장만 남긴 뒤, 절감액을 연금으로 이전.",
    result: "월 보험료 부담을 크게 줄이고, 남은 여력을 노후 자산으로 전환.",
  },
  {
    icon: PiggyBank,
    tag: "소모성 → 자산형",
    title: "30대 부부 · 노후 준비 시작",
    before: "매달 보험료는 나가는데 저축·노후 준비는 사실상 0원.",
    action: "소모성 비중을 낮추고 저축성·연금 구조를 새로 설계.",
    result: "동일한 지출 안에서 '사라지는 돈'을 '쌓이는 돈'으로 재배치.",
  },
  {
    icon: Landmark,
    tag: "은퇴·연금",
    title: "50대 · 은퇴설계 재정비",
    before: "국민연금만으로 노후가 막막하고 은퇴 시점이 불확실.",
    action: "국민·퇴직·개인연금 3층 구조를 점검하고 수령 시점·세제를 재설계.",
    result: "은퇴 후 현금흐름을 구체적인 숫자로 시각화하고 준비 방향 확정.",
  },
  {
    icon: Building2,
    tag: "법인 컨설팅",
    title: "법인 대표 · CEO 플랜",
    before: "법인 자금과 대표 개인 자산이 뒤섞여 퇴직·승계 준비가 부재.",
    action: "CEO 퇴직플랜·법인 퇴직연금(DB·DC·IRP)을 정비하고 전문가 그룹과 협업.",
    result: "법인·개인 자산을 분리해 세무·승계 리스크를 사전 점검.",
  },
];

export default function CasesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative bg-[#020717] text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <span className="text-slate-400 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
            제주 상담사례 · 포트폴리오
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl font-medium leading-[1.2] break-keep">
            보험을 자산으로 바꾼
            <br />
            제주도민의 실제 이야기
          </h1>
          <p className="mt-8 max-w-2xl text-slate-400 leading-relaxed break-keep">
            소모성 보험을 줄이고 자산이 되는 구조로 옮긴 상담사례를 소개합니다.
            가입 권유가 아닌 &lsquo;점검&rsquo;에서 시작된 변화입니다.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map(({ icon: Icon, tag, title, before, action, result }) => (
            <div
              key={title}
              className="border border-slate-200 rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold break-keep">{title}</h2>
              <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-slate-400">상황</dt>
                  <dd className="text-slate-600 break-keep">{before}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-400">설계</dt>
                  <dd className="text-slate-600 break-keep">{action}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">결과</dt>
                  <dd className="text-slate-800 break-keep">{result}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* 컴플라이언스 고지 */}
        <p className="mt-10 text-xs text-slate-400 leading-relaxed break-keep">
          ※ 위 사례는 실제 상담 내용을 각색·익명 처리한 예시입니다. 개인의 소득·자산·목표에
          따라 설계와 결과는 달라질 수 있으며, 특정 수익이나 원금을 보장하지 않습니다.
          투자에는 원금 손실 위험이 있습니다.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#020717] text-white py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-4xl font-medium break-keep">
            내 상황은 어떻게 설계될까요?
          </h2>
          <p className="mt-5 text-slate-400 break-keep">
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
