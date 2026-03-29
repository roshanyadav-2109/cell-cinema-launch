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
      
      {/* Wrapper with overflow-clip to prevent any unwanted scrollbars from the absolute background */}
      <div className="relative w-full overflow-clip">
        
        {/* Animated Top Right Graphic: Pure CSS DNA Diagonal */}
        <div className="absolute top-0 right-0 w-full max-w-[600px] h-[450px] overflow-hidden -z-10 pointer-events-none rounded-bl-[100px]">
          {/* Soft radial glow to ground the animation */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT/0.08)_0%,transparent_70%)]"></div>
          
          <style>
            {`
              .dna-container {
                position: absolute;
                top: -20px;
                right: 80px;
                transform: rotate(45deg) scale(1); /* Scaled down slightly to prevent overflow */
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

              /* Hide scrollbar for the secondary nav tabs to avoid the horizontal slider */
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
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className="strand" 
                style={{ "--s": i } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Main Content Container - Adjusted pt (padding-top) and mt (margin-top) to move it higher */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20 pt-16 relative">
          
          {/* Header */}
          <header>
            <h1 className="text-[36px] md:text-[52px] font-bold mt-4 md:mt-8 mb-[30px] md:mb-[40px] max-w-[800px] leading-[1.1] text-foreground">
              Welcome to the Precigenetics Newsroom
            </h1>
          </header>

          {/* Secondary Nav Tabs (Added hide-scrollbar class) */}
          <div className="flex gap-8 py-5 border-b-2 border-slate-200 mb-10 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <button className="text-primary font-bold text-lg pb-4 border-b-4 border-primary -mb-[22px]">News & Insights</button>
            <button className="text-foreground font-medium text-lg pb-4 transition-colors hover:text-primary">Press Releases</button>
            <button className="text-foreground font-medium text-lg pb-4 transition-colors hover:text-primary">Publications</button>
          </div>

          {/* Section Intro */}
          <div className="text-slate-500 text-sm mb-2.5 font-medium">News & Insights</div>
          <div className="text-2xl font-medium mb-10 text-foreground">All Precigenetics updates, research, and company news</div>

          {/* Action Bar: Search & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8 md:gap-10">
            
            {/* Custom Search Field */}
            <div className="flex-1 flex items-center border-b border-slate-300 pb-2.5 w-full transition-colors focus-within:border-primary">
              <input
                type="text"
                placeholder="Search for News & Insights"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-none outline-none text-[20px] md:text-[22px] w-full text-foreground placeholder:text-slate-400 bg-transparent"
              />
              <button className="w-9 h-9 border border-slate-400 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-4 w-full md:w-auto relative z-20">
              <span className="text-primary font-semibold text-sm hidden md:block whitespace-nowrap">Filter Options</span>
              
              {/* Archive Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                  className="px-5 py-2.5 border border-slate-400 hover:border-primary transition-colors rounded-full bg-background font-semibold text-base flex items-center gap-3 min-w-[150px] justify-between"
                >
                  Archive Date <ChevronDown className="w-5 h-5" />
                </button>
                
                {isYearDropdownOpen && (
                  <div className="absolute top-full right-0 md:left-0 mt-2 bg-card border border-border rounded-2xl shadow-lg min-w-[200px] p-5">
                    <span className="text-slate-500 text-sm block mb-4 font-medium">Year</span>
                    {["2026", "2025", "2024", "2023"].map((year) => (
                      <label key={year} className="flex items-center mb-3 cursor-pointer text-lg text-foreground hover:text-primary transition-colors">
                        <input type="checkbox" className="hidden peer" />
                        <div className="w-[22px] h-[22px] border border-slate-400 rounded-md mr-4 relative peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                          <div className="hidden peer-checked:block w-1.5 h-2.5 border-b-2 border-r-2 border-primary-foreground transform rotate-45 -mt-0.5"></div>
                        </div>
                        {year}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* View Select */}
              <select className="px-5 py-2.5 border border-slate-400 hover:border-primary transition-colors rounded-full bg-background font-semibold text-base appearance-none pr-10 cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-12px)_center] bg-[length:16px]">
                <option>View 10</option>
                <option>View 25</option>
                <option>View All</option>
              </select>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="font-bold text-lg mb-4 text-foreground relative z-10">Categories</div>
          <div className="flex flex-wrap gap-3 mb-12 relative z-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 border rounded-lg text-sm font-semibold transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-primary/5 text-primary border-primary hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <hr className="border-t border-slate-200 mb-10 relative z-10" />

          {/* News Items List */}
          <div className="flex flex-col relative z-10">
            {filtered.length > 0 ? (
              filtered.map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 0.1}>
                  <article className="flex flex-col md:flex-row gap-2 md:gap-[60px] mb-10 group">
                    <div className="text-slate-500 text-base md:min-w-[100px] md:pt-1 font-medium">
                      {post.date}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-[24px] text-primary font-medium mb-3.5 leading-[1.3] group-hover:underline cursor-pointer decoration-2 underline-offset-4">
                        {post.title}
                      </h2>
                      <div className="flex flex-wrap gap-2.5 mt-1">
                        {post.tags.map((tag) => (
                          <span key={tag} className="border border-primary bg-primary/5 text-primary px-[14px] py-[5px] rounded-md text-xs font-semibold tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500 font-medium text-lg">
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
