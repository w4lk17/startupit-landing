import HeroSection from "@/app/components/landing/HeroSection";
import FeaturesSection from "@/app/components/landing/FeaturesSection";
import CallToAction from "@/app/components/landing/CallToAction";
import Pricing from "@/app/components/landing/Pricing";
import Testimonials from "@/app/components/landing/Testimonials";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  );
}