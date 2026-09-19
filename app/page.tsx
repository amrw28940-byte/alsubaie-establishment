import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import MethodologySection from "./components/MethodologySection";
import ServicesGallerySection from "./components/ServicesGallerySection";
import WhyUsSection from "./components/WhyUsSection";
import AboutSection from "./components/AboutSection";
import RegionsSection from "./components/RegionsSection";




export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* استدعاء سكشن الهيرو الفخم */}
      <HeroSection />
      <ClientsSection />
      <MethodologySection />
      <ServicesGallerySection />
      <WhyUsSection />
      <AboutSection />
      <RegionsSection />
    </main>
  );
}