import { Activity, Eye, Grid3X3 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import CTABanner from "@/components/CTABanner";

const steps = [
  { num: "01", title: "Load Living Cells", body: "Prepare and load living human cells into our imaging platform. No fixation, no staining, no labels required." },
  { num: "02", title: "Optical Interrogation", body: "Our advanced optical system interrogates native molecular bonds directly, capturing chemical signatures at sub-cellular resolution." },
  { num: "03", title: "Real-Time Chemical Movies", body: "Watch continuous molecular measurements unfold in real time — a chemical movie of biology in action." },
  { num: "04", title: "AI-Powered Analysis", body: "High-dimensional data from individual cells is analyzed to reveal patterns, targets, and mechanisms invisible to conventional tools." },
];

const capabilities = [
  { icon: Activity, title: "Real-Time Chemical Imaging", body: "Continuous molecular measurement of living cells at sub-cellular resolution. Watch chemistry unfold as it happens, not after the fact. Our platform captures the full temporal dimension of cellular biology, enabling researchers to observe dynamic processes that conventional endpoint assays completely miss." },
  { icon: Eye, title: "Label-Free & Non-Destructive", body: "Our optical platform interrogates native molecular bonds directly. No dyes, no tags, no interference — observe biology in its natural state. By eliminating labels, we remove artifacts and perturbations that can distort results, providing a truer picture of cellular chemistry." },
  { icon: Grid3X3, title: "Single-Cell Resolution", body: "Population averages obscure significant biology. We extract high-dimensional signatures from individual cells, revealing the heterogeneity that drives drug resistance and disease progression. This granularity transforms how researchers understand cellular response to therapeutic intervention." },
];

const Platform = () => (
  <PageLayout title="Platform" description="Discover the Cell Cinema platform — real-time chemical movies of living cells for drug discovery.">
    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute rounded-full border border-primary" style={{ width: `${300 + i * 150}px`, height: `${300 + i * 150}px`, top: "50%", left: "30%", transform: "translate(-50%, -50%)" }} />
        ))}
      </div>
      <div className="relative max-w-[1280px] mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-5">The Cell Cinema Platform</h1>
        <p className="text-slate-body text-lg max-w-2xl mx-auto leading-relaxed">
          Real-time chemical movies of living cells. See biology like never before.
        </p>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight">How Cell Cinema Works</h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="flex gap-6 relative pb-10">
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 w-px h-full bg-border" />
                )}
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-slate-body text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-20 md:py-24 bg-section-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <SectionLabel>CAPABILITIES</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight">Platform Capabilities</h2>
        </AnimatedSection>

        <div className="space-y-12">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.1}>
              <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5">
                    <cap.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl mb-4">{cap.title}</h3>
                  <p className="text-slate-body leading-relaxed">{cap.body}</p>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <cap.icon className="w-20 h-20 text-primary/20" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </PageLayout>
);

export default Platform;
