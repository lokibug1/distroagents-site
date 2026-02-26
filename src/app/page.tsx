import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import AgentCategories from "@/components/sections/AgentCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Metrics from "@/components/sections/Metrics";
import IndustryFocus from "@/components/sections/IndustryFocus";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <AgentCategories />
      <HowItWorks />
      <Metrics />
      <IndustryFocus />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
