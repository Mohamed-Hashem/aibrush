import React, { useState } from "react";

/**
 * Navigation Component - AiBrush Header
 * 
 * Features:
 * - Responsive with mobile hamburger menu
 * - Accessible navigation with proper ARIA labels
 * - Sticky header with backdrop blur on scroll
 */
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "https://aibrush.co/pricing", external: true },
    { name: "Docs", href: "https://docs.aibrush.co", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200/50">
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 group"
            aria-label="AiBrush Home"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-neutral-900">
              AiBrush
              <span className="text-xs font-normal text-neutral-500 ml-1.5 hidden sm:inline">Studio</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {link.name}
                {link.external && (
                  <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://aibrush.co"
              className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log in
            </a>
            <a
              href="https://aibrush.co/workspace"
              className="px-4 py-2 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 shadow-sm hover:shadow-md transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Workspace
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden py-4 border-t border-neutral-200"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-neutral-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-2 border-neutral-200" />
              <a
                href="https://aibrush.co"
                className="px-4 py-3 text-base font-medium text-neutral-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
              <a
                href="https://aibrush.co/workspace"
                className="mx-4 mt-2 px-4 py-3 text-center text-base font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Workspace
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
