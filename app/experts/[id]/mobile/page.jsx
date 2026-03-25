import { notFound } from "next/navigation";

export default function ExpertMobilePage() {
    // /experts/[id]/mobile 최상위 접근 시 404 Not Found 처리
    notFound();
}
