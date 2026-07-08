import { NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

const CATEGORY_LABELS = {
    wealth: "종합 재무 설계 및 자산 관리",
    insurance: "보험 리모델링 및 리스크 방어",
    tax_pension: "저축, 절세 및 연금 (IRP/ISA)",
    corporate: "법인 자금 및 가업 승계",
};

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const { name, phone, category, privacyConsent } = body ?? {};

    if (!name || !phone || !category) {
        return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!DISCORD_WEBHOOK_URL) {
        console.error("DISCORD_WEBHOOK_URL is not configured");
        return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const payload = {
        embeds: [
            {
                title: "새 상담 예약",
                color: 0x031242,
                fields: [
                    { name: "이름", value: String(name), inline: true },
                    { name: "연락처", value: String(phone), inline: true },
                    { name: "상담 분야", value: CATEGORY_LABELS[category] ?? String(category) },
                    { name: "개인정보 동의", value: privacyConsent ? "동의" : "미동의", inline: true },
                ],
                timestamp: new Date().toISOString(),
            },
        ],
    };

    try {
        const res = await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const text = await res.text();
            console.error("Discord webhook error:", res.status, text);
            return NextResponse.json({ ok: false, error: "Webhook failed" }, { status: 502 });
        }
    } catch (err) {
        console.error("Discord webhook fetch error:", err);
        return NextResponse.json({ ok: false, error: "Network error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}
