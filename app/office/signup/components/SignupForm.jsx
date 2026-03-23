"use client";

import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { signup } from "@/app/office/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Image as ImageIcon } from "lucide-react";

export function SignupForm() {
    const [isAddressModalOpen, setAddressModalOpen] = useState(false);
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState(""); // 추가 상세주소
    const [phone, setPhone] = useState(""); // 폰 하이픈 포맷팅
    const [previewUrl, setPreviewUrl] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        setAddress(fullAddress);
        setAddressModalOpen(false);
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handlePhoneChange = (e) => {
        let val = e.target.value.replace(/[^0-9]/g, '');
        let res = '';
        if (val.length < 4) {
            res = val;
        } else if (val.length < 8) {
            res = val.substring(0, 3) + '-' + val.substring(3);
        } else {
            res = val.substring(0, 3) + '-' + val.substring(3, 7) + '-' + val.substring(7, 11);
        }
        setPhone(res);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const password = formData.get("password");

        // 비밀번호 규칙 프론트엔드 검증 (영문 + 숫자 최소 8자)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMsg("비밀번호는 영문과 숫자를 포함하여 8자 이상이어야 합니다.");
            setIsSubmitting(false);
            return;
        }

        // 전체 주소 합치기
        const submitAddress = `${address} ${addressDetail}`.trim();
        formData.set("address", submitAddress);

        const res = await signup(formData);

        if (res?.error) {
            setErrorMsg(res.error);
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* 기본 정보 */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold text-[#031242] tracking-tight border-b border-slate-100 pb-2">계정 및 기본 정보</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">아이디 *</Label>
                        <Input id="username" name="username" required placeholder="영문, 숫자, 언더스코어만 사용 가능" className="h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">이름 *</Label>
                        <Input id="name" name="name" required placeholder="한글만 입력 가능" className="h-11 rounded-lg" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">비밀번호 *</Label>
                        <Input id="password" name="password" type="password" required placeholder="영어+숫자 8자 이상" className="h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="passwordConfirm">비밀번호 확인 *</Label>
                        <Input id="passwordConfirm" name="passwordConfirm" type="password" required placeholder="영어+숫자 8자 이상" className="h-11 rounded-lg" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="birth_date">생년월일 *</Label>
                        <Input id="birth_date" name="birth_date" type="date" required className="h-11 rounded-lg text-slate-700" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone_number">휴대폰 번호 *</Label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            type="tel"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                            placeholder="010-0000-0000"
                            className="h-11 rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* 주소 정보 */}
            <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-[#031242] tracking-tight border-b border-slate-100 pb-2">지역 및 근무 정보</h3>
                <div className="space-y-2">
                    <Label htmlFor="address">거주지 주소 *</Label>
                    <div className="flex gap-2">
                        <Input
                            id="address"
                            // name은 Server Action에서 사용하지만 여기서 쓰인 name 속성은 formData.set 으로 대체됨 (단순히 readOnly용)
                            value={address}
                            readOnly
                            required
                            placeholder="주소를 검색해주세요"
                            className="h-11 rounded-lg flex-1 bg-slate-50"
                        />
                        <Button type="button" onClick={() => setAddressModalOpen(true)} className="h-11 px-4 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg shrink-0">
                            <MapPin className="w-4 h-4 mr-2" /> 주소 검색
                        </Button>
                    </div>
                    <Input
                        id="addressDetail"
                        value={addressDetail}
                        onChange={(e) => setAddressDetail(e.target.value)}
                        required
                        placeholder="상세 주소를 입력해주세요 (예: 101동 202호)"
                        className="h-11 rounded-lg mt-2"
                    />

                    {isAddressModalOpen && (
                        <div className="mt-2 border border-slate-200 rounded-lg overflow-hidden relative">
                            <Button type="button" onClick={() => setAddressModalOpen(false)} className="absolute top-0 right-0 z-10 w-8 h-8 p-0 bg-red-500 hover:bg-red-600 text-white rounded-bl-lg rounded-none">X</Button>
                            <DaumPostcode onComplete={handleComplete} style={{ height: "400px" }} />
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="hire_date">입사 년.월.일 *</Label>
                    <Input id="hire_date" name="hire_date" type="date" required className="h-11 rounded-lg text-slate-700" />
                </div>
            </div>

            {/* 증명 사진 */}
            <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-[#031242] tracking-tight border-b border-slate-100 pb-2">프로필 사진 (증명사진)</h3>
                <div className="flex items-center gap-6">
                    <div className="w-24 h-32 bg-slate-100 border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <ImageIcon className="w-8 h-8 text-slate-300" />
                        )}
                    </div>
                    <div className="flex-1 space-y-3">
                        <Label htmlFor="photo" className="text-[13px] text-slate-500 font-medium">
                            본인 확인이 가능한 정면 사진을 업로드해주세요. (필수)
                        </Label>
                        {/* Shadcn Input 대신 기본 input을 사용하여 CSS 깨짐(Padding/Border 중복) 문제 해결 */}
                        <input
                            id="photo"
                            name="photo"
                            type="file"
                            accept="image/*"
                            required
                            onChange={handlePhotoChange}
                            className="block w-full text-sm text-slate-500 
                                       file:mr-4 file:py-2.5 file:px-5 
                                       file:rounded-full file:border-0 
                                       file:text-sm file:font-bold 
                                       file:bg-blue-50 file:text-blue-700 
                                       hover:file:bg-blue-100 hover:file:cursor-pointer
                                       focus:outline-none cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-[13px] rounded-lg font-medium text-center">
                    {errorMsg}
                </div>
            )}

            <div className="pt-4">
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-[#031242] hover:bg-[#031242]/90 text-white rounded-xl shadow-md font-bold text-lg tracking-wide transition-all active:scale-[0.98]">
                    {isSubmitting ? "가입 처리 중..." : "직원 계정 가입 신청"}
                </Button>
            </div>
        </form>
    );
}
