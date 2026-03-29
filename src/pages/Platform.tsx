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
  return (
    <PageLayout title="Platform" description="The first platform for real-time chemical imaging.">
      
      {/* Wrapper forcing the white background and Inter font */}
      <div className="w-full bg-[#ffffff]" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* 1. Hero Tagline Section (Takes up top ~25-30% of the screen) */}
        <div className="w-full min-h-[30vh] md:min-h-[35vh] flex flex-col items-center justify-center px-6 pt-28 pb-10 text-center relative z-10">
          <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-extrabold tracking-tight leading-[1.1] text-slate-900 max-w-[1100px] mb-8 drop-shadow-sm">
            You can't fix what you can't see happening. <br className="hidden md:block" />
            <span className="text-primary">We see unseen biology.</span>
          </h1>
          
          {/* Subline with Logo */}
          <div className="flex items-center justify-center gap-3 text-slate-500 font-medium text-sm md:text-lg tracking-wide">
            <span>* Incubated at</span>
            <img 
              src="https://mbcbiolabs.com/wp-content/uploads/2023/03/MBC-BioLabs-logo.svg" 
              alt="MBC BioLabs" 
              className="h-6 md:h-8" 
            />
          </div>
        </div>

        {/* 2. Video Frame (Full width, rounded top, flat bottom) */}
        <div className="w-full h-[60vh] md:h-[75vh] relative z-10">
          <div className="w-full h-full overflow-hidden bg-[#000000] relative rounded-t-[40px] md:rounded-t-[80px] rounded-b-none shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            {/* YouTube Embed: Muted, Autoplay, No Controls, and pointer-events-none to disable hover overlays */}
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-none select-none scale-105" // scale-105 hides faint YouTube iframe borders
              src="https://www.youtube.com/embed/b0aYlwBE7nk?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=b0aYlwBE7nk&controls=0&disablekb=1"
              title="Cell Cinema Platform Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              tabIndex={-1}
              style={{ border: 'none' }}
            ></iframe>
            
            {/* Internal overlay and text mimicking the uploaded design */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-10 left-8 md:bottom-16 md:left-16 pointer-events-none">
              <h2 className="text-white text-3xl md:text-5xl font-medium tracking-tight drop-shadow-md">
                Mapping the real-time dynamics of living cells.
              </h2>
            </div>
          </div>
        </div>

        {/* Text & Narrative Container */}
        <div className="max-w-[1000px] mx-auto px-6 pt-16 md:pt-[100px]">
          
          {/* 3. Hero Typography */}
          <h2 className="text-[32px] md:text-[46px] font-medium tracking-tight leading-[1.15] mb-[80px] text-[#000000]">
            Drug discovery today relies on <span className="text-[#9EA3AC]">dead cells and delayed readouts.</span> By the time you see what happened, the biology has already moved on. We built a platform that watches the chemistry unfold live.
          </h2>

          {/* 4. Shortened Narrative */}
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

        {/* 5. Horizontal Gallery (Continuous Scroll with Tall Cards) */}
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
                  className="w-[80vw] md:w-[35vw] lg:w-[28vw] h-[600px] flex-shrink-0 bg-[#f8f8f8] border border-[#eeeeee] rounded-[20px] p-8 md:p-10 flex flex-col justify-start hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-2xl font-semibold text-[#000000] mb-6 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#1a1a1a] text-[16px] leading-[1.6]">
                    {card.desc}
                  </p>
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
