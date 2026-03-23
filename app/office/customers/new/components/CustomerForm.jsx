"use client";

import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { createCustomer } from "../../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, User, Building } from "lucide-react";

export function CustomerForm({ familyGroups }) {
    const [isAddressModalOpen, setAddressModalOpen] = useState(false);
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [phone, setPhone] = useState("");
    const [residentId, setResidentId] = useState("");
    const [familyAction, setFamilyAction] = useState("none");
    const [errorMsg, setErrorMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAddressComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";
        if (data.addressType === "R") {
            if (data.bname !== "") extraAddress += data.bname;
            if (data.buildingName !== "") extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setAddress(fullAddress);
        setAddressModalOpen(false);
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

    const handleResidentIdChange = (e) => {
        // Formats Resident ID natively: XXXXXX-XXXXXXX
        let val = e.target.value.replace(/[^0-9]/g, '');
        let res = '';
        if (val.length <= 6) {
            res = val;
        } else {
            res = val.substring(0, 6) + '-' + val.substring(6, 13);
        }
        setResidentId(res);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const submitAddress = `${address} ${addressDetail}`.trim();
        formData.set("address", submitAddress);
        formData.set("family_action", familyAction);
        
        // zip_code parsing from DaumPostcode if needed, but we didn't save it. So we can just skip or add a hidden zipCode field later.
        
        const res = await createCustomer(formData);

        if (res?.error) {
            setErrorMsg(res.error);
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            {/* 1. 개인 정보 섹션 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <User className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-[#031242] tracking-tight">개인 일반 정보</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">고객 성함 *</Label>
                        <Input id="name" name="name" required placeholder="예: 홍길동" className="h-11 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">고객 분류 *</Label>
                        <Select name="category" defaultValue="가망고객" required>
                            <SelectTrigger className="h-11 rounded-lg w-full">
                                <SelectValue placeholder="분류 선택" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="계약자">계약자 (기존 계약 보유)</SelectItem>
                                <SelectItem value="가망고객">가망고객 (상담 진행/예정)</SelectItem>
                                <SelectItem value="잠재고객">잠재고객 (단순 DB)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="resident_id">주민등록번호 *</Label>
                        <Input 
                            id="resident_id" 
                            name="resident_id" 
                            type="text" 
                            value={residentId}
                            onChange={handleResidentIdChange}
                            required 
                            placeholder="000000-0000000" 
                            className="h-11 rounded-lg font-mono tracking-widest text-slate-700" 
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gender">성별 *</Label>
                        <Select name="gender" required>
                            <SelectTrigger className="h-11 rounded-lg w-full text-slate-700">
                                <SelectValue placeholder="성별 선택" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="남">남성 (Male)</SelectItem>
                                <SelectItem value="여">여성 (Female)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone_number">연락처 *</Label>
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
                    <div className="space-y-2">
                        <Label htmlFor="birth_date">생년월일</Label>
                        <Input id="birth_date" name="birth_date" type="date" className="h-11 rounded-lg text-slate-700" />
                    </div>
                </div>
            </div>

            {/* 2. 주소 정보 섹션 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        <Building className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-[#031242] tracking-tight">주소 (연락처)</h2>
                </div>
                
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>거주지 주소</Label>
                        <div className="flex gap-2">
                            <Input 
                                value={address} 
                                readOnly 
                                placeholder="주소를 검색해주세요" 
                                className="h-11 rounded-lg flex-1 bg-slate-50"
                            />
                            <Button type="button" onClick={() => setAddressModalOpen(true)} className="h-11 px-4 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg shrink-0">
                                <MapPin className="w-4 h-4 mr-2" /> 주소 검색
                            </Button>
                        </div>
                        <Input 
                            value={addressDetail} 
                            onChange={(e) => setAddressDetail(e.target.value)} 
                            placeholder="상세 주소를 입력해주세요 (선택)" 
                            className="h-11 rounded-lg mt-2"
                        />
                        
                        {isAddressModalOpen && (
                            <div className="mt-3 border border-slate-200 rounded-xl overflow-hidden relative shadow-sm">
                                <Button type="button" onClick={() => setAddressModalOpen(false)} className="absolute top-0 right-0 z-10 w-8 h-8 p-0 bg-red-500 hover:bg-red-600 text-white rounded-bl-lg rounded-none">X</Button>
                                <DaumPostcode onComplete={handleAddressComplete} style={{ height: "350px" }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. 가족 그룹 섹션 */}
            <div className="bg-amber-50/30 p-8 rounded-2xl shadow-sm border border-amber-100 space-y-6">
                <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
                    <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                        <Users className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-amber-900 tracking-tight">가족 그룹 연결 (선택)</h2>
                </div>
                
                <p className="text-[13px] text-amber-800/80 font-medium leading-relaxed break-keep">
                    고객을 가족 단위로 묶어 관리할 수 있습니다. 이미 등록된 가족 그룹에 편입시키거나, 이 고객을 중심으로 새로운 가족 그룹을 생성하세요.
                </p>

                <div className="space-y-6">
                    <Select value={familyAction} onValueChange={setFamilyAction}>
                        <SelectTrigger className="h-11 rounded-lg w-full bg-white border-amber-200">
                            <SelectValue placeholder="가족 그룹 설정" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">가족 그룹 지정하지 않음 (단독)</SelectItem>
                            <SelectItem value="existing">기존 가족 그룹에 연결하기</SelectItem>
                            <SelectItem value="new">새로운 가족 그룹 생성하기</SelectItem>
                        </SelectContent>
                    </Select>

                    {familyAction === "existing" && (
                        <div className="space-y-2 animate-fade-in p-4 bg-white rounded-xl border border-slate-200">
                            <Label htmlFor="family_group_id" className="text-slate-700">등록된 가족 그룹 선택</Label>
                            <Select name="family_group_id">
                                <SelectTrigger className="h-11 rounded-lg w-full">
                                    <SelectValue placeholder="가족을 선택해주세요" />
                                </SelectTrigger>
                                <SelectContent>
                                    {familyGroups.length === 0 ? (
                                        <SelectItem value="empty" disabled>생성된 가족 그룹이 없습니다.</SelectItem>
                                    ) : (
                                        familyGroups.map((g) => (
                                            <SelectItem key={g.id} value={g.id}>{g.group_name}</SelectItem>
                                        ))
                                    )}
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    {familyAction === "new" && (
                        <div className="space-y-4 animate-fade-in p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-slate-800 text-sm">신규 가족 그룹 생성</h4>
                            <div className="space-y-2">
                                <Label htmlFor="new_group_name" className="text-slate-600">그룹명 (예: 김철수님 가족)</Label>
                                <Input id="new_group_name" name="new_group_name" placeholder="가족 단위 대표 이름" className="h-11 rounded-lg" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new_group_description" className="text-slate-600">특이사항 (선택)</Label>
                                <Input id="new_group_description" name="new_group_description" placeholder="가족/자녀 관계, 특이 질병 이력 등" className="h-11 rounded-lg" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-[14px] rounded-xl font-medium text-center shadow-sm">
                    {errorMsg}
                </div>
            )}

            <div className="pt-8 border-t border-slate-200 flex justify-end gap-3">
                <Button type="button" variant="outline" className="h-12 px-6 rounded-xl font-bold bg-white" onClick={() => window.history.back()}>
                    취소
                </Button>
                <Button type="submit" disabled={isSubmitting} className="h-12 px-10 bg-[#031242] hover:bg-[#031242]/90 text-white rounded-xl shadow-md font-bold text-[15px] tracking-wide transition-all active:scale-[0.98]">
                    {isSubmitting ? "등록 중..." : "고객 정보 등록 완료"}
                </Button>
            </div>
        </form>
    );
}
