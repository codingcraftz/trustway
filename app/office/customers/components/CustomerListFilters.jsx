"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function CustomerListFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const q = searchParams.get('q') || ''
    const category = searchParams.get('category') || '전체'

    const updateQuery = (key, value) => {
        const params = new URLSearchParams(searchParams)
        if (value && value !== '전체') {
            params.set(key, value)
        } else {
            params.delete(key)
        }
        router.push(`/office/customers?${params.toString()}`)
    }

    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                    value={q}
                    onChange={(e) => updateQuery('q', e.target.value)}
                    placeholder="고객 성함 검색..." 
                    className="pl-10 h-10 rounded-lg"
                />
            </div>
            <div className="w-[180px]">
                <Select value={category} onValueChange={(val) => updateQuery('category', val)}>
                    <SelectTrigger className="h-10 rounded-lg">
                        <SelectValue placeholder="고객 분류" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="전체">전체 분류</SelectItem>
                        <SelectItem value="계약자">계약자</SelectItem>
                        <SelectItem value="가망고객">가망고객</SelectItem>
                        <SelectItem value="잠재고객">잠재고객</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
