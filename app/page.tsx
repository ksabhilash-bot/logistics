import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        {/* Cinematic Scroll Hero Section */}
        <HeroCanvas />

        {/* Corporate Profile Section */}
        <AboutSection />

        {/* Dynamic Services Section */}
        <ServicesSection />

        {/* Interactive Coverage Route Map */}
        <CoverageSection />

        {/* Infinite Logo Marquee */}
        <PartnersSection />

        {/* Forms and Social Connections */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}


