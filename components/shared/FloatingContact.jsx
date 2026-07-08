"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  const pathname = usePathname();

  // 사내 관리자(/office) 및 모바일 명함 페이지에서는 숨김
  if (
    pathname &&
    (pathname.startsWith("/office") ||
      pathname.match(/^\/experts\/[^/]+\/mobile/) ||
      pathname.startsWith("/m/"))
  ) {
    return null;
  }

  return (
    <Link
      href="/#contact"
      aria-label="상담 문의하기"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 hover:bg-primary/90"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold">문의하기</span>
    </Link>
  );
}
