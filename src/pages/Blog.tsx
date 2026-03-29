import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "Company News", "Research", "Industry", "Platform"];

const posts = [
  {
    date: "03.15.2026",
    category: "Company News",
    title: "Precigenetics Launches Cell Cinema Platform at MBC BioLabs",
    tags: ["Company News", "Platform"],
  },
  {
    date: "02.28.2026",
    category: "Research",
    title: "Why Real-Time Matters: Moving Beyond Endpoint Assays",
    tags: ["Research", "Scientific"],
  },
  {
    date: "01.20.2026",
    category: "Industry",
    title: "FDA's Shift Away from Animal Testing: What It Means for Drug Discovery",
    tags: ["Industry", "Regulatory"],
  },
];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  // Filter logic combining Search + Category
  const filtered = posts.filter((p) => {
    const matchesCat = filter === "All" || p.tags.includes(filter) || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <PageLayout title="Newsroom" description="The latest from Precigenetics — research updates, industry perspectives, and company news.">
      
      {/* Wrapper with overflow-clip and the exact font applied */}
      <div className="relative w-full overflow-clip" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Animated Top Right Graphic: Restrict height to first line and remove corner radius */}
        <div className="absolute top-0 right-0 w-full max-w-[550px] h-[180px] md:h-[220px] overflow-hidden -z-10 pointer-events-none">
          {/* Deep Purple/Violet radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(75,0,130,0.35)_0%,transparent_70%)]"></div>
          
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

              .dna-container {
                position: absolute;
                top: -10px;
                right: 70px;
                transform: rotate(45deg) scale(0.75); 
                display: flex;
                flex-direction: column;
                align-items: center;
                opacity: 0.25; 
                
                --strand-color: theme('colors.primary.DEFAULT');
                --strand-width: 6rem;
                --strand-height: 1.25rem;
                --strand-line: 0.15rem;
                --strand-ball: calc(var(--strand-height) * 0.75);
                --animation-duration: 1.2s;
                --animation-delay: calc(var(--animation-duration) * -0.375);
              }

              .strand {
                position: relative;
                width: var(--strand-width);
                height: var(--strand-height);
              }

              .strand::before,
              .strand::after {
                content: '';
                position: absolute;
                background: var(--strand-color);
                animation-duration: var(--animation-duration);
                animation-iteration-count: infinite;
                animation-timing-function: ease-in-out;
                animation-direction: alternate;
                animation-delay: calc(var(--s) * var(--animation-delay));
              }

              .strand::before {
                left: calc(var(--strand-ball) / 2);
                top: calc((var(--strand-height) - var(--strand-line)) / 2);
                width: calc(var(--strand-width) - var(--strand-ball));
                height: var(--strand-line);
                animation-name: line;
                will-change: transform;
              }

              .strand::after {
                top: calc((var(--strand-height) - var(--strand-ball)) / 2);
                width: var(--strand-ball);
                height: var(--strand-ball);
                border-radius: 50%;
                box-shadow: calc(var(--strand-width) - var(--strand-ball)) 0 0 var(--strand-color);
                animation-name: ball;
                will-change: transform, box-shadow;
              }

              @keyframes line {
                to { transform: scaleX(0); }
              }

              @keyframes ball {
                to {
                  transform: translateX(calc((var(--strand-width) - var(--strand-ball)) / 2));
                  box-shadow: 0 0 0 var(--strand-color);
                }
              }

              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}
          </style>

          {/* The DNA Elements */}
          <div className="dna-container">
            {Array.from({ length: 28 }).map((_, i) => (
              <div 
                key={i} 
                className="strand" 
                style={{ "--s": i } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 pb-20 pt-12 md:pt-16 relative">
          
          {/* Header */}
          <header>
            <h1 className="text-[36px] md:text-[46px] font-extrabold mt-2 md:mt-4 mb-[24px] md:mb-[32px] max-w-[800px] leading-[1.1] text-foreground tracking-tight">
              Welcome to the Precigenetics Newsroom
            </h1>
          </header>

          {/* Secondary Nav Tabs */}
          <div className="flex gap-6 md:gap-8 py-4 border-b border-slate-200 mb-6 md:mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <button className="text-primary font-medium text-base pb-3 border-b-[3px] border-primary -mb-[18px]">News & Insights</button>
            <button className="text-foreground font-medium text-base pb-3 transition-colors hover:text-primary">Press Releases</button>
            <button className="text-foreground font-medium text-base pb-3 transition-colors hover:text-primary">Publications</button>
          </div>

          {/* Section Intro */}
          <div className="text-[22px] font-bold mb-8 text-foreground tracking-tight leading-snug">All Precigenetics updates, research, and company news</div>

          {/* Action Bar: Search & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-5 md:gap-8">
            
            {/* Custom Search Field (Non-bold) */}
            <div className="flex-1 flex items-center border-b-[2px] border-slate-300 pb-2 w-full transition-colors focus-within:border-primary">
              <input
                type="text"
                placeholder="Search for News & Insights"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-none outline-none text-[18px] md:text-[20px] w-full text-foreground placeholder:text-slate-400 bg-transparent font-medium"
              />
              <button className="w-8 h-8 border-[2px] border-slate-400 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors flex-shrink-0">
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* Filter Controls (Stacked on mobile, row on desktop) */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto relative z-20">
              <span className="text-primary font-medium text-sm hidden md:block whitespace-nowrap">Filter Options</span>
              
              {/* Archive Dropdown */}
              <div className="relative w-full md:w-auto">
                <button 
                  onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                  className="px-4 py-2 w-full md:w-auto border-[2px] border-slate-400 hover:border-primary transition-colors rounded-full bg-background font-medium text-sm flex items-center gap-2 justify-between"
                >
                  Archive Date <ChevronDown className="w-4 h-4 stroke-[2]" />
                </button>
                
                {isYearDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-card border-[2px] border-border rounded-xl shadow-lg min-w-[180px] p-4 z-30">
                    <span className="text-slate-500 text-xs block mb-3 font-medium uppercase tracking-wider">Year</span>
                    {["2026", "2025", "2024", "2023"].map((year) => (
                      <label key={year} className="flex items-center mb-2.5 cursor-pointer text-base text-foreground hover:text-primary transition-colors font-medium">
                        <input type="checkbox" className="hidden peer" />
                        <div className="w-[18px] h-[18px] border-[2px] border-slate-400 rounded-md mr-3 relative peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                          <div className="hidden peer-checked:block w-1 h-2 border-b-[2px] border-r-[2px] border-primary-foreground transform rotate-45 -mt-0.5"></div>
                        </div>
                        {year}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* View Select */}
              <select className="px-4 py-2 w-full md:w-auto border-[2px] border-slate-400 hover:border-primary transition-colors rounded-full bg-background font-medium text-sm appearance-none pr-8 cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-10px)_center] bg-[length:14px]">
                <option>View 10</option>
                <option>View 25</option>
                <option>View All</option>
              </select>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="font-extrabold text-lg mb-3 text-foreground relative z-10 tracking-tight">Categories</div>
          <div className="flex flex-wrap gap-2.5 mb-10 relative z-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 border-[2px] rounded-lg text-xs font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-primary/5 text-primary border-primary hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <hr className="border-t-[2px] border-slate-200 mb-8 relative z-10" />

          {/* News Items List */}
          <div className="flex flex-col relative z-10">
            {filtered.length > 0 ? (
              filtered.map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 0.1}>
                  <article className="flex flex-col md:flex-row gap-2 md:gap-[40px] mb-8 group">
                    <div className="text-slate-500 text-[15px] md:min-w-[90px] md:pt-1 font-semibold tracking-tight">
                      {post.date}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[20px] md:text-[22px] text-primary font-semibold mb-3 leading-[1.3] group-hover:underline cursor-pointer decoration-2 underline-offset-4 tracking-tight">
                        {post.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {post.tags.map((tag) => (
                          <span key={tag} className="border-[2px] border-primary bg-primary/5 text-slate-900 dark:text-slate-100 px-3 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500 font-semibold text-base">
                No articles found matching your search criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
