import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { experts } from "@/lib/data";

export const metadata = {
    title: "Our Teams | TrustWay",
    description: "트러스트웨이는 다양한 경험과 전문성을 지닌 팀과 함께합니다.",
};

export default function ExpertsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Modern Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 z-10" />
                    {/* Add a subtle decorative blur/glow effect */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] z-10" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] z-10" />
                </div>

                <div className="relative z-20 mt-20 text-white space-y-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 py-2">
                        Meet Our Experts
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-blue-100 break-keep leading-relaxed max-w-2xl mx-auto">
                        최고의 전문성과 신뢰를 바탕으로<br />
                        당신의 흔들림 없는 내일을 설계합니다.
                    </p>
                </div>
            </section>

            {/* Contemporary Bento / Hover Grid Section */}
            <section className="py-24 md:py-32 bg-slate-50 relative z-30 -mt-8 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {experts.map((expert) => (
                            <Link href={`/experts/${expert.id}`} key={expert.id} className="group block focus:outline-none h-[500px]">
                                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ease-out hover:shadow-[0_20px_50px_rgba(3,18,66,0.3)] hover:-translate-y-2 bg-slate-200">

                                    {/* High resolution image that scales slightly on hover */}
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110"
                                    />

                                    {/* Gradient to darken the image for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 via-40% to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

                                    {/* Text Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">

                                        {/* Bio & Tags: slide up and fade in on hover */}
                                        <div className="translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 mb-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {expert.tags.map((tag, idx) => (
                                                    <Badge key={idx} variant="outline" className="bg-white/15 text-white border-white/30 backdrop-blur-md px-3 py-1 font-semibold tracking-wide">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <p className="text-white text-[15px] md:text-base leading-relaxed font-medium break-keep drop-shadow-md">
                                                {expert.description}
                                            </p>
                                        </div>

                                        {/* Name and Position: always visible, moves up slightly on hover */}
                                        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                                            <p className="text-blue-300 font-semibold tracking-widest text-xs uppercase mb-2 flex items-center gap-3">
                                                <span className="w-10 h-[1px] bg-blue-300/50 block"></span>
                                                {expert.position.split(" / ")[0]}
                                            </p>
                                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-2">
                                                {expert.name}
                                            </h2>
                                        </div>

                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
