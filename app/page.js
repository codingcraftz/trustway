import { HeroSection } from "@/components/sections/HeroSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { LifeCycleSection } from "@/components/sections/LifeCycleSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ExpertSection } from "@/components/sections/ExpertSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-white">
      <HeroSection />
      <BeforeAfterSection />
      <ValueSection />
      <LifeCycleSection />
      <PhilosophySection />
      <ExpertSection />
      <ProcessSection />
      <ContactForm />
    </main>
  );
}
