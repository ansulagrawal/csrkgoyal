import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { BlogCarousel } from "@/components/home/BlogCarousel";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div id="main-content">
      <HeroSection />
      <ServicesGrid />
      <BlogCarousel />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
