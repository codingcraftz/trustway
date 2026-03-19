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
            { text: "전) 푸르덴셜투자증권 펀드매니저(모의투자 전국 2위)", highlight: false },
            { text: "전) 유안타증권 STARCLUB(수익 최상위)", highlight: false }
        ],
        // 사용할 전면 이미지 경로
        profileImage: "/img/프로필_고정길.png",
        // 어둡게 깔릴 뒷배경 경로
        backgroundImage: "/img/bg_sample_2.jpg",
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
                url: "https://open.kakao.com/o/s31849li",
                type: "kakao"
            }
        ]
    },

    // ==========================================
    // 두 번째 예시 (팀장님들 추가 시 복사해서 아래에 붙여넣고 수정하세요!)
    // ==========================================
    {
        id: "sample-expert", // 예: /experts/sample-expert/mobile
        name: "홍길동",
        title: "수석 자산관리팀장",
        quote: "세밀한 분석으로 당신의 미래를 설계합니다",
        bullets: [
            { text: "현) 트러스트웨이 자산관리팀장", highlight: true },
            { text: "전) 메이저 은행 VIP 전담 매니저", highlight: false },
            { text: "재무설계 관련 자격 5종 보유", highlight: false }
        ],
        profileImage: "", // 준비되는 팀장님 사진 경로
        backgroundImage: "/img/bg_sample.jpg",
        cardText: "\"정확한 데이터 기반의\n맞춤형 자산 증식 로드맵을\n제시해 드립니다.\"",
        cardSub: "Smart Wealth Building",

        personalServices: [
            "생애주기별 맞춤 재무설계",
            "현금흐름 최적화 및 목적자금 마련",
            "변액보험 및 펀드 포트폴리오 관리"
        ],
        corporateServices: [
            "스타트업 자금조달 및 재무제표 컨설팅",
            "임직원 복지제도(법인보험 등) 설계"
        ],
        links: [
            {
                title: "1:1 집중 상담 예약하기",
                url: "#",
                type: "text"
            },
            {
                title: "오픈카톡 문의",
                url: "#",
                type: "kakao"
            }
        ]
    }
];
