'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getCustomers(searchQuery = '', categoryFilter = '') {
    const supabase = await createClient()

    let query = supabase.from('customers').select(`
        *,
        family_groups ( group_name ),
        profiles:created_by ( name )
    `).order('created_at', { ascending: false })

    if (searchQuery) {
        query = query.ilike('name', `%${searchQuery}%`)
    }
    
    if (categoryFilter && categoryFilter !== '전체') {
        query = query.eq('category', categoryFilter)
    }

    const { data, error } = await query

    if (error) {
        console.error("Error fetching customers:", error.message)
        return []
    }

    return data
}

export async function getFamilyGroups() {
    const supabase = await createClient()
    const { data, error } = await supabase.from('family_groups').select('*').order('group_name')
    if (error) return []
    return data
}

export async function createCustomer(formData) {
    const supabase = await createClient()
    
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: '인증되지 않은 사용자입니다.' }

    const name = formData.get('name')
    const gender = formData.get('gender')
    const birth_date = formData.get('birth_date') || null
    const resident_id = formData.get('resident_id')
    const phone_number = formData.get('phone_number')
    const address = formData.get('address')
    const zip_code = formData.get('zip_code')
    const category = formData.get('category')
    
    // Family group logic
    const familyAction = formData.get('family_action') // 'none', 'existing' or 'new'
    let family_group_id = null

    if (familyAction === 'existing') {
        family_group_id = formData.get('family_group_id')
    } else if (familyAction === 'new') {
        const group_name = formData.get('new_group_name')
        const description = formData.get('new_group_description')
        
        if (group_name) {
            const { data: newGroup, error: groupErr } = await supabase
                .from('family_groups')
                .insert([{ group_name, description }])
                .select()
                .single()
                
            if (groupErr) {
                console.error("Group Error:", groupErr.message)
                return { error: '가족 그룹 생성 중 오류가 발생했습니다.' }
            }
            family_group_id = newGroup.id
        }
    }

    const { error: customerError } = await supabase
        .from('customers')
        .insert([{
            name, gender, birth_date, resident_id, phone_number,
            address, zip_code, category, family_group_id,
            created_by: user.id
        }])

    if (customerError) {
        console.error("Customer Error:", customerError.message)
        return { error: '고객 정보 등록 중 오류가 발생했습니다: ' + customerError.message }
    }

    revalidatePath('/office/customers')
    redirect('/office/customers')
}
