import { Play } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const Platform = () => {
  return (
    <PageLayout title="Platform" description="The first platform for real-time chemical imaging.">
      {/* Main wrapper with Inter font enforced */}
      <div className="relative w-full overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Subtle background radial glow at the top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,theme(colors.primary.DEFAULT/0.05)_0%,transparent_70%)] -z-10 pointer-events-none"></div>
        
        {/* Main Content Container */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-24 relative z-10 text-center">
          
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
            
            {/* Subheading */}
            <p className="text-[18px] md:text-[22px] text-slate-500 font-medium mb-14 md:mb-20 max-w-[800px] mx-auto leading-relaxed">
              We are moving drug discovery beyond endpoint assays with the ability to observe, measure, and analyze live human cells continuously.
            </p>
          </AnimatedSection>

          {/* Video/Image Container */}
          <AnimatedSection delay={0.2}>
            <div className="relative w-full max-w-[1100px] mx-auto aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/7] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-primary/10 border border-slate-200/60 group cursor-pointer bg-slate-950">
              
              {/* Mock Image Background (Simulating the blue cellular imaging) */}
              <div className="absolute inset-0">
                {/* Base blue/purple glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0%,transparent_70%)]"></div>
                {/* Scientific placeholder texture */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-105"></div>
                {/* Vignette for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.8)_100%)]"></div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                  {/* Note: The ml-2 is to optically center the Play triangle inside the circle */}
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2 transition-transform duration-300" />
                </div>
              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </PageLayout>
  );
};

export default Platform;
