"use client";

import HeroContent from "@/components/homepage/HeroContent";
import Navbar from "@/components/homepage/Navbar";
import PricingInfo from "@/components/homepage/PricingInfo";
import { homepage_hover_cards } from "@/content/homepage_hover_cards";
import HoverCards from "@/components/homepage/HoverCards";
import RecommendedProducts from "@/components/homepage/RecommendedProducts";
import { homepage_recommended_products } from "@/content/homepapge_recommended_products";
import Features from "@/components/homepage/Features";
import RegisterPlanks from "@/components/homepage/RegisterPlanks";
import QuestionsSection from "@/components/homepage/QuestionsSection";
import Footer from "@/components/homepage/Footer";
import ContactBar from "@/components/homepage/ContactBar";
import { useShowBar } from "@/hooks/useShowBar";
import RealizedProjects from "@/components/homepage/RealizedProjects";
import OurPartners from "@/components/homepage/OurPartners";
import MobileNavbar from "@/components/homepage/MobileNavbar";

export default function Home() {
  const { showBar } = useShowBar();

  return (
    <div className="relative">
      <ContactBar isLoggedIn={true} showBar={showBar} />
      <MobileNavbar />
      <div className="relative">
        <Navbar showedContactBar={showBar} />
        <div className="h-auto w-full bg-cover bg-[url('/img/hero.webp')] absolute top-0">
          <div className="absolute top-0 inset-0 w-full bg-black/80" />
          <HeroContent />
        </div>
        <div className="h-[546px] md:h-[696px] w-full" />
        <HoverCards items={homepage_hover_cards} cn="mt-20" />
        <PricingInfo cn="mt-10 md:mt-20" />
        <Features />
        <RecommendedProducts products={homepage_recommended_products} />
        <RegisterPlanks />
        <OurPartners />
        <RealizedProjects />
        <QuestionsSection />
        <Footer />
      </div>
    </div>
  );
}
