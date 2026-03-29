import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const capabilities = [
  {
    title: "Target Identification",
    desc: "Many disease mechanisms are driven by transient or context dependent cellular behaviors that do not appear in static assays. Continuous monitoring reveals functional targets directly linked to disease progression.",
  },
  {
    title: "Mechanism of Action",
    desc: "Observe detailed molecular and cellular responses throughout treatment. Gain clarity on pathway activation, feedback effects, and cellular adaptation to support informed decision making.",
  },
  {
    title: "Safety Assessment",
    desc: "Monitor cellular health continuously to detect early indicators of stress, metabolic disruption, or functional decline much sooner. This allows for earlier intervention and better candidate selection.",
  },
  {
    title: "Disease Modeling",
    desc: "Work with living human cell systems in real time for a more relevant representation of human biology. Improve both efficacy prediction and safety evaluation with physiologically meaningful models.",
  },
];

// Duplicate the array to create the seamless infinite scroll effect
const scrollCards = [...capabilities, ...capabilities, ...capabilities];

const Platform = () => {
  return (
    <PageLayout title="Platform" description="The first platform for real-time chemical imaging.">
      
      {/* Main wrapper with Inter font enforced */}
      <div className="relative w-full overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Subtle background radial glow at the top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,theme(colors.primary.DEFAULT/0.05)_0%,transparent_70%)] -z-10 pointer-events-none"></div>
        
        {/* Header Section */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-16 relative z-10 text-center">
          <AnimatedSection>
            {/* Top Label */}
            <div className="inline-block mb-6">
              <span className="text-primary font-bold uppercase tracking-[0.15em] text-sm md:text-[13px]">
                Platform
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-[40px] md:text-[64px] font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] max-w-[900px] mx-auto">
              The first platform for real-time chemical imaging.
            </h1>
          </AnimatedSection>
        </div>

        {/* 3/4th Width Video Frame (No shadow, slight round corners) */}
        <div className="w-[85%] md:w-[75%] max-w-[1000px] mx-auto mb-20">
          <AnimatedSection delay={0.2}>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 flex items-center justify-center">
              {/* Simple stylized dark background for the frame */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,1)_0%,rgba(2,6,23,1)_100%)]"></div>
              {/* Play icon to indicate video placeholder */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/50">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Text Section */}
        <div className="max-w-[800px] mx-auto px-6 md:px-12 pb-24 text-[17px] md:text-[19px] leading-[1.8] text-slate-600 font-medium space-y-8">
          <AnimatedSection delay={0.3}>
            <p className="text-[20px] md:text-[24px] text-slate-800 font-semibold leading-relaxed mb-10 text-center">
              We are moving drug discovery beyond endpoint assays with the ability to observe, measure, and analyze live human cells continuously.
            </p>
            
            <p>
              Drug discovery traditionally relies on endpoint assays where cells are fixed stained and analyzed after the biology has already taken place. While this approach has supported decades of research it inherently misses the dynamic nature of living systems. Critical processes such as signaling cascades adaptive responses and early toxicity events occur in real time and are often lost when measured retrospectively.
            </p>
            
            <p>
              Our platform is designed to address that limitation by enabling continuous observation of living cells. Instead of capturing a single snapshot it allows researchers to follow biological processes as they evolve providing a more complete and physiologically relevant understanding of drug response. By preserving the temporal dimension of biology it becomes possible to detect subtle but meaningful changes that are otherwise overlooked.
            </p>

            <p>
              Understanding how a compound works is equally critical. Rather than confirming activity through a single outcome the platform enables detailed observation of molecular and cellular responses throughout the course of treatment. This provides clarity on mechanism of action including pathway activation feedback effects and cellular adaptation. Such insight supports more informed decision making during lead optimization and reduces uncertainty in downstream development.
            </p>

            <p>
              Safety assessment also benefits from this real time perspective. Traditional toxicity screening often identifies adverse effects only after significant damage has occurred. By monitoring cellular health continuously early indicators of stress metabolic disruption or functional decline can be detected much sooner. This allows for earlier intervention better candidate selection and a lower risk of late stage failure.
            </p>

            <p>
              The same principles extend to disease modeling. Conventional models particularly those that rely heavily on non human systems do not always translate reliably to clinical outcomes. By working with living human cell systems and observing them in real time the platform provides a more relevant representation of human biology. This improves both efficacy prediction and safety evaluation while supporting the broader shift toward more physiologically meaningful research models.
            </p>

            <p>
              Overall the platform enables a transition from static endpoint based analysis to a continuous mechanism driven understanding of biology. It supports more accurate target identification deeper insight into drug behavior earlier detection of risk and more reliable translation from preclinical research to clinical development.
            </p>
          </AnimatedSection>
        </div>

        {/* Infinite Scroll Tall Cards Section */}
        <div className="w-full pb-32 pt-10 bg-slate-50/50 overflow-hidden relative">
          
          {/* Section Title */}
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Platform Capabilities
            </h2>
          </div>

          <style>
            {`
              @keyframes infinite-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-33.33333%)); } /* Shifts exactly 1 set of the 3 arrays */
              }
              .animate-marquee {
                display: flex;
                width: max-content;
                animation: infinite-scroll 40s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
              
              /* Hide scrollbar */
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}
          </style>

          {/* Scrolling Track */}
          <div className="relative w-full flex overflow-x-hidden group">
            <div className="animate-marquee flex gap-6 px-6">
              {scrollCards.map((card, index) => (
                <div 
                  key={index} 
                  // Tall rectangle dimensions (Height > Width)
                  className="w-[280px] md:w-[340px] h-[400px] md:h-[480px] flex-shrink-0 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-sm"
                >
                  <div>
                    {/* Abstract visual indicator for the card */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                      <div className="w-4 h-4 bg-primary rounded-sm rotate-45"></div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed text-[15px] md:text-[16px]">
                      {card.desc}
                    </p>
                  </div>
                  
                  {/* Bottom anchor/link indicator */}
                  <div className="flex items-center text-primary font-bold text-sm tracking-wide group-hover/card:translate-x-1 transition-transform cursor-pointer">
                    Explore <span className="ml-2">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Subtle gradient overlays to fade the edges of the scrolling area */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-50/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-50/50 to-transparent pointer-events-none z-10"></div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Platform;
