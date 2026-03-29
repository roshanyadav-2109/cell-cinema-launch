import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
}

const CTABanner = ({
  title = "Ready to See the Unseen?",
  subtitle = "Partner with Precigenetics to accelerate your drug discovery pipeline with real-time chemical intelligence.",
  primaryLabel = "Contact Our Team",
  primaryLink = "/contact",
  secondaryLabel = "Explore Services",
  secondaryLink = "/services",
}: CTABannerProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-20 md:py-24">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <AnimatedSection className="relative max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[40px] text-white leading-tight mb-5">
          {title}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-semibold px-7">
            <Link to={primaryLink}>{primaryLabel}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-lg font-semibold px-7">
            <Link to={secondaryLink}>{secondaryLabel}</Link>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTABanner;
