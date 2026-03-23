"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation, Phone, Mail, Clock, Car, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Script from "next/script";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function LocationPage() {
  const officeAddress = "제주특별자치도 제주시 월랑로 81";

  // 상태 및 환경 변수
  const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
  const [center, setCenter] = useState({ lat: 33.4890, lng: 126.4983 }); // 제주도 기본 좌표 (우회 지점)
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // 주소-좌표 변환 (Kakao Maps Geocoder API)
  useEffect(() => {
    if (isMapLoaded && window.kakao && window.kakao.maps && window.kakao.maps.services) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(officeAddress, function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          setCenter({ lat: parseFloat(result[0].y), lng: parseFloat(result[0].x) });
        }
      });
    }
  }, [isMapLoaded, officeAddress]);

  const handleKakaoMap = () => {
    window.open(`https://map.kakao.com/link/search/${encodeURIComponent(officeAddress)}`, '_blank');
  };

  const handleNaverMap = () => {
    window.open(`https://map.naver.com/v5/search/${encodeURIComponent(officeAddress)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* 카카오맵 SDK 로드 */}
      {kakaoAppKey && (
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoAppKey}&libraries=services,clusterer,drawing&autoload=false`}
          onLoad={() => {
            window.kakao.maps.load(() => {
              setIsMapLoaded(true);
            });
          }}
          strategy="lazyOnload"
        />
      )}
      {/* 1. Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <div
          className="absolute inset-0 bg-[url('/img/사무실1층_가로.jpg')] bg-cover bg-center z-0 opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10" />

        <div className="container relative z-20 mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Location
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light">
              트러스트웨이 제주본부로 오시는 길을 안내해 드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Map & Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left: Info Details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">오시는 길</h2>

                <Card className="border-slate-100 shadow-sm overflow-hidden bg-slate-50 border-l-4 border-l-primary rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg mb-1">트러스트웨이 제주본부</h3>
                        <p className="text-slate-600 leading-relaxed font-light break-keep">
                          제주특별자치도 제주시 월랑로 81
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6 pt-4">
                <div className="flex items-center gap-4 text-slate-600">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-slate-800">운영시간</h4>
                    <p className="text-sm font-light mt-0.5">평일 09:00 - 18:00 (주말 및 공휴일 휴무)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-600">
                  <Car className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-slate-800">주차안내</h4>
                    <p className="text-sm font-light mt-0.5">사무실 주차장 편하게 이용하시면 됩니다.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Map Embed */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-3 h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative group bg-slate-100"
            >
              {/* 카카오맵 렌더링 영역 */}
              {kakaoAppKey ? (
                isMapLoaded ? (
                  <Map
                    center={center}
                    style={{ width: "100%", height: "100%" }}
                    level={3}
                    className="absolute inset-0 z-10 rounded-2xl border border-slate-200"
                  >
                    <MapMarker position={center}>
                      <div className="p-1 px-3 min-w-max text-[#000] text-sm font-bold bg-white/90 rounded-md">
                        트러스트웨이 제주본부
                      </div>
                    </MapMarker>
                  </Map>
                ) : (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-slate-500 gap-3 border bg-slate-100 rounded-2xl">
                    <div className="w-8 h-8 rounded-full border-4 border-slate-300 border-t-primary animate-spin" />
                    <span className="text-sm font-medium tracking-tight">지도 데이터를 불러오는 중입니다...</span>
                  </div>
                )
              ) : (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center text-slate-500 bg-slate-100/80 backdrop-blur-sm gap-4 border border-dashed border-slate-300 rounded-2xl">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-lg mb-1 tracking-tight">카카오맵 API 연동 필요</h5>
                    <p className="text-sm md:text-base text-slate-600 font-light break-keep max-w-sm">
                      현재 구글맵 대신 <b>카카오맵</b>을 활성화하기 위해서는 API 키 설정이 필요합니다.<br /><br />
                      <span className="bg-slate-200 px-2 py-1 rounded text-xs font-mono">.env.local</span> 파일에 <br />
                      <span className="text-primary font-semibold text-xs mt-1 block">NEXT_PUBLIC_KAKAO_APP_KEY=본인의키값</span>
                      항목을 추가해 주세요.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Office Gallery Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Office Gallery</h2>
            <p className="text-slate-500 text-lg">최적의 금융 상담을 위해 준비된 프리미엄 공간</p>
          </motion.div>

          {/* 사진 2장 갤러리 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] gap-6"
          >
            {/* 사무실 1층 가로 (가로 형태, 더 넓은 비중) */}
            <motion.div variants={fadeInUp} className="group relative lg:col-span-8 overflow-hidden rounded-2xl shadow-sm bg-white cursor-pointer">
              <Image
                src="/img/사무실1층_가로.jpg"
                alt="사무실 1층 고객 라운지"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium mb-2 inline-block">1F</span>
                <h3 className="text-xl font-bold text-white">편안한 고객 라운지</h3>
              </div>
            </motion.div>

            {/* 사무실 2층 세로 (세로 형태, 좁은 비중) */}
            <motion.div variants={fadeInUp} className="group relative lg:col-span-4 overflow-hidden rounded-2xl shadow-sm bg-white cursor-pointer">
              <Image
                src="/img/사무실2층_세로.jpg"
                alt="사무실 2층 업무 공간"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium mb-2 inline-block">2F</span>
                <h3 className="text-xl font-bold text-white">상담 및 업무공간</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
