import { Skull, Clock, EyeOff, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";

const problems = [
  { icon: Skull, title: "Dead Cells, Dead Ends", body: "Traditional assays kill cells to analyze them. You're studying the crime scene, not witnessing the crime." },
  { icon: Clock, title: "Delayed Results", body: "Endpoint assays take days or weeks. By the time results arrive, critical decisions are already outdated." },
  { icon: EyeOff, title: "Invisible Biology", body: "90% of disease-relevant chemistry is undetectable with current tools. You can't target what you can't see." },
];

const About = () => (
  <PageLayout title="About" description="Learn about Precigenetics' mission to transform drug discovery with real-time chemical imaging.">
    {/* Hero */}
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute rounded-full border border-primary" style={{ width: `${300 + i * 150}px`, height: `${300 + i * 150}px`, top: "50%", left: "70%", transform: "translate(-50%, -50%)" }} />
        ))}
      </div>
      <div className="relative max-w-[1280px] mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-5">About Precigenetics</h1>
        <p className="text-slate-body text-lg max-w-2xl mx-auto leading-relaxed">
          We're building the microscope of the future — one that watches biology happen in real time.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-12">
        <AnimatedSection>
          <SectionLabel>OUR MISSION</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-5">See What Was Never Seen Before</h2>
          <p className="text-slate-body leading-relaxed">
            Precigenetics exists to transform how the world discovers medicine. By making the invisible chemistry of living cells visible in real time, we give scientists the power to find cures faster, safer, and with greater precision than ever before.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <SectionLabel>OUR VISION</SectionLabel>
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-5">A World Where No Biology Goes Unseen</h2>
          <p className="text-slate-body leading-relaxed">
            We envision a future where every drug discovery program starts with a living, real-time view of human cell biology — replacing outdated animal models and endpoint assays with continuous chemical intelligence.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Problem */}
    <section className="py-20 md:py-24 bg-section-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-4">The Problem With Drug Discovery Today</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border h-full">
                <p.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-heading font-semibold text-xl mb-3">{p.title}</h3>
                <p className="text-slate-body text-sm leading-relaxed">{p.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Our Approach */}
    <section className="py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-[40px] leading-tight mb-6">Our Approach: From Forensics to Film</h2>
          <p className="text-slate-body leading-relaxed text-lg">
            Precigenetics' Cell Cinema platform uses advanced optical technology to observe native molecular bonds in living cells — no labels, no dyes, no destruction. We turn static snapshots into continuous chemical movies, giving researchers an unprecedented window into biology as it actually happens.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Location */}
    <section className="py-20 md:py-24 bg-section-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-heading font-semibold text-2xl mb-4">Where We Work</h3>
          <p className="text-slate-body leading-relaxed">
            Precigenetics is incubated at MBC BioLabs in San Carlos, California — a premier shared laboratory space supporting innovative life science startups in the San Francisco Bay Area.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </PageLayout>
);

export default About;
