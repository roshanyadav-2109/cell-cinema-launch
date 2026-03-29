import { Microscope, Dna, ScanSearch, Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const capabilitiesData = [
  {
    title: "Real-Time Chemical Imaging",
    description:
      "Continuous molecular measurement of living cells at sub-cellular resolution, capturing chemical dynamics as they happen rather than reconstructing them after the fact.",
    icon: Microscope,
    imagePlaceholder: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop", 
    isVideo: true,
  },
  {
    title: "Label-Free & Non-Destructive",
    description:
      "Our optical platform interrogates native molecular bonds directly, eliminating probe-induced perturbation. The cell you measure is the cell that's actually there.",
    icon: Dna,
    imagePlaceholder: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop",
    isVideo: false,
  },
  {
    title: "Single-Cell Resolution",
    description:
      "Population averages hide the biology that matters. We extract high-dimensional chemical signatures from individual cells, resolving the heterogeneity that drives drug resistance.",
    icon: ScanSearch,
    imagePlaceholder: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop",
    isVideo: true,
  },
];

const Services = () => {
  return (
    <PageLayout title="Capabilities" description="Explore the capabilities of the Precigenetics platform.">
      
      {/* Wrapper to enforce the Inter font and background */}
      <div className="w-full bg-[#f8fafc] pb-32" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* 1. Header Section */}
        <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 text-center max-w-[1000px] mx-auto">
          <AnimatedSection>
            <h1 className="text-[36px] md:text-[52px] font-semibold text-slate-900 mb-8 tracking-tight">
              Our Capabilities
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-slate-600 font-medium max-w-[850px] mx-auto">
              Precigenetics has built a proprietary optical measurement platform that generates 
              chemically resolved, temporally continuous, single-cell data from living systems — 
              without labels, without destruction, and at throughput scales relevant to drug discovery.
            </p>
          </AnimatedSection>
        </div>

        {/* 2. Alternating Capabilities Section */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-32">
          {capabilitiesData.map((capability, index) => {
            const isEven = index % 2 === 0;
            const Icon = capability.icon;

            return (
              <AnimatedSection key={index} delay={0.1}>
                <div 
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 ${
                    // Alternates the layout: Image Right (even), Image Left (odd)
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* Text Block */}
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8 mx-auto md:mx-0`}>
                      <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                    </div>
                    
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-slate-900 mb-5 tracking-tight leading-[1.2]">
                      {capability.title}
                    </h2>
                    
                    <p className="text-[17px] md:text-[18px] leading-[1.7] text-slate-600">
                      {capability.description}
                    </p>
                  </div>

                  {/* Media Frame (Video/Image) */}
                  <div className="flex-1 w-full">
                    <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-200 bg-slate-900 group cursor-pointer">
                      
                      {/* Placeholder Image */}
                      <img 
                        src={capability.imagePlaceholder} 
                        alt={capability.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Subtle Vignette for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                      {/* Video Play Button Overlay (renders conditionally) */}
                      {capability.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                            <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1.5 transition-transform duration-300" />
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </PageLayout>
  );
};

export default Services;
