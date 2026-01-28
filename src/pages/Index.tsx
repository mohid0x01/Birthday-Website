import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetter from "@/components/LoveLetter";
import WishesSection from "@/components/WishesSection";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveLetter />
      <WishesSection />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Index;
