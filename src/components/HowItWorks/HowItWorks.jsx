import React from "react";

/**
 * HowItWorks Component - AiBrush Workflow Section
 * 
 * Based on docs.aibrush.co quick-start guide:
 * 1. Login → Access workspace
 * 2. Create project or chat with AI
 * 3. Generate media (video, image, speech, music, SFX)
 * 4. Add to timeline and edit
 * 5. Export with GPU acceleration
 */
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Describe Your Vision",
      description: "Start with a concept or let AI imagine one for you. Chat naturally and AI will write your story and build the concept.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Generate Media",
      description: "Choose your AI model and create videos, images, speech, music, or sound effects. Regenerate until you're happy.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Edit in Timeline",
      description: "Drag and drop media onto your timeline. Trim, cut, layer clips, and arrange your story with professional editing tools.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Export & Share",
      description: "Export your final video with GPU acceleration in seconds. Download or share directly to any platform.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="how-it-works"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-neutral-50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 
            id="how-it-works-heading"
            className="text-sm font-semibold text-brand-600 uppercase tracking-wide"
          >
            How It Works
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
            From idea to export in minutes
          </p>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            AiBrush Studio streamlines your creative workflow with AI-powered generation and professional editing tools.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-accent-200 to-brand-200 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-lg transition-shadow h-full">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white mb-4 relative z-10">
                    {step.icon}
                  </div>
                  
                  {/* Step indicator */}
                  <div className="text-xs font-bold text-brand-600 mb-2 tracking-wide">
                    STEP {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://aibrush.co/projects"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold text-base shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your First Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
