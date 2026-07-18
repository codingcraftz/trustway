// [페이지 목적] 광고 인스턴트폼(리드) 수집용 개인정보 처리방침 — Meta 폼의 개인정보처리방침 링크 대상
export const metadata = {
  title: "개인정보 처리방침 | 트러스트웨이 제주본부",
  description: "재무·보험 상담 신청 시 수집하는 개인정보의 처리방침 안내",
};

const Section = ({ n, title, children }) => (
  <section className="mb-8">
    <h2 className="text-lg font-bold text-slate-900 mb-3">
      {n}. {title}
    </h2>
    <div className="text-[15px] leading-relaxed text-slate-600 space-y-2">{children}</div>
  </section>
);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
            개인정보 처리방침
          </h1>
          <p className="text-sm text-slate-400 mb-10">
            트러스트웨이 제주본부 · 재무·보험 상담 신청 개인정보 수집·이용 안내
          </p>

          <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
            구름섬컴퍼니(트러스트웨이 제주본부)(이하 &lsquo;회사&rsquo;)는 재무·보험 상담
            신청자의 개인정보를 아래와 같이 수집·이용하며, 정보주체의 권리를 보장합니다.
          </p>

          <Section n={1} title="수집하는 개인정보 항목">
            <p>· 필수: 이름, 연락처(휴대전화번호)</p>
            <p>· 선택: 연령대, 거주지역</p>
          </Section>

          <Section n={2} title="수집·이용 목적">
            <p>· 재무·보험 상담 신청 접수 및 상담 연결</p>
            <p>· 상담 일정 안내 및 문의 응대</p>
          </Section>

          <Section n={3} title="보유 및 이용 기간">
            <p>· 상담 종료 후 또는 정보주체의 동의 철회 시 지체 없이 파기합니다.</p>
            <p>· 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
          </Section>

          <Section n={4} title="제3자 제공">
            <p>· 원칙적으로 제3자에게 제공하지 않습니다.</p>
            <p>
              · 상담 진행을 위해 소속 판매대리점(㈜글로벌금융판매) 및 담당 설계사에게 상담
              목적 범위 내에서 공유될 수 있습니다.
            </p>
          </Section>

          <Section n={5} title="처리 위탁">
            <p>· 광고·문의 접수 플랫폼(Meta 등) 외 별도의 처리 위탁은 없습니다.</p>
          </Section>

          <Section n={6} title="정보주체의 권리">
            <p>
              · 정보주체는 언제든지 개인정보 열람·정정·삭제·처리정지 및 동의 철회를 요청할 수
              있으며, 아래 연락처로 요청 시 지체 없이 조치합니다.
            </p>
            <p>· 동의를 거부할 권리가 있으며, 거부 시 상담 신청이 제한될 수 있습니다.</p>
          </Section>

          <Section n={7} title="개인정보 보호책임자 / 문의">
            <p>· 담당: 박준영</p>
            <p>· 연락처: 010-7977-1248</p>
            <p>· 소속: 구름섬컴퍼니 · 트러스트웨이 제주본부</p>
            <p>· 주소: 제주특별자치도 제주시 노형동 2733-1</p>
          </Section>

          <Section n={8} title="고지">
            <p>· 본 방침은 게시일부터 적용되며, 변경 시 본 페이지에 공지합니다.</p>
          </Section>
        </div>
      </div>
    </main>
  );
}
