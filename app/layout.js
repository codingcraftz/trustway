import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.trustway.kr"),
  title: {
    default: "트러스트웨이 제주 | 제주 재무설계·보험·자산관리 종합 금융 파트너",
    template: "%s | 트러스트웨이 제주",
  },
  description:
    "제주 재무설계, 제주도 보험 리모델링, 연금·절세, 자산관리·재테크까지. 증권·은행·보험 출신 전문가 팀이 제주도민의 자산을 통합 설계합니다. 트러스트웨이 제주본부.",
  keywords: [
    "제주 재무설계",
    "제주도 보험",
    "제주 보험 리모델링",
    "제주 자산관리",
    "제주도 재테크",
    "제주 연금",
    "제주 은퇴설계",
    "제주 재무상담",
    "제주 재무설계사",
    "트러스트웨이 제주",
    "제주 종합 금융 컨설팅",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "트러스트웨이 제주",
    url: "https://www.trustway.kr",
    title: "트러스트웨이 제주 | 제주 재무설계·보험·자산관리 종합 금융 파트너",
    description:
      "제주 재무설계·보험·연금·자산관리를 한 곳에서. 증권·은행·보험 출신 전문가 팀, 트러스트웨이 제주본부.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "트러스트웨이 제주본부",
  description:
    "제주 재무설계, 보험 리모델링, 연금·절세, 자산관리를 제공하는 종합 금융 컨설팅. 증권·은행·보험 출신 전문가 팀.",
  url: "https://www.trustway.kr",
  areaServed: { "@type": "AdministrativeArea", name: "제주특별자치도" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "월랑로 81",
    addressLocality: "제주시",
    addressRegion: "제주특별자치도",
    addressCountry: "KR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  knowsAbout: [
    "재무설계",
    "보험 리모델링",
    "연금",
    "절세",
    "자산관리",
    "은퇴설계",
    "법인 컨설팅",
  ],
};

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { FloatingContact } from "@/components/shared/FloatingContact";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
