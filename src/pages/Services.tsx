import { Target, Activity, Shield, Dna } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: Target,
    title: "Target Discovery",
    body: "Most disease biology remains undetectable with existing tools. Precigenetics' Cell Cinema platform reveals therapeutic targets that conventional endpoint assays miss entirely. By observing live chemical changes in real time, researchers can identify novel targets with unprecedented confidence — accelerating the earliest and most critical stage of the drug discovery pipeline.",
  },
  {
    icon: Activity,
    title: "Mechanism of Action",
    body: "Understanding how a drug works is just as important as knowing that it works. Our platform goes beyond confirming efficacy — by observing molecular cascades live, we demonstrate the precise mechanism of action and identify opportunities to enhance therapeutic performance. This real-time view eliminates guesswork and provides publication-ready mechanistic data.",
  },
  {
    icon: Shield,
    title: "Toxicity Screening",
    body: "Late-stage toxicity failures are among the most costly events in drug development. Precigenetics identifies harmful chemical signals within hours rather than months, enabling researchers to screen out toxic candidates early. Our non-destructive, label-free approach means cells remain alive throughout testing — delivering more physiologically relevant toxicity data than any conventional assay.",
  },
  {
    icon: Dna,
    title: "Next-Generation Disease Models",
    body: "The FDA Modernization Act 2.0 no longer mandates animal testing for drug approval. Precigenetics is at the forefront of this shift, creating living human-cell disease models with real-time chemical readout. These models provide superior human-relevant data, reduce reliance on animal studies, and accelerate the path from bench to bedside.",
  },
];

const Services = () => (
  <PageLayout title="Services" description="Explore Precigenetics' drug discovery services — from target identification to toxicity screening.">
    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute rounded-full border border-primary" style={{ width: `${300 + i * 150}px`, height: `${300 + i * 150}px`, top: "50%", left: "60%", transform: "translate(-50%, -50%)" }} />
        ))}
      </div>
      <div className="relative max-w-[1280px] mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-5">Our Services</h1>
        <p className="text-slate-body text-lg max-w-2xl mx-auto leading-relaxed">
          Accelerating drug discovery across every stage of the pipeline.
        </p>
      </div>
    </section>

    {/* Service Details */}
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 space-y-20">
        {services.map((service, i) => (
          <AnimatedSection key={service.title}>
            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "" : ""}`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl mb-5">{service.title}</h2>
                <p className="text-slate-body leading-relaxed">{service.body}</p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-primary/20" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <CTABanner />
  </PageLayout>
);

export default Services;
