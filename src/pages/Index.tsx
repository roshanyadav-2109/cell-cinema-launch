import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Activity, Shield, Dna, Eye, Grid3X3, Check, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import CTABanner from "@/components/CTABanner";
import { useCountUp } from "@/hooks/useCountUp";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/20"
            style={{
              width: `${200 + i * 120}px`,
              height: `${200 + i * 120}px`,
              top: `${20 + i * 5}%`,
              left: `${50 + i * 8}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>

    <div className="relative max-w-[1280px] mx-auto px-6 py-32 md:py-40">
      <div className="max-w-2xl animate-scale-in">
        <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          Incubated at MBC BioLabs, San Carlos
        </span>
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-[56px] text-white leading-[1.1] tracking-tight mb-4">
          Cell Cinema
        </h1>
        <h2 className="font-heading font-medium text-xl md:text-2xl text-white/80 mb-6 leading-snug">
          Real-time chemical movies of living cells
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
          Biology has been doing forensics. We're making film. You can't fix what you can't see happening — we see unseen biology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-semibold px-7">
            <Link to="/platform">Explore Our Platform</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-lg font-semibold px-7">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const CredibilityBar = () => (
  <section className="bg-accent py-6">
    <div className="max-w-[1280px] mx-auto px-6 text-center">
      <p className="text-primary font-medium text-lg italic">
        "Revolutionizing Drug Discovery with Real-time Epigenetic Insights"
      </p>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 md:py-24">
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <SectionLabel>ABOUT PRECIGENETICS</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-6">
            Redefining Drug Discovery by Seeing the Unseen Biology
          </h2>
          <p className="text-slate-body leading-relaxed mb-4">
            Precigenetics is transforming drug discovery by moving beyond examining deceased cells with delayed results. Our platform converts static observations into continuous, real-time monitoring of biological processes in motion.
          </p>
          <p className="text-slate-body leading-relaxed mb-6">
            Where conventional tools miss critical biology, our technology observes chemistry unfold live — revealing what has never been seen before. We are building the future of precision medicine, one living cell at a time.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Real-time chemical observation at sub-cellular resolution",
              "Label-free and non-destructive analysis",
              "Single-cell level precision",
              "FDA-aligned next-generation models",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-body text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold">
            <Link to="/platform">Learn More About Our Platform</Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Eye className="w-24 h-24 text-primary/30" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

const serviceCards = [
  { icon: Target, title: "Target Discovery", body: "Most disease biology remains undetectable with existing tools. Live chemistry observation reveals therapeutic targets that conventional endpoint assays overlook entirely." },
  { icon: Activity, title: "Mechanism of Action", body: "Beyond confirming drug efficacy, observing molecular cascades live demonstrates the mechanism and identifies enhancement opportunities." },
  { icon: Shield, title: "Toxicity Screening", body: "Identify harmful signals within hours rather than months through real-time chemical observation, preventing late-stage program failures." },
  { icon: Dna, title: "Next-Generation Disease Models", body: "FDA no longer mandates animal testing. Our platform creates living human-cell disease models with real-time chemical readout, replacing animal studies with superior human-relevant data." },
];

const ServicesSection = () => (
  <section className="py-20 md:py-24 bg-section-bg">
    <div className="max-w-[1280px] mx-auto px-6">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel>OUR SERVICES</SectionLabel>
        <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-4">
          Powering Every Stage of Drug Discovery
        </h2>
        <p className="text-slate-body max-w-2xl mx-auto leading-relaxed">
          From target identification to toxicity screening — our real-time chemical imaging platform accelerates the entire pipeline.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {serviceCards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.1}>
            <div className="bg-card rounded-lg p-8 shadow-sm border-t-[3px] border-t-primary hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full">
              <card.icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-heading font-semibold text-xl mb-3">{card.title}</h3>
              <p className="text-slate-body text-sm leading-relaxed">{card.body}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const platformFeatures = [
  { icon: Activity, title: "Real-Time Chemical Imaging", body: "Continuous molecular measurement of living cells at sub-cellular resolution. Watch chemistry unfold as it happens, not after the fact." },
  { icon: Eye, title: "Label-Free & Non-Destructive", body: "Our optical platform interrogates native molecular bonds directly. No dyes, no tags, no interference — observe biology in its natural state." },
  { icon: Grid3X3, title: "Single-Cell Resolution", body: "Population averages obscure significant biology. We extract high-dimensional signatures from individual cells, revealing the heterogeneity that drives drug resistance and disease progression." },
];

const PlatformSection = () => (
  <section className="py-20 md:py-24">
    <div className="max-w-[1280px] mx-auto px-6">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel>OUR PLATFORM</SectionLabel>
        <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-4">
          The Technology Behind Cell Cinema
        </h2>
        <p className="text-slate-body max-w-2xl mx-auto leading-relaxed">
          A first-of-its-kind optical platform that watches biology happen — in real time, without labels, at single-cell resolution.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {platformFeatures.map((feature, i) => (
          <AnimatedSection key={feature.title} delay={i * 0.1}>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-slate-body text-sm leading-relaxed">{feature.body}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { value: 100, suffix: "x", label: "Faster Insights", sub: "from months to hours" },
  { value: 90, suffix: "%", label: "Unseen Biology", sub: "revealed for the first time" },
  { value: 0, suffix: "", label: "Labels Required", sub: "completely non-destructive" },
  { value: 1, suffix: "", label: "Cell Resolution", sub: "single-cell precision" },
];

const StatItem = ({ value, suffix, label, sub }: typeof stats[number]) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="font-heading font-semibold text-lg mb-1">{label}</div>
      <div className="text-slate-muted text-sm">{sub}</div>
    </div>
  );
};

const WhySection = () => (
  <section className="py-20 md:py-24 bg-section-bg">
    <div className="max-w-[1280px] mx-auto px-6">
      <AnimatedSection className="text-center mb-14">
        <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-4">
          Why the World Needs Cell Cinema
        </h2>
        <p className="text-slate-body max-w-2xl mx-auto leading-relaxed">
          Traditional drug discovery examines dead cells, waits days for results, and misses 90% of what's actually happening. Our platform delivers:
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

const blogPosts = [
  { date: "March 15, 2026", title: "Precigenetics Launches Cell Cinema Platform at MBC BioLabs", excerpt: "Our real-time chemical imaging platform is now operational at MBC BioLabs in San Carlos, marking a new era in live-cell drug discovery." },
  { date: "February 28, 2026", title: "Why Real-Time Matters: Moving Beyond Endpoint Assays", excerpt: "Endpoint assays have been the gold standard — but they only tell you what happened, not how. Here's why real-time observation changes everything." },
  { date: "January 20, 2026", title: "FDA's Shift Away from Animal Testing: What It Means for Drug Discovery", excerpt: "With FDA no longer mandating animal studies, next-generation human-cell disease models are poised to transform preclinical research." },
];

const NewsSection = () => (
  <section className="py-20 md:py-24">
    <div className="max-w-[1280px] mx-auto px-6">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel>LATEST NEWS</SectionLabel>
        <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-4">
          News & Insights
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {blogPosts.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.1}>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full flex flex-col">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
                <Dna className="w-12 h-12 text-primary/20" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-slate-muted font-medium mb-2">{post.date}</span>
                <h3 className="font-heading font-semibold text-base mb-2 leading-snug">{post.title}</h3>
                <p className="text-slate-body text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <Link to="/blog" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="text-center">
        <Link to="/blog" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
          View All News <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

const Index = () => (
  <PageLayout title="Home" description="Precigenetics — Revolutionizing Drug Discovery with Real-time Chemical Imaging of Living Cells">
    <HeroSection />
    <CredibilityBar />
    <AboutSection />
    <ServicesSection />
    <PlatformSection />
    <WhySection />
    <CTABanner />
    <NewsSection />
  </PageLayout>
);

export default Index;
