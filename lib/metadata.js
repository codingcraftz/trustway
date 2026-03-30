/**
 * 모바일 명함 전용 OG 메타데이터 템플릿 설정 파일
 * 문구 수정이 필요할 경우 여기서 일괄적으로 관리할 수 있습니다.
 */

export const MOBILE_OG_TEMPLATES = {
    // 제목: {직급} {이름}님 형태로 노출 (기존 "모바일 명함입니다" 제거)
    title: (expert) => `${expert.title} ${expert.name}님`,
    
    // 설명: "{인증멘트}" - {회사명} {이름} {직급} 형태로 노출 (기존 명함 설명 가이드 문구 제거)
    description: (expert) => `"${expert.quote}" - 프리미엄 자산관리 및 금융 컨설팅 전문가, ${expert.name} ${expert.title}`,
    
    // 기본 도메인 및 기타 공통 설정
    siteName: 'Trustway',
    domain: 'https://www.trustway.kr',
    locale: 'ko_KR',
};

/**
 * 전문가 데이터를 기반으로 Next.js Metadata 객체를 생성하는 헬퍼 함수
 */
export function getExpertMetadata(expert) {
    if (!expert) {
        return { title: '전문가 프로필을 찾을 수 없습니다' };
    }

    const title = MOBILE_OG_TEMPLATES.title(expert);
    const description = MOBILE_OG_TEMPLATES.description(expert);
    const imageUrl = `${MOBILE_OG_TEMPLATES.domain}${expert.profileImage}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            siteName: MOBILE_OG_TEMPLATES.siteName,
            locale: MOBILE_OG_TEMPLATES.locale,
            images: [
                {
                    url: imageUrl,
                    width: 800,
                    height: 800,
                    alt: `${expert.name} 프로필 사진`,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        }
    };
}
