import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";

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

// Duplicate to create the seamless infinite scroll effect
const scrollCards = [...capabilities, ...capabilities, ...capabilities];

const Platform = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate progress between 0 and 1 over the first 400px of scrolling
      let progress = window.scrollY / 400;
      if (progress > 1) progress = 1;
      if (progress < 0) progress = 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to set initial state correctly if already scrolled
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic styles based on scroll progress
  const frameWidth = 100 - (scrollProgress * 8); // 100vw down to 92vw
  const frameHeight = 100 - (scrollProgress * 25); // 100vh down to 75vh
  const frameRadius = scrollProgress * 20; // 0px up to 20px
  const frameMarginTop = scrollProgress * 30; // 0px up to 30px
  const frameMarginBottom = 80; // Constant

  return (
    <PageLayout title="Platform" description="The first platform for real-time chemical imaging.">
      
      {/* Wrapper forcing the white background and Inter font */}
      <div className="w-full bg-[#ffffff]" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* 1. Video Hero Frame (Animates on Scroll) */}
        <div 
          className="relative mx-auto overflow-hidden bg-[#f0f0f0] flex items-center justify-center shadow-sm"
          style={{
            width: `${frameWidth}%`,
            height: `${frameHeight}vh`,
            marginTop: `${frameMarginTop}px`,
            marginBottom: `${frameMarginBottom}px`,
            borderRadius: `${frameRadius}px`,
            transition: 'width 0.1s, height 0.1s, margin-top 0.1s, border-radius 0.1s', // Smooths out the React state updates slightly
            willChange: 'width, height, margin, border-radius'
          }}
        >
          {/* Replace this src with your actual uploaded image path in your public folder */}
          <img 
            src="/image_efae20.png" 
            alt="Living cells imaging" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
            // Fallback background color if image is missing
            style={{ backgroundColor: '#e5e7eb' }} 
          />
          
          {/* Internal overlay and text mimicking the uploaded design */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <h2 className="text-white text-2xl md:text-4xl font-medium tracking-tight">
              Mapping the real-time dynamics of living cells.
            </h2>
          </div>
        </div>

        {/* Text & Narrative Container */}
        <div className="max-w-[1000px] mx-auto px-6">
          
          {/* 2. Hero Typography */}
          <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight leading-[1.15] mb-[80px] text-[#000000]">
            Drug discovery today relies on <span className="text-[#9EA3AC]">dead cells and delayed readouts.</span> By the time you see what happened, the biology has already moved on. We built a platform that watches the chemistry unfold live.
          </h1>

          {/* 3. Shortened Narrative */}
          <div className="max-w-[800px] mb-[120px] text-[#1a1a1a] text-[18px] md:text-[20px] leading-[1.6] space-y-[35px]">
            <p>
              Traditional drug discovery relies on snapshots. We often miss the dynamic nature of living systems because critical signaling and toxicity events happen in real time. By the time we look at the data the biology has already moved on.
            </p>
            <p>
              This platform enables continuous observation. Instead of one snapshot we follow biological processes as they evolve. This gives researchers a complete and physiologically relevant understanding of how a drug actually behaves in a living cell.
            </p>
            <p>
              Many disease mechanisms are transient and invisible to static assays. Continuous monitoring reveals functional targets directly linked to disease progression. It allows us to see exactly how a compound works by observing pathway activation and cellular adaptation as it happens.
            </p>
            <p>
              Safety assessment also benefits from this real time perspective. We can identify early stress indicators before significant damage occurs. This leads to better candidate selection and a much lower risk of late stage failure in the clinic.
            </p>
            <p>
              By using living human cell systems in real time we improve efficacy and safety predictions. This shift toward more meaningful research models ensures that what we see in the lab translates reliably to actual patients.
            </p>
          </div>
        </div>

        {/* 4. Horizontal Gallery (Continuous Scroll with Tall Cards) */}
        <div className="pb-[100px] overflow-hidden w-full relative">
          
          <style>
            {`
              @keyframes continuous-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-33.33333%)); }
              }
              .animate-continuous {
                display: flex;
                width: max-content;
                animation: continuous-scroll 45s linear infinite;
              }
              .animate-continuous:hover {
                animation-play-state: paused;
              }
            `}
          </style>

          <div className="relative w-full flex overflow-x-hidden">
            <div className="animate-continuous flex gap-5 px-[4%]">
              {scrollCards.map((card, index) => (
                <div 
                  key={index} 
                  // Size logic: ~28vw ensures ~3.5 cards fit on a wide screen, satisfying the "half-cut" requirement
                  className="w-[80vw] md:w-[35vw] lg:w-[28vw] h-[600px] flex-shrink-0 bg-[#f8f8f8] border border-[#eeeeee] rounded-[20px] p-8 md:p-10 flex flex-col justify-between hover:border-primary/30 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-semibold text-[#000000] mb-6 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[#1a1a1a] text-[16px] leading-[1.6]">
                      {card.desc}
                    </p>
                  </div>
                  
                  {/* Small decorative interaction prompt at the bottom of the card */}
                  <div className="text-primary font-medium text-sm flex items-center opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
                    Learn more <span className="ml-2">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient masks to smooth the edges of the scrolling cards */}
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

      </div>
    </PageLayout>
  );
};

export default Platform;
