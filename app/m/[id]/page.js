import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ExternalLink, Calculator } from "lucide-react";

// TEST MOCK 데이터
const MOCK_EXPERT = {
  id: "test-expert",
  name: "박준영",
  title: "금융투자전문가",
  slogan: "수학적 정교함으로 설계하는 오차 없는 재무 포트폴리오",
  company: "트러스트웨이 제주 팀장",
  profileImage: "/img/프로필_고정길.png", // 여기에 본인 사진 경로
  backgroundImage: "/img/bg_sample.png",   // 감성적인 배경 사진 경로
  links: [
    {
      title: "종합 재무설계 상담 신청",
      subTitle: "(자산/저축/투자/연금/절세/보험 등)",
      url: "#",
      highlight: true
    },
    {
      title: "[ 📌나의 재무설계 자가진단 TEST ]",
      subTitle: "체계적인 자산관리의 첫걸음을 시작하세요!",
      url: "#"
    },
    {
      title: "복리 계산기로 미래자산 설계하기",
      subTitle: "부자들의 강력한 재테크 비밀, 복리의 힘!",
      url: "#",
      thumbnail: "/img/icon_calc.png"
    },
    {
      title: "연락하기",
      url: "https://pf.kakao.com/...", // 카카오톡 링크
      type: "kakao"
    }
  ]
};

export default function MobileProfilePage({ params }) {
  // 실제 데이터가 들어갈 때는 params.id로 조회. 현재는 MOCK 데이터 사용
  const expert = MOCK_EXPERT;

  return (
    <main className="relative min-h-screen w-full flex justify-center bg-black font-sans selection:bg-[#E2D1B6] selection:text-black">

      {/* 1. 고정 배경 (Fixed Position Background) */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${expert.backgroundImage})`,
          // MOCK background color in case image is missing
          backgroundColor: '#1a1a1a'
        }}
      />

      {/* 2. 검은색 반투명 오버레이 및 블러 효과 (bg-black/50, backdrop-blur-md) */}
      <div className="fixed inset-0 z-0 bg-black/50 backdrop-blur-md" />

      {/* 3. 전체 컨테이너 (PC에서도 모바일처럼 중앙 정렬, max-width: 450px) */}
      <div className="relative z-10 w-full max-w-[450px] min-h-screen flex flex-col items-center overflow-x-hidden">

        {/* 상단 프로필 섹션 */}
        {/* 인물 사진 상단 배치 (상반신 포함), mask-image로 하단 자연스럽게 페이드아웃 */}
        <div className="w-full relative h-[45vh] min-h-[380px] max-h-[500px] flex-shrink-0 animate-fade-in-up">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{
              backgroundImage: `url(${expert.profileImage})`,
              // Fallback color gradient if image missing
              backgroundColor: '#2a2a2a',
              // Gradient fade out to blend with background overlay
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* 텍스트 영역 (이름, 직함, 소속, 슬로건) - z-index 올려서 최상단 배치 */}
        <div className="w-full px-6 flex flex-col items-center -mt-20 sm:-mt-24 relative z-20 text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p className="text-[#E2D1B6] text-[13px] font-semibold tracking-widest mb-2 drop-shadow-md uppercase">
            {expert.company}
          </p>

          <h1 className="text-white text-3xl font-extrabold tracking-tight mb-6 flex items-baseline justify-center gap-2 drop-shadow-lg">
            {expert.name}
            <span className="text-lg font-medium text-white/80">{expert.title}</span>
          </h1>

          {/* 슬로건 강조 */}
          <div className="relative w-full max-w-[320px] mb-12">
            <div className="absolute -left-4 -top-4 text-5xl text-white/10 font-serif">"</div>
            <p className="text-white/90 text-[15.5px] font-light leading-relaxed break-keep px-2 drop-shadow-sm">
              {expert.slogan}
            </p>
            <div className="absolute -right-4 -bottom-8 text-5xl text-white/10 font-serif">"</div>
          </div>
        </div>

        {/* 버튼 리스트 섹션 */}
        <div className="w-full px-5 pb-20 flex flex-col gap-4 relative z-20">
          {expert.links.map((link, idx) => {
            const isKakao = link.type === 'kakao';
            const hasThumbnail = !!link.thumbnail;

            return (
              <a
                key={idx}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className={`
                  relative w-full rounded-3xl p-[18px] flex flex-col justify-center items-center text-center
                  transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] shadow-lg
                  animate-fade-in-up
                  ${link.highlight
                    ? 'bg-[#E2D1B6] text-[#1c1c1c] ring-2 ring-[#E2D1B6]/30 ring-offset-2 ring-offset-black/20 hover:bg-white'
                    : 'bg-[#E2D1B6]/90 text-[#2c2c2c] hover:bg-[#E2D1B6] hover:shadow-xl'}
                `}
                style={{ animationDelay: `${(idx + 2) * 100}ms` }}
              >
                {/* 좌측 썸네일 or 아이콘 */}
                {(hasThumbnail || isKakao) && (
                  <div className={`
                       absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full 
                       flex items-center justify-center shadow-inner
                       ${isKakao ? 'bg-[#FEE500]' : 'bg-white/60 backdrop-blur-sm border border-black/10 p-1.5'}
                     `}>
                    {isKakao ? (
                      <MessageCircle className="w-6 h-6 text-black" fill="black" />
                    ) : (
                      <img src={link.thumbnail} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                    )}
                    {/* 썸네일 깨졌을 때 폴백 아이콘 */}
                    {!isKakao && (
                      <Calculator className="w-5 h-5 text-slate-700 hidden" />
                    )}
                  </div>
                )}

                {/* 텍스트 컨텐츠 */}
                <div className={`flex flex-col items-center justify-center w-full ${(hasThumbnail || isKakao) ? 'px-12' : 'px-4'}`}>
                  <span className={`font-bold tracking-tight text-[#111111] ${link.subTitle ? 'mb-0.5 text-[16px]' : 'text-[16px]'}`}>
                    {link.title}
                  </span>
                  {link.subTitle && (
                    <span className="text-[13px] font-semibold text-[#333333]/80 tracking-wide">
                      {link.subTitle}
                    </span>
                  )}
                </div>

                {/* 우측 아이콘 (외부 링크 표시 등) */}
                {!isKakao && !hasThumbnail && (
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-30">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                )}
              </a>
            );
          })}
        </div>

      </div>
    </main>
  );
}
