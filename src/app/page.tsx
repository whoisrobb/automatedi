import { About } from "@/components/sections/about";
import { BentoGrid } from "@/components/sections/bento-grid";
import CTASection from "@/components/sections/cta";
import FeatureGrid from "@/components/sections/feature-grid";
import Hero from "@/components/sections/hero";
import Impact from "@/components/sections/impact";
import { WhyChooseAi } from "@/components/sections/Why-choose-ai";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <FeatureGrid />
      <About />
      <BentoGrid />
      <WhyChooseAi />
      <Impact />
      <CTASection />
    </div>
  );
}
