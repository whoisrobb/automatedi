import About from "@/components/sections/about";
import FeatureGrid from "@/components/sections/feature-grid";
import Hero from "@/components/sections/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <FeatureGrid />
      <About />
    </div>
  );
}
