import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetter from "@/components/LoveLetter";
import WishesSection from "@/components/WishesSection";
import ReasonsSection from "@/components/ReasonsSection";
import SurpriseButton from "@/components/SurpriseButton";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import WelcomeOverlay from "@/components/WelcomeOverlay";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {!hasEntered && <WelcomeOverlay onEnter={() => setHasEntered(true)} />}
      
      <div className={`transition-opacity duration-500 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        <FloatingHearts />
        <HeroSection />
        <LoveLetter />
        <ReasonsSection />
        <WishesSection />
        <SurpriseButton />
        <PhotoGallery />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
