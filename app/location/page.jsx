"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Car, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function LocationPage() {
  const officeAddress = "제주특별자치도 제주시 월랑로 81";

  const handleKakaoMap = () => {
    window.open(
      `https://map.kakao.com/link/search/${encodeURIComponent(officeAddress)}`,
      "_blank"
    );
  };

  const handleNaverMap = () => {
    window.open(
      `https://map.naver.com/v5/search/${encodeURIComponent(officeAddress)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <div className="absolute inset-0 bg-[url('/img/사무실1층_가로.jpg')] bg-cover bg-center z-0 opacity-40 grayscale" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10" />

        <div className="container relative z-20 mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              오시는 길
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light">
              트러스트웨이 제주본부로 오시는 길을 안내해 드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                트러스트웨이 제주본부
              </h2>

              <Card className="border-slate-100 shadow-sm overflow-hidden bg-slate-50 border-l-4 border-l-primary rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-slate-800 text-lg font-semibold leading-relaxed break-keep">
                        제주특별자치도 제주시 월랑로 81
                      </p>
                      <p className="text-[13px] font-medium text-primary mt-2 bg-primary/10 inline-block px-2.5 py-1 rounded-md">
                        📍 제주 중앙병원 인근
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 길찾기 버튼 */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <Button
                onClick={handleKakaoMap}
                className="gap-2 bg-[#FEE500] text-[#3C1E1E] hover:bg-[#f5dd00]"
              >
                <Navigation className="w-4 h-4" /> 카카오맵 길찾기
              </Button>
              <Button
                onClick={handleNaverMap}
                variant="outline"
                className="gap-2 border-[#03C75A] text-[#03C75A] hover:bg-[#03C75A]/10"
              >
                <Navigation className="w-4 h-4" /> 네이버지도 길찾기
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-6 pt-4"
            >
              <div className="flex items-center gap-4 text-slate-600">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-semibold text-slate-800">운영시간</h4>
                  <p className="text-sm font-light mt-0.5">
                    평일 09:00 - 18:00 (주말 및 공휴일 휴무)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <Car className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-semibold text-slate-800">주차안내</h4>
                  <p className="text-sm font-light mt-0.5">
                    사무실 주차장 편하게 이용하시면 됩니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              공간 소개
            </h2>
            <p className="text-slate-500 text-lg">
              최적의 금융 상담을 위해 준비된 프리미엄 공간
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] gap-6"
          >
            <motion.div
              variants={fadeInUp}
              className="group relative lg:col-span-8 overflow-hidden rounded-2xl shadow-sm bg-white cursor-pointer"
            >
              <Image
                src="/img/사무실1층_가로.jpg"
                alt="사무실 1층 고객 라운지"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium mb-2 inline-block">
                  1F
                </span>
                <h3 className="text-xl font-bold text-white">
                  편안한 고객 라운지
                </h3>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group relative lg:col-span-4 overflow-hidden rounded-2xl shadow-sm bg-white cursor-pointer"
            >
              <Image
                src="/img/사무실2층_세로.jpg"
                alt="사무실 2층 업무 공간"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium mb-2 inline-block">
                  2F
                </span>
                <h3 className="text-xl font-bold text-white">상담 및 업무공간</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
