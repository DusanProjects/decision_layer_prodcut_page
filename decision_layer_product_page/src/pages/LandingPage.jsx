import { useState, useEffect } from "react";
import { BASE_COUNT, getWaitlistCount } from "../lib/waitlist";
import NavBar from "../sections/NavBar";
import HeroSection from "../sections/HeroSection";
import PainPointSection from "../sections/PainPointSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import WhySection from "../sections/WhySection";
import SocialProofSection from "../sections/SocialProofSection";
import FutureVisionSection from "../sections/FutureVisionSection";
import FinalCtaSection from "../sections/FinalCtaSection";
import FooterSection from "../sections/FooterSection";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [waitlistCount, setWaitlistCount] = useState(BASE_COUNT + getWaitlistCount());

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWaitlistSuccess = (count) => {
    setWaitlistCount(BASE_COUNT + count);
  };

  return (
    <div style={{
      fontFamily: "'Outfit', sans-serif",
      color: "#1C1917",
      overflowX: "hidden",
      background: "#FAFAF9",
    }}>
      <NavBar scrollY={scrollY} />
      <HeroSection waitlistCount={waitlistCount} handleWaitlistSuccess={handleWaitlistSuccess} />
      <PainPointSection />
      <HowItWorksSection />
      <WhySection />
      <SocialProofSection />
      <FutureVisionSection />
      <FinalCtaSection waitlistCount={waitlistCount} handleWaitlistSuccess={handleWaitlistSuccess} />
      <FooterSection />
    </div>
  );
}
