"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
    name: z.string().min(2, { message: "이름은 2글자 이상이어야 합니다." }),
    phone: z
        .string()
        .regex(/^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/, { message: "전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)" }),
    category: z.string({ required_error: "상담 희망 분야를 선택해주세요." }),
    privacyConsent: z.boolean().refine((val) => val === true, {
        message: "개인정보 수집 및 이용에 동의해야 합니다.",
    }),
});

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            category: "",
            privacyConsent: false,
        },
    });

    const onSubmit = async (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                setIsSubmitted(true);
                reset();
                resolve();
            }, 1000);
        });
    };

    return (
        <section id="contact" className="py-32 md:py-48 bg-slate-50 relative border-t border-slate-200">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-center max-w-7xl">
                <div className="w-full max-w-3xl animate-fade-in-up">

                    <div className="text-center mb-16 space-y-6">
                        <p className="text-slate-400 font-mono text-xs tracking-[0.2em] uppercase">Private Booking</p>
                        <h2 className="text-3xl md:text-4xl font-sans font-light text-slate-900 tracking-tight break-keep">
                            당신만을 위한 <strong className="font-medium text-primary">전문적이고 깊이 있는 1:1 상담 예약</strong>
                        </h2>
                        <div className="w-12 h-[1px] bg-slate-300 mx-auto"></div>
                        <p className="text-[14px] text-slate-500 font-light break-keep max-w-md mx-auto leading-relaxed">
                            사전 예약을 통해서만 프라이빗 컨설팅이 진행됩니다.<br />정보를 남겨주시면 담당 파트너가 정확하게 진단하고 연락드리겠습니다.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                        {isSubmitted ? (
                            <div className="py-20 text-center flex flex-col items-center animate-fade-in">
                                <div className="w-16 h-16 border-2 border-primary text-primary flex items-center justify-center mb-6">
                                    <span className="text-2xl font-light">✓</span>
                                </div>
                                <h3 className="text-2xl font-sans font-light mb-4">예약이 접수되었습니다.</h3>
                                <p className="text-sm text-slate-500 mb-10 font-light leading-relaxed">
                                    담당 파트너 배정 후 기재해주신 연락처로<br /> 스케줄 조율을 위한 안내를 드리겠습니다.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-8 py-3 border border-slate-300 text-slate-600 text-sm tracking-widest uppercase hover:bg-slate-50 transition-colors font-mono"
                                >
                                    Return
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <Label htmlFor="name" className="text-xs font-mono tracking-widest text-slate-500 uppercase">Client Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="홍길동"
                                            {...register("name")}
                                            className={`rounded-none border-0 border-b-2 border-slate-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary text-lg font-light ${errors.name ? "border-red-500" : ""}`}
                                        />
                                        {errors.name && <p className="text-red-500 text-[11px] font-mono mt-2 tracking-wide uppercase">{errors.name.message}</p>}
                                    </div>

                                    <div className="space-y-4">
                                        <Label htmlFor="phone" className="text-xs font-mono tracking-widest text-slate-500 uppercase">Contact Number</Label>
                                        <Input
                                            id="phone"
                                            placeholder="010-0000-0000"
                                            {...register("phone")}
                                            className={`rounded-none border-0 border-b-2 border-slate-200 bg-transparent px-0 py-3 focus-visible:ring-0 focus-visible:border-primary text-lg font-light ${errors.phone ? "border-red-500" : ""}`}
                                        />
                                        {errors.phone && <p className="text-red-500 text-[11px] font-mono mt-2 tracking-wide uppercase">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Label htmlFor="category" className="text-xs font-mono tracking-widest text-slate-500 uppercase">Inquiry Category</Label>
                                    <Select
                                        onValueChange={(val) => setValue("category", val, { shouldValidate: true })}
                                        defaultValue={watch("category")}
                                    >
                                        <SelectTrigger className={`rounded-none border-0 border-b-2 border-slate-200 bg-transparent px-0 py-3 h-auto focus:ring-0 focus:border-primary text-lg font-light ${errors.category ? "border-red-500" : ""}`}>
                                            <SelectValue placeholder="상담 분야를 선택해주세요" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-none border-slate-200">
                                            <SelectItem value="wealth" className="py-3 font-light">종합 재무 설계 및 자산 관리</SelectItem>
                                            <SelectItem value="insurance" className="py-3 font-light">보험 리모델링 및 리스크 방어</SelectItem>
                                            <SelectItem value="tax_pension" className="py-3 font-light">저축, 절세 및 연금 (IRP/ISA)</SelectItem>
                                            <SelectItem value="corporate" className="py-3 font-light">법인 자금 및 가업 승계</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.category && <p className="text-red-500 text-[11px] font-mono mt-2 tracking-wide uppercase">{errors.category.message}</p>}
                                </div>

                                <div className="pt-6 flex items-start space-x-4">
                                    <Checkbox
                                        id="privacy"
                                        checked={watch("privacyConsent")}
                                        onCheckedChange={(checked) => setValue("privacyConsent", checked, { shouldValidate: true })}
                                        className="rounded-none border-slate-300 mt-1 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                                    />
                                    <div className="grid gap-2 leading-none">
                                        <Label
                                            htmlFor="privacy"
                                            className="text-[13px] font-light text-slate-600 cursor-pointer"
                                        >
                                            개인정보 수집 및 이용 동의 (필수)
                                        </Label>
                                        <p className="text-[11px] text-slate-400 font-light max-w-md">
                                            수집된 정보는 상담 목적으로만 사용되며, 최상위 보안 등급 하에 관리된 후 파기됩니다.
                                        </p>
                                        {errors.privacyConsent && <p className="text-red-500 text-[11px] font-mono uppercase tracking-wide">{errors.privacyConsent.message}</p>}
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full overflow-hidden bg-primary text-white py-6 flex items-center justify-center border border-primary transition-all hover:shadow-[0_0_40px_rgba(3,18,66,0.3)] disabled:opacity-70"
                                    >
                                        {/* Subtle metallic sweep animation on hover */}
                                        <div className="absolute inset-0 w-[200%] translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                                        <span className="relative z-10 text-sm font-mono tracking-[0.2em] uppercase">
                                            {isSubmitting ? "Processing..." : "Request Private Consultation"}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
