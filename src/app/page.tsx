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

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="h-[796px] w-full bg-cover bg-[url('/img/hero.jpeg')] absolute top-0">
        <div className="absolute top-0 h-[796px] w-full bg-black/80" />
        <HeroContent />
      </div>
      <div className="h-[796px] w-full" />
      <HoverCards items={homepage_hover_cards} cn="mt-20" />
      <PricingInfo cn="mt-20" />
      <Features />
      <RecommendedProducts products={homepage_recommended_products} />
      <RegisterPlanks />
      <QuestionsSection />
      <Footer />
    </div>
  );
}
