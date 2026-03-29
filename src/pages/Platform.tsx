import { Activity, Eye, Grid3X3, Target, FlaskConical, Shield, Microscope } from "lucide-react";
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

const deepDive = [
  {
    icon: Target,
    title: "Smarter Target Identification",
    body: "Many disease mechanisms are driven by transient or context-dependent cellular behaviors that do not appear in static assays. Continuous monitoring makes it possible to observe how cells respond over time, revealing functional targets that are directly linked to disease progression rather than inferred from endpoint measurements.",
  },
  {
    icon: FlaskConical,
    title: "Deeper Mechanistic Insight",
    body: "Rather than confirming activity through a single outcome, the platform enables detailed observation of molecular and cellular responses throughout the course of treatment. This provides clarity on mechanism of action, including pathway activation, feedback effects, and cellular adaptation — supporting more informed decision-making during lead optimization.",
  },
  {
    icon: Shield,
    title: "Earlier Safety Signals",
    body: "Traditional toxicity screening often identifies adverse effects only after significant damage has occurred. By monitoring cellular health continuously, early indicators of stress, metabolic disruption, or functional decline can be detected much sooner. This allows for earlier intervention, better candidate selection, and a lower risk of late-stage failure.",
  },
  {
    icon: Microscope,
    title: "Human-Relevant Disease Models",
    body: "Conventional models, particularly those that rely heavily on non-human systems, do not always translate reliably to clinical outcomes. By working with living human-cell systems and observing them in real time, the platform provides a more relevant representation of human biology — improving both efficacy prediction and safety evaluation.",
  },
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

    {/* The Shift — Intro Narrative */}
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel>THE CHALLENGE</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-6">From Snapshots to Continuous Observation</h2>
          <div className="space-y-5 text-slate-body leading-relaxed">
            <p>
              Drug discovery has traditionally relied on endpoint assays — cells are fixed, stained, and analyzed after the biology has already taken place. While this approach has supported decades of research, it inherently misses the dynamic nature of living systems.
            </p>
            <p>
              Critical processes such as signaling cascades, adaptive responses, and early toxicity events occur in real time and are often lost when measured retrospectively.
            </p>
            <p>
              This platform is designed to address that limitation by enabling continuous observation of living cells. Instead of capturing a single snapshot, it allows researchers to follow biological processes as they evolve, providing a more complete and physiologically relevant understanding of drug response.
            </p>
            <p>
              By preserving the temporal dimension of biology, it becomes possible to detect subtle but meaningful changes that are otherwise overlooked.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 md:py-24 bg-section-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight">How Cell Cinema Works</h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="flex gap-6 relative pb-10">
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
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <SectionLabel>CAPABILITIES</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight">Platform Capabilities</h2>
        </AnimatedSection>

        <div className="space-y-12">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.1}>
              <div className={`grid md:grid-cols-2 gap-8 items-center`}>
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

    {/* Deep Dive — Application Areas */}
    <section className="py-20 md:py-24 bg-section-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <SectionLabel>APPLICATION AREAS</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-4">Mechanism-Driven Drug Discovery</h2>
          <p className="text-slate-body text-lg max-w-2xl mx-auto leading-relaxed">
            The platform enables a transition from static, endpoint-based analysis to a continuous, mechanism-driven understanding of biology.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {deepDive.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-body text-sm leading-relaxed">{item.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Summary */}
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-6">The Complete Picture</h2>
          <p className="text-slate-body text-lg leading-relaxed">
            Overall, the platform supports more accurate target identification, deeper insight into drug behavior, earlier detection of risk, and more reliable translation from preclinical research to clinical development.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <CTABanner />
  </PageLayout>
);

export default Platform;
