import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const capabilitiesData = [
  {
    title: "Real-Time Chemical Imaging",
    description:
      "Continuous molecular measurement of living cells at sub-cellular resolution, capturing chemical dynamics as they happen rather than reconstructing them after the fact.",
    imagePlaceholder: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop", 
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 md:w-32 md:h-32 text-primary drop-shadow-sm">
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    ),
  },
  {
    title: "Label-Free & Non-Destructive",
    description:
      "Our optical platform interrogates native molecular bonds directly, eliminating probe-induced perturbation. The cell you measure is the cell that's actually there.",
    // Exact URL embedded as requested
    imagePlaceholder: "https://i.pinimg.com/736x/dd/dc/2c/dddc2c2e530d64ab6faa187c52a8ce3a.jpg",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 md:w-32 md:h-32 text-primary drop-shadow-sm">
        <path d="m15 2-3.11 3.11a14.9 14.9 0 0 0-4.65 10.33V22h-1v-6.5a13.9 13.9 0 0 1 4.31-9.59L13.75 2.75l1.25-.75Z" />
        <path d="m9 22 3.11-3.11a14.9 14.9 0 0 0 4.65-10.33V2h1v6.5a13.9 13.9 0 0 1-4.31 9.59L10.25 21.25l-1.25.75Z" />
        <path d="m6 18 12-12" />
        <path d="m10.5 21.5 3-3" />
        <path d="m13.5 2.5-3 3" />
      </svg>
    ),
  },
  {
    title: "Single-Cell Resolution",
    description:
      "Population averages hide the biology that matters. We extract high-dimensional chemical signatures from individual cells, resolving the heterogeneity that drives drug resistance.",
    imagePlaceholder: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 md:w-32 md:h-32 text-primary drop-shadow-sm">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5A3 3 0 0 0 14 6" />
        <path d="M6.401 6.5A3 3 0 0 1 10 6" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <PageLayout title="Capabilities" description="Explore the capabilities of the Precigenetics platform.">
      
      {/* Wrapper to enforce the Inter font and pure white background */}
      <div className="w-full bg-[#ffffff] pb-32" style={{ fontFamily: "'Inter', sans-serif" }}>
        
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
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-slate-900 mb-5 tracking-tight leading-[1.2]">
                      {capability.title}
                    </h2>
                    
                    <p className="text-[17px] md:text-[18px] leading-[1.7] text-slate-600">
                      {capability.description}
                    </p>
                  </div>

                  {/* Media Frame (Wide rectangular aspect ratio, grey background, no shadow) */}
                  <div className="flex-1 w-full">
                    <div className="relative w-full aspect-[16/9] md:aspect-[3/2] rounded-[16px] overflow-hidden bg-[#f4f4f5] group flex items-center justify-center border border-[#e5e7eb]">
                      
                      {/* Image Background (Blends perfectly with the grey frame) */}
                      <img 
                        src={capability.imagePlaceholder} 
                        alt={capability.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Center Custom SVG */}
                      <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                        {capability.svg}
                      </div>

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
