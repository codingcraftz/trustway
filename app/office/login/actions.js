'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData) {
    const supabase = await createClient()

    // Append implicit domain to the ID
    const email = formData.get('username') + '@office.trustway.kr'
    const password = formData.get('password')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
        console.error("Login Error:", error.message)
        redirect('/office/login?message=' + encodeURIComponent('아이디 또는 비밀번호를 다시 확인해주세요.'))
    }

    revalidatePath('/office', 'layout')
    redirect('/office')
}

export async function signup(formData) {
    const supabase = await createClient()

    const username = formData.get('username')
    const password = formData.get('password')
    const passwordConfirm = formData.get('passwordConfirm')
    const name = formData.get('name')
    const birth_date = formData.get('birth_date')
    const phone_number = formData.get('phone_number')
    const address = formData.get('address')
    const hire_date = formData.get('hire_date')
    const photo = formData.get('photo') // File object

    if (password !== passwordConfirm) {
        return { error: '비밀번호가 서로 일치하지 않습니다.' };
    }

    const email = username + '@office.trustway.kr' // fake email for Supabase Auth consistency

    let photo_url = null
    
    // 1. Upload Photo first to ensure we get the URL before DB insertion
    if (photo && photo.size > 0 && photo.name !== 'undefined') {
        const fileExt = photo.name.split('.').pop()
        // Save using username as the folder explicitly to keep it organized
        const filePath = `${username}/profile_${Date.now()}.${fileExt}`

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('profile_photos')
            .upload(filePath, photo, {
                contentType: photo.type,
                upsert: true
            })
            
        if (!uploadError && uploadData) {
            const { data: { publicUrl } } = supabase.storage
                .from('profile_photos')
                .getPublicUrl(uploadData.path)
            photo_url = publicUrl
        } else if (uploadError) {
            console.error("Photo Upload Error:", uploadError.message)
            return { error: '사진 업로드 중 오류가 발생했습니다: ' + uploadError.message }
        }
    }

    // 2. Auth SignUp - pass metadata so that Triggers can insert directly into profiles!
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username,
                name,
                birth_date,
                phone_number,
                address,
                hire_date,
                photo_url
            }
        }
    })

    if (authError) {
        console.error("Signup Error:", authError.message)
        return { error: '회원가입 실패 (기존 아이디가 있거나 시스템 오류입니다): ' + authError.message }
    }

    revalidatePath('/office', 'layout')
    redirect('/office/wait')
}
