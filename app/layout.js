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
  title: "TrustWay | 고객 중심 재무 컨설팅",
  description: "개인 맞춤형 재무 설계부터 기업 인증까지, 흔들림 없는 내일을 위한 당신의 금융 파트너 TrustWay",
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
