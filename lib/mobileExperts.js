// lib/mobileExperts.js
/*
{
            title: "종합 재무설계 상담 신청\n(자산/저축/투자/연금/절세/보험/법인/부동산 등)",
            url: "#",
            type: "text"
        },
        {
            title: "[ 📌나의 재무설계 자가진단 TEST ]\n체계적인 자산관리의 첫걸음을 시작하세요!",
            url: "#",
            type: "text"
        },
        {
            title: "부자들의 강력한 재테크 비밀, 복리의 힘.\n복리계산기로 당신의 미래자산을 설계해보세요!💸",
            url: "#",
            type: "thumbnail",
            thumbnail: "/img/icon_calc.png"
        },
        {
            title: "복잡한 투자판단, 'ETF CHECK'에서 간단하게!\n체계적인 ETF 정보로 안전한 재테크 완성하세요.📊",
            url: "#",
            type: "thumbnail",
            thumbnail: "/img/icon_etf.png"
        }
            */

export const mobileExperts = [
    {
        // 최상단 경로에 쓰일 id (이 값을 통해 /experts/go-jeong-gil/mobile 접속)
        id: "go-jeong-gil",
        theme: "gold", // "navy" 또는 "gold"
        name: "고정길",
        // 타이틀바 상단 직급
        title: "종합금융컨설턴트",
        // 이름 하단 명언
        quote: "당신의 가치를 지키는 든든한 파트너",
        // 주력 이력 정리 (highlight: true 일 경우 골드뱃지 적용)
        bullets: [
            { text: "현) 트러스트웨이 제주지사 대표", highlight: true },
            { text: "현) 전세계 상위 0.1% MDRT협회 TOT 달성", highlight: true },
            { text: "전) 한화투자증권 IB 기업자산운용팀", highlight: false },
            { text: "전) 푸르덴셜투자증권(모의투자 전국 2위)", highlight: false },
            { text: "전) 유안타증권 STARCLUB(수익 최상위)", highlight: false }
        ],
        // 사용할 전면 이미지 경로
        profileImage: "/img/프로필_고정길.png",
        // 어둡게 깔릴 뒷배경 경로
        backgroundImage: "/img/bg_sample_2.jpg",

        // 연락처 정보
        email: "trustway_ko@naver.com",
        phone: "010-5550-0070", // <-- 실제 전화번호로 변경해주세요

        // 하단 다크 카드에 기입될 메인 문장
        cardText: "\"리스크 방어와 자산 증식을 결합한\n견고한 마스터플랜으로,\n흔들림 없는 미래를 약속합니다.\"",
        // 카드 내 서브 영어 문구 등
        cardSub: "Premium Total Wealth Management",

        // ------------------
        // [1] 상담 분야 (개인)
        // ------------------
        personalServices: [
            "보험 점검 및 위험 관리 컨설팅",
            "저축 및 투자 목적자금 컨설팅",
            "은퇴, 노후 대비 연금 컨설팅",
            "비과세, 세액공제 등 절세 컨설팅",
            "상속/증여 절세 컨설팅"
        ],

        // ------------------
        // [2] 상담 분야 (법인)
        // ------------------
        corporateServices: [
            "기업승계 및 기업상속 컨설팅",
            "CEO 퇴직플랜 및 법인자금 재무컨설팅",
            "법인 퇴직연금(DB,DC,IRP) 제도 도입",
            "전문가 그룹 협업을 통한 노무,세무,법무",
            "M&A 등 종합경영컨설팅"
        ],

        // ------------------
        // [3] 하단 링크 (여러 개 가능)
        // - type: "kakao" | "thumbnail" | "text"
        // ------------------
        links: [
            {
                title: "연락하기",
                url: "https://open.kakao.com/o/smg1kami",
                type: "kakao"
            }
        ]
    },

    // ==========================================
    // 강경서 총괄 웰스 매니저
    // ==========================================
    {
        id: "kang-kyung-seo",
        theme: "gold",
        name: "강경서",
        title: "총괄 웰스 매니저",
        quote: "오랜 은행 경험으로 쌓은 든든한 자산 설계",
        bullets: [
            { text: "현) 트러스트웨이 총괄 웰스 매니저", highlight: true },
            { text: "현) 미래에셋증권 MFA", highlight: false },
            { text: "전) 제주은행 지점장 역임", highlight: false }
        ],
        profileImage: "/img/프로필_강경서.png",
        backgroundImage: "/img/bg_sample.jpg",

        email: "trustway_seo@naver.com",
        phone: "010-5149-2886",

        cardText: "\"풍부한 금융 노하우를 바탕으로,\n안전한 절세 및 연금 설계를 아우르는\n맞춤형 금융 컨설팅을 제공합니다.\"",
        cardSub: "Comprehensive Wealth Design",

        personalServices: [
            "개인 목표 맞춤형 저축 및 투자",
            "안전한 절세 및 세무 설계",
            "생애주기 맞춤 연금 설계",
            "안정적인 투자 포트폴리오 관리"
        ],
        corporateServices: [
            "법인 임직원 연금 및 복지 제도",
            "자산 승계 및 상속 설계 컨설팅"
        ],
        links: [
            {
                title: "연락하기",
                url: "https://pf.kakao.com/_xxxxxx2",
                type: "kakao"
            }
        ]
    },

    // ==========================================
    // 박준영 재무 설계 매니저
    // ==========================================
    {
        id: "park-jun-young",
        theme: "gold",
        name: "박준영",
        title: "재무 설계 매니저",
        quote: "숫자로 근거를 만들고, 설계로 답을 드립니다",
        bullets: [
            { text: "현) 트러스트웨이 재무 설계 매니저", highlight: true },
            { text: "현) 기업인증지도사 (기업컨설팅 전문가)", highlight: true },
            { text: "전) 퀀트 기반 트레이딩 전략 연구", highlight: false },
            { text: "전) 금융사 IT 개발 및 빅데이터 분석", highlight: false }
        ],
        profileImage: "/img/프로필_박준영.png",
        backgroundImage: "/img/bg_sample_2.jpg",

        email: "trustway_jun@naver.com",
        phone: "010-2345-9600",

        cardText: "\"감이 아닌 수치에 근거한 객관적 분석으로,\n고객 맞춤형 저축·투자·연금 로드맵을\n정밀하게 설계합니다.\"",
        cardSub: "Data-Driven Financial Strategy",

        personalServices: [
            "수리적 분석 기반 맞춤형 저축 로드맵",
            "객관적인 데이터 기반 펀드/투자 설계",
            "목적자금 마련 및 노후 연금 정밀 설계",
            "합리적인 보험 리모델링 컨설팅"
        ],
        corporateServices: [
            "기업부설연구소 / 전담부서 인증",
            "벤처인증 / 이노비즈 / 메인비즈 인증",
            "특허·상표권·디자인 출원 컨설팅",
            "ISO 인증(9001, 14001, 22000, 45001 등)",
            "각종 정부정책자금 및 기업인증 전문가"
        ],
        links: [
            {
                title: "연락하기",
                url: "https://open.kakao.com/o/s31849li",
                type: "kakao"
            }
        ]
    }
];
