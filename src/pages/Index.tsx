import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import CoursesPreview from "@/components/CoursesPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <HighlightsSection />
      <CoursesPreview />
      <TestimonialsSection />
      <NewsSection />
    </main>
    <Footer />
  </div>
);

export default Index;
