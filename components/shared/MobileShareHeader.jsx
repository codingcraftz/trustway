"use client";

import { Share, Share2 } from "lucide-react";

export function MobileShareHeader({ expertName, expertTitle, className = "absolute top-0 left-0 right-0 w-full px-5 py-5 flex justify-end items-center z-50 pointer-events-none" }) {
    const handleShare = async () => {
        const shareData = {
            title: `${expertTitle} ${expertName}님의 모바일 명함`,
            text: `${expertName}님의 프리미엄 모바일 명함을 확인해보세요!`,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log("사용자가 모달을 닫았거나 공유를 취소했습니다.", err);
            }
        } else {
            // Web Share API를 지원하지 않는 브라우저 (PC 일부 등) 대비 Fallback
            navigator.clipboard.writeText(window.location.href);
            alert("명함 웹페이지 주소가 클립보드에 복사되었습니다!");
        }
    };

    return (
        <header className={className}>
            <button 
                onClick={handleShare}
                className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-black/60 transition-colors border border-white/10 active:scale-95 group pointer-events-auto"
                title="명함 공유하기"
            >
                <Share2 className="w-5 h-5 text-white opacity-90 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
            </button>
        </header>
    );
}
