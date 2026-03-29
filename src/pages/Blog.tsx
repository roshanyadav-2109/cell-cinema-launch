import { useState } from "react";
import { Link } from "react-router-dom";
import { Dna, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "Company News", "Research", "Industry"];

const posts = [
  {
    date: "March 15, 2026",
    category: "Company News",
    title: "Precigenetics Launches Cell Cinema Platform at MBC BioLabs",
    excerpt: "Our real-time chemical imaging platform is now operational at MBC BioLabs in San Carlos, marking a new era in live-cell drug discovery.",
  },
  {
    date: "February 28, 2026",
    category: "Research",
    title: "Why Real-Time Matters: Moving Beyond Endpoint Assays",
    excerpt: "Endpoint assays have been the gold standard — but they only tell you what happened, not how. Here's why real-time observation changes everything.",
  },
  {
    date: "January 20, 2026",
    category: "Industry",
    title: "FDA's Shift Away from Animal Testing: What It Means for Drug Discovery",
    excerpt: "With FDA no longer mandating animal studies, next-generation human-cell disease models are poised to transform preclinical research.",
  },
];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <PageLayout title="News & Insights" description="The latest from Precigenetics — research updates, industry perspectives, and company news.">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-accent">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-5">News & Insights</h1>
          <p className="text-slate-body text-lg max-w-2xl mx-auto leading-relaxed">
            The latest from Precigenetics — research updates, industry perspectives, and company news.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 0.1}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full flex flex-col">
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
                      <Dna className="w-12 h-12 text-primary/20" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-slate-muted font-medium">{post.date}</span>
                        <span className="bg-accent text-accent-foreground text-xs font-medium px-2.5 py-0.5 rounded-full">{post.category}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-base mb-2 leading-snug">{post.title}</h3>
                      <p className="text-slate-body text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-muted mb-4">No articles found matching your search criteria.</p>
              <button onClick={() => setFilter("All")} className="text-primary font-medium hover:underline">
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
