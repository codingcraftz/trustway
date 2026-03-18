import { HeroSection } from "@/components/sections/HeroSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ExpertSection } from "@/components/sections/ExpertSection";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-white">
      <HeroSection />
      <ValueSection />
      <PhilosophySection />
      <ExpertSection />
      {/*<ContactForm />*/}
    </main>
  );
}
