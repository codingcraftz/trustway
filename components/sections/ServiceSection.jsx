import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, ShieldCheck, TrendingUp } from "lucide-react";

const services = [
    {
        title: "개인 자산 관리",
        description: "생애 주기에 맞춘 체계적인 재무 설계와 맞춤형 자산 배분 솔루션을 제공합니다.",
        icon: <TrendingUp className="w-10 h-10 text-primary mb-4" />,
    },
    {
        title: "기업 인증 컨설팅",
        description: "경영 리스크 관리 및 기업 가치 극대화를 위한 전문적인 인증 절차를 지원합니다.",
        icon: <Briefcase className="w-10 h-10 text-primary mb-4" />,
    },
    {
        title: "보험 리모델링",
        description: "중복 보장 분석 및 최적화된 보험 포트폴리오 재설계로 새는 비용을 막아드립니다.",
        icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
    },
];

export function ServiceSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">주요 서비스</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto break-keep">
                        TrustWay는 고객의 목표와 상황에 가장 적합한 금융 솔루션을 제안합니다.
                        개인과 기업의 흔들림 없는 성장을 위해 분야별 전문가가 함께합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group cursor-pointer"
                        >
                            <CardHeader className="pt-8">
                                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-800">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-slate-500 leading-relaxed break-keep">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
