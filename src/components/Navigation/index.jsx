import { useState, useEffect, useCallback, memo } from "react";
import { ExternalLink, X, Menu } from "lucide-react";
import { NAV_LINKS, EXTERNAL_URLS } from "../../constants";
import { Button } from "../shared";
import logo from "../../assets/logo.png";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group" aria-label="AiBrush Home">
            <img
              src={logo}
              alt="AiBrush"
              width="32"
              height="32"
              className="w-8 h-8 rounded-lg"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <span className="text-xl font-bold text-white">
              AiBrush
              <span className="text-xs font-normal text-gray-400 ml-1.5 hidden sm:inline">Studio</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.name}
                {link.external && <ExternalLink className="inline-block ml-1 w-3 h-3" aria-hidden="true" />}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button href={EXTERNAL_URLS.main} external variant="ghost" size="sm">
              Log in
            </Button>
            <Button href={EXTERNAL_URLS.workspace} external size="sm">
              Open Workspace
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-2 border-white/10" />
              <a
                href={EXTERNAL_URLS.main}
                className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={closeMobileMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
              <div className="px-4 py-2">
                <Button href={EXTERNAL_URLS.workspace} external className="w-full" onClick={closeMobileMenu}>
                  Open Workspace
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default memo(Navigation);
