import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="5" r="1.5" />
                  <circle cx="12" cy="19" r="1.5" />
                  <line x1="12" y1="6.5" x2="12" y2="9" />
                  <line x1="12" y1="15" x2="12" y2="17.5" />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl">Precigenetics</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Redefining drug discovery by seeing the unseen biology.
            </p>
            <a href="mailto:hello@precigenetics.com" className="text-sm text-white/60 hover:text-primary transition-colors">
              hello@precigenetics.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-white">Pages</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Platform", path: "/platform" },
                { label: "Services", path: "/services" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-white/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-white">Resources</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "News", path: "/blog" },
                { label: "Contact Us", path: "/contact" },
                { label: "Cookie Policy", path: "/cookie-policy" },
                { label: "Privacy Policy", path: "/privacy-policy" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-white/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-white">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@precigenetics.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> hello@precigenetics.com
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" /> X (Twitter)
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:careers@precigenetics.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" /> careers@precigenetics.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2026 Precigenetics, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
