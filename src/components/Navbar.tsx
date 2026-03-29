import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Platform", path: "/platform" },
  { label: "Capabilities", path: "/services" },
  { label: "News", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isPlatform = location.pathname === "/platform";

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // If Platform: absolute positioning so it sits at the top and scrolls away naturally.
  // If Other pages: sticky positioning so it stays attached to the top of the screen.
  const headerClass = isPlatform
    ? "absolute top-0 left-0 w-full z-50 bg-transparent"
    : "sticky top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50";

  return (
    <header className={headerClass}>
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
              <line x1="12" y1="6.5" x2="12" y2="9" />
              <line x1="12" y1="15" x2="12" y2="17.5" />
            </svg>
          </div>
          <span className="font-sans font-bold text-xl text-primary">
            Precigenetics
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium font-sans rounded-md transition-colors hover:text-primary ${
                isPlatform ? "text-slate-900" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild className="rounded-lg font-semibold shadow-none">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 ${isPlatform ? "text-slate-900" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in absolute top-full w-full left-0 shadow-lg pb-4 rounded-b-xl">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-3 text-sm font-medium font-sans rounded-md transition-colors text-foreground hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 mx-4 rounded-lg font-semibold shadow-none">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
