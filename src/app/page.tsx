import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import BenefitsSection from "@/components/home/BenefitsSection";
import IngredientsSection from "@/components/home/IngredientsSection";
import HowToUseSection from "@/components/home/HowToUseSection";
import ResultsTimeline from "@/components/home/ResultsTimeline";
import StatsSection from "@/components/home/StatsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <BenefitsSection />
      <IngredientsSection />
      <HowToUseSection />
      <ResultsTimeline />
      <StatsSection />
      <ReviewsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
