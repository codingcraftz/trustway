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
  title: "트러스트웨이 제주 | 당신의 내일을 설계하는 종합 금융 파트너",
  description: "개인 재무설계, 연금·절세 전략부터 법인 경영컨설팅, 가업승계까지. 흔들림 없는 내일을 약속하는 종합 금융 파트너 트러스트웨이 제주입니다.",
};

import { Header } from "@/components/shared/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
