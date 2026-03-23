"use client";

// [페이지 목적] 기업의 철학과 비전, 차별점, 서비스 분야, 전문가 프로필을 소개하는 About 페이지
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Network, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experts } from "@/lib/data";

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
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image / Pattern overlay */}
        <div className="absolute inset-0 bg-primary/95 z-10" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center z-0 opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-10" />

        <div className="container relative z-20 mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-keep">
              금융의 모든 길,<br />
              <span className="text-blue-300">트러스트웨이 제주</span>가 제안합니다
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light break-keep">
              고객의 안정적인 현재와 더 나은 미래를 위해, 개인 자산관리부터 법인 경영컨설팅까지 흔들림 없는 종합 금융 파트너가 되겠습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Trustway? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Trustway?</h2>
            <p className="text-slate-500 text-lg">트러스트웨이만의 차별화된 One-Stop 솔루션</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Briefcase className="w-10 h-10 text-primary" />,
                title: "Total Solution",
                description: "개인 재무설계부터 법인 가업승계, M&A까지 아우르는 압도적인 종합 금융 컨설팅을 제공합니다."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "Expert Group",
                description: "증권, 보험, 은행 등 각 금융 분야에서 10년 이상 활약한 베테랑 전문가들로 구성되어 있습니다."
              },
              {
                icon: <Network className="w-10 h-10 text-primary" />,
                title: "Professional Network",
                description: "노무사, 세무사, 변호사 등 각계 전문가 그룹과의 견고한 협업 방망을 통해 빈틈없는 솔루션을 제시합니다."
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="h-full border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 pb-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light break-keep">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Service Portfolio */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Service Portfolio</h2>
            <p className="text-slate-500 text-lg">개인과 법인 모두를 위한 맞춤형 컨설팅</p>
          </motion.div>

          <Tabs defaultValue="personal" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 p-1 bg-slate-200/50 rounded-xl h-auto min-h-14">
                <TabsTrigger value="personal" className="text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
                  개인 자산관리
                </TabsTrigger>
                <TabsTrigger value="corporate" className="text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all">
                  법인 경영 컨설팅
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="personal" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "보험 점검 및 위험 관리 컨설팅",
                    "저축 및 투자 목적자금 컨설팅",
                    "은퇴, 노후 대비 연금 컨설팅",
                    "비과세, 세액공제 등 절세 컨설팅",
                    "상속/증여 절세 컨설팅"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700 font-medium break-keep">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="corporate" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "기업승계 및 기업상속 컨설팅",
                    "CEO 퇴직플랜 및 법인자금 재무컨설팅",
                    "법인 퇴직연금(DB,DC,IRP) 제도 도입",
                    "전문가 그룹 협업을 통한 노무,세무,법무",
                    "M&A 등 종합경영컨설팅"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-slate-700 font-medium break-keep">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 4. People Section (팀 프로필) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our People</h2>
            <p className="text-slate-500 text-lg">최고의 전문성을 갖춘 트러스트웨이의 리더들</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experts.map((expert, idx) => (
              <motion.div
                key={expert.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.15 }}
                className="group h-full"
              >
                <Card className="h-full overflow-hidden border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                    {expert.image && (
                      <Image
                        src={expert.image}
                        alt={expert.name}
                        fill
                        className="object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white">{expert.name}</h3>
                      <p className="text-blue-200 text-sm font-medium mt-1">{expert.position.split(' / ')[1] || expert.position}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    {/* 박준영 팀장인 경우 특별한 키워드 강조를 추가 (id 기준, 강경서/고정길 등) */}
                    {expert.name === '박준영' && (
                      <div className="mb-4 inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                        수학적 논리와 개발자적 정교함
                      </div>
                    )}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {expert.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. FAQ Section (아코디언 활용) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">자주 묻는 질문</h2>
            <p className="text-slate-500 text-lg">트러스트웨이 컨설팅에 대해 궁금하신 점을 확인해보세요</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold text-slate-800">상담은 어떻게 진행되나요?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed font-light">
                  고객님의 현재 재무 상태와 목표를 1차적으로 파악한 후, 전담 매니저가 매칭되어 심층 상담을 진행합니다. 필요시 세무사, 노무사 등 전문가 그룹과 협업하여 종합적인 솔루션을 제안해 드립니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold text-slate-800">법인 컨설팅과 개인 자산관리의 차이점은 무엇인가요?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed font-light">
                  개인 자산관리는 저축, 투자, 연금 등 개인의 재무 목표 달성에 초점을 맞추는 반면, 법인 컨설팅은 가업승계, M&A, CEO 퇴직플랜, 법인 자금 운용 등 기업의 지속적인 성장과 리스크 관리에 중점을 둡니다. 트러스트웨이는 두 분야 모두에 최적화된 전문가를 보유하고 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold text-slate-800">기존에 가입한 보험이나 연금도 점검받을 수 있나요?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed font-light">
                  네, 가능합니다. 기존 금융 상품의 보장 범위, 수익률, 세제 혜택 등을 객관적으로 분석하여 중복되거나 부족한 부분을 점검하고, 고객님의 현재 상황에 맞게 리모델링하는 컨설팅을 제공합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 6. Partner Logos (신뢰의 지표) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-700">함께하는 파트너사</h2>
          <p className="text-sm text-slate-500 mt-2">국내외 최고 수준의 금융 파트너들과 함께합니다</p>
        </div>

        {/* 무한 롤링 배너 효과 */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <motion.div
            className="flex gap-16 md:gap-24 items-center px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* 파트너 로고들 (실제 로고 이미지가 없다면 텍스트 타이포그래피로 대체) */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-24 items-center">
                {/* 텍스트 기반 모의 파트너사 로고. 마우스 호버 시 컬러 변경 */}
                <div className="text-xl md:text-3xl font-black tracking-tighter opacity-40 hover:opacity-100 hover:text-[#ff6b00] transition-all duration-300 grayscale hover:grayscale-0 cursor-default">
                  MIRAE ASSET
                </div>
                <div className="text-xl md:text-3xl font-black tracking-tighter opacity-40 hover:opacity-100 hover:text-[#0052a4] transition-all duration-300 grayscale hover:grayscale-0 cursor-default">
                  SAMSUNG LIFE
                </div>
                <div className="text-xl md:text-3xl font-black tracking-tighter opacity-40 hover:opacity-100 hover:text-[#ffca08] transition-all duration-300 grayscale hover:grayscale-0 cursor-default">
                  KB INSURANCE
                </div>
                <div className="text-xl md:text-3xl font-black tracking-tighter opacity-40 hover:opacity-100 hover:text-[#002f6c] transition-all duration-300 grayscale hover:grayscale-0 cursor-default">
                  HYUNDAI MARINE
                </div>
                <div className="text-xl md:text-3xl font-black tracking-tighter opacity-40 hover:opacity-100 hover:text-[#ed1c24] transition-all duration-300 grayscale hover:grayscale-0 cursor-default">
                  HANWHA LIFE
                </div>
                <div className="text-xl md:text-3xl font-black tracking-tighter opacity-40 hover:opacity-100 hover:text-[#eb6100] transition-all duration-300 grayscale hover:grayscale-0 cursor-default">
                  DB INSURANCE
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
