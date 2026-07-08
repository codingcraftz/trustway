import Link from "next/link";
import {
  ShieldCheck,
  PiggyBank,
  Landmark,
  Receipt,
  Users,
  Building2,
  ArrowRight,
  Scale,
  LineChart,
  Search,
  MapPin,
} from "lucide-react";

const differentiators = [
  {
    icon: Scale,
    title: "전 보험사 취급 GA",
    desc: "특정 회사 상품을 밀지 않습니다. 모든 보험사를 중립적으로 비교해 고객에게 가장 유리한 구조를 설계합니다.",
  },
  {
    icon: LineChart,
    title: "증권·은행 출신 팀",
    desc: "보험만 보지 않습니다. 증권·은행 실무를 거친 전문가들이 보장과 자산 증식을 한 판에서 함께 봅니다.",
  },
  {
    icon: Search,
    title: "가입 권유가 아닌 '점검'",
    desc: "\"이건 굳이 안 드셔도 됩니다.\" 소모성 보험을 줄이고, 새는 보험료를 자산이 되는 구조로 옮깁니다.",
  },
  {
    icon: MapPin,
    title: "제주 밀착 설계",
    desc: "자영업·관광·이주 등 제주 특유의 소득 흐름을 이해하고, 제주도민에게 맞춘 재무·노후 설계를 제공합니다.",
  },
];

export const metadata = {
  title: "제주 재무설계·보험·자산관리 서비스",
  description:
    "제주도 보험 리모델링, 제주 재무설계, 연금·절세, 자산관리·재테크, 법인 컨설팅까지. 증권·은행·보험 출신 전문가 팀이 제주도민 맞춤으로 설계합니다.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "제주 재무설계·보험·자산관리 서비스 | 트러스트웨이 제주",
    description:
      "제주도 보험 점검부터 연금·절세, 자산관리·재테크, 법인 컨설팅까지. 제주 자산설계 전문 트러스트웨이 제주본부.",
  },
};

const personalServices = [
  {
    icon: ShieldCheck,
    title: "제주 보험 점검·리모델링",
    desc: "중복보장·과보장을 정리하고 놓친 할인을 찾아, 소모성 보험을 줄이고 꼭 필요한 보장만 남깁니다. 제주도 보험 리모델링의 시작.",
  },
  {
    icon: PiggyBank,
    title: "저축·투자 목적자금 설계",
    desc: "내 집 마련, 교육·결혼 등 목적자금을 위한 저축과 투자 전략. 소모성 지출을 자산이 되는 구조로 옮깁니다.",
  },
  {
    icon: Landmark,
    title: "연금·은퇴설계",
    desc: "국민·퇴직·개인연금 3층 구조로 제주에서의 노후를 준비합니다. 제주 자영업·소상공인 소득구조 맞춤 은퇴설계.",
  },
  {
    icon: Receipt,
    title: "절세·세제 컨설팅",
    desc: "비과세·세액공제(IRP/ISA), 상속·증여 절세까지. 세금을 줄여 자산을 지키는 재무설계.",
  },
];

const corporateServices = [
  {
    icon: Building2,
    title: "법인 재무·CEO 플랜",
    desc: "CEO 퇴직플랜, 법인자금 재무컨설팅, 법인 퇴직연금(DB·DC·IRP) 제도 도입.",
  },
  {
    icon: Users,
    title: "가업승계·전문가 협업",
    desc: "기업승계·상속, M&A, 그리고 세무사·노무사·변호사 전문가 그룹과의 협업 컨설팅.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative bg-[#020717] text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <span className="text-slate-400 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
            제주 재무설계 · 자산관리 서비스
          </span>
          <h1 className="mt-6 text-3xl md:text-5xl font-medium leading-[1.2] break-keep">
            제주도민의 자산,
            <br />
            비용이 아니라 자산으로 설계합니다
          </h1>
          <p className="mt-8 max-w-2xl text-slate-400 leading-relaxed break-keep">
            제주도 보험 리모델링부터 저축·투자, 연금·은퇴, 절세, 그리고 법인
            컨설팅까지. 증권·은행·보험 출신 전문가 팀이 가입 권유가 아닌
            &lsquo;점검&rsquo;부터 시작합니다.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-3 bg-white text-slate-900 font-semibold text-sm tracking-widest px-8 py-4 hover:bg-slate-200 transition-colors"
          >
            무료 상담 신청 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 트러스트웨이만의 특별한 차별점 */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-14 text-center">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Why Trustway
            </span>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold break-keep">
              트러스트웨이만의 특별한 차별점
            </h2>
            <p className="mt-4 text-slate-600 break-keep">
              제주에서, 왜 트러스트웨이일까요.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <span className="text-5xl font-black text-slate-100 absolute top-5 right-6 select-none">
                  {`0${i + 1}`}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-bold break-keep">{title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed break-keep">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 개인 자산관리 */}
      <section className="container mx-auto max-w-7xl px-6 md:px-12 py-24">
        <div className="mb-14">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Personal
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-semibold break-keep">
            제주 개인 자산관리
          </h2>
          <p className="mt-4 text-slate-500 break-keep">
            보험 점검부터 연금·절세까지, 제주도민 맞춤 재무설계.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {personalServices.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-slate-200 rounded-xl p-8 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <Icon className="w-9 h-9 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold break-keep">{title}</h3>
              <p className="mt-3 text-slate-500 leading-relaxed break-keep">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 법인 컨설팅 */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Corporate
            </span>
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold break-keep">
              제주 법인 경영 컨설팅
            </h2>
            <p className="mt-4 text-slate-500 break-keep">
              가업승계부터 CEO 퇴직플랜, 법인 퇴직연금까지.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {corporateServices.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <Icon className="w-9 h-9 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold break-keep">
                  {title}
                </h3>
                <p className="mt-3 text-slate-500 leading-relaxed break-keep">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020717] text-white py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-4xl font-medium break-keep">
            지금 내는 보험료, 잘 쓰이고 있을까요?
          </h2>
          <p className="mt-5 text-slate-400 break-keep">
            가입 권유가 아닌 &lsquo;점검&rsquo;부터 시작합니다. 제주에서
            편하게 상담 신청하세요.
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
