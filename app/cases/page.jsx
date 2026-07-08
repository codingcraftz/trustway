import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export const metadata = {
  title: "제주 상담사례 · BEFORE & AFTER",
  description:
    "제주도 보험 리모델링·재무설계 BEFORE & AFTER 사례. 소모성 보험을 줄이고 자산이 되는 구조로 바꾼 제주도민의 실제 변화를 확인하세요.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "제주 상담사례 · BEFORE & AFTER | 트러스트웨이 제주",
    description:
      "보험료는 줄이고, 노후 자산은 늘리고. 제주도민 재무설계 BEFORE & AFTER.",
  },
};

const cases = [
  {
    tag: "보험 다이어트",
    who: "40대 · 자영업자",
    before: [
      "실손 2개 중복 + 과한 진단비",
      "월 보험료 34만원",
      "노후 준비 0원",
    ],
    after: [
      "꼭 필요한 보장만 남김",
      "월 보험료 22만원",
      "절감액 전액 연금으로 전환",
    ],
    highlight: "월 -12만원 → 연금 시작",
  },
  {
    tag: "소모성 → 자산형",
    who: "30대 · 신혼부부",
    before: [
      "보험료는 나가는데 저축은 0",
      "전액 소멸성 보험",
      "목돈 계획 없음",
    ],
    after: [
      "소모성 비중 축소",
      "저축성·연금 구조 신설",
      "목적자금 로드맵 완성",
    ],
    highlight: "같은 지출, '쌓이는 돈'으로 재배치",
  },
  {
    tag: "은퇴·연금",
    who: "50대 · 직장인",
    before: [
      "국민연금만 의존",
      "은퇴 시점·생활비 막막",
      "연금 수령 계획 없음",
    ],
    after: [
      "3층연금(국민·퇴직·개인) 재정비",
      "수령 시점·세제 최적화",
      "은퇴 후 현금흐름 시각화",
    ],
    highlight: "노후 현금흐름, 숫자로 확정",
  },
  {
    tag: "법인 컨설팅",
    who: "법인 대표",
    before: [
      "법인·개인 자산 혼재",
      "CEO 퇴직·승계 준비 부재",
      "법인자금 활용 미흡",
    ],
    after: [
      "CEO 퇴직플랜 설계",
      "법인 퇴직연금 도입",
      "세무·승계 리스크 사전 점검",
    ],
    highlight: "법인·개인 자산 분리 설계",
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
            제주 상담사례 · BEFORE &amp; AFTER
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-[1.2] break-keep">
            보험료는 줄이고,
            <br />
            노후 자산은 늘렸습니다
          </h1>
          <p className="mt-8 max-w-2xl text-slate-300 leading-relaxed break-keep">
            가입 권유가 아닌 &lsquo;점검&rsquo;에서 시작된 변화. 제주도민의 실제
            BEFORE &amp; AFTER를 확인하세요.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {cases.map(({ tag, who, before, after, highlight }) => (
            <div
              key={tag}
              className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              {/* header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
                <span className="text-sm font-semibold text-slate-600">{who}</span>
              </div>

              {/* before / after */}
              <div className="grid sm:grid-cols-2">
                {/* BEFORE */}
                <div className="p-6 bg-white sm:border-r border-slate-100">
                  <p className="text-xs font-bold tracking-widest text-rose-500 mb-4">
                    BEFORE
                  </p>
                  <ul className="space-y-2.5">
                    {before.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-slate-500 break-keep flex gap-2"
                      >
                        <span className="text-rose-400">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AFTER */}
                <div className="p-6 bg-[#020717] text-white">
                  <p className="text-xs font-bold tracking-widest text-emerald-400 mb-4">
                    AFTER
                  </p>
                  <ul className="space-y-2.5">
                    {after.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-slate-100 break-keep flex gap-2"
                      >
                        <span className="text-emerald-400">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* highlight */}
              <div className="flex items-center gap-3 px-6 py-4 bg-primary text-white">
                <ArrowDown className="w-5 h-5 shrink-0 sm:hidden" />
                <span className="text-base font-bold break-keep">{highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-600 leading-relaxed break-keep">
          ※ 위 사례는 실제 상담 내용을 각색·익명 처리한 예시이며, 금액은 이해를 돕기 위한
          예시입니다. 개인의 소득·자산·목표에 따라 설계와 결과는 달라질 수 있고, 특정 수익이나
          원금을 보장하지 않습니다. 투자에는 원금 손실 위험이 있습니다.
        </p>
      </section>

      {/* 고객 후기 (카카오톡 캡처) */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Real Talk
            </span>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold break-keep">
              상담받은 제주도민들의 이야기
            </h2>
            <p className="mt-4 text-slate-600 break-keep">
              점검부터 시작해, 이렇게 달라졌습니다.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={`/img/reviews/review${n}.png`}
                alt={`제주 고객 상담 후기 ${n}`}
                loading="lazy"
                className="mb-5 w-full rounded-2xl border border-slate-200 shadow-sm break-inside-avoid"
              />
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-500 text-center break-keep">
            ※ 실제 상담 내용을 바탕으로 각색·익명 처리한 예시 이미지입니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020717] text-white py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold break-keep">
            내 상황은 어떻게 바뀔까요?
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
