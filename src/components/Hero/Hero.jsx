import React from "react";

/**
 * Hero Component - AiBrush Landing Page
 * 
 * Design: Split layout with copy/CTA left, product demo right
 * Mobile: Stacked layout (copy on top, demo below)
 * Desktop: Side-by-side grid layout
 * 
 * Features based on docs.aibrush.co:
 * - Image Models: Google Imagen, Flux Pro, Runway, Qwen, Wan, See Dream
 * - Video Models: Google Veo, Runway, Pika, Hailuo, Wan + Lipsync
 * - Speech Models: Gemini Speech, OpenAI Speech (50+ languages)
 * - Music Models: Suno, Google Lyria
 * - Sound Effects: ElevenLabs
 */
export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-brand-50"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Copy & CTAs */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              New • AiBrush Studio v3.3
            </div>

            {/* Headline */}
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]"
            >
              Create Videos, Images{" "}
              <span className="bg-gradient-to-r from-brand-600 via-accent-500 to-brand-500 bg-clip-text text-transparent">
                & Audio with AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Generate stunning videos, images, speech, music, and sound effects—all in one workspace. 
              Powered by Google Veo, Runway, Suno, and 15+ premium AI models.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://aibrush.co/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold text-base shadow-lg shadow-brand-500/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="Start creating for free"
              >
                Start Creating Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="https://docs.aibrush.co/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-neutral-200 bg-white text-neutral-700 font-semibold text-base hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                aria-label="View example projects"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                View Examples
              </a>
            </div>

            {/* AI Models showcase */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-3">Powered by leading AI models</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-700 border border-neutral-200 shadow-sm">
                  Google Veo & Imagen
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-700 border border-neutral-200 shadow-sm">
                  Runway Gen-3
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-700 border border-neutral-200 shadow-sm">
                  Suno Music
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-700 border border-neutral-200 shadow-sm">
                  Flux Pro
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-700 border border-neutral-200 shadow-sm">
                  +15 more
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product Demo Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Glow effect behind the demo */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-accent-400 rounded-2xl blur-2xl opacity-20 scale-105" />
              
              {/* Demo container */}
              <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-neutral-900/5 overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 border-b border-neutral-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 py-1 bg-white rounded-md text-xs text-neutral-500 border border-neutral-200">
                      AiBrush Studio
                    </div>
                  </div>
                </div>
                
                {/* Demo content - Media type tabs */}
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-50 to-neutral-100 p-4">
                  {/* Simulated UI */}
                  <div className="h-full flex flex-col gap-3">
                    {/* Media type tabs */}
                    <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm">
                      <div className="px-3 py-1.5 bg-brand-500 text-white text-xs font-medium rounded-md">Video</div>
                      <div className="px-3 py-1.5 text-neutral-600 text-xs font-medium rounded-md">Image</div>
                      <div className="px-3 py-1.5 text-neutral-600 text-xs font-medium rounded-md">Speech</div>
                      <div className="px-3 py-1.5 text-neutral-600 text-xs font-medium rounded-md">Music</div>
                      <div className="px-3 py-1.5 text-neutral-600 text-xs font-medium rounded-md">SFX</div>
                    </div>
                    
                    {/* Main content area */}
                    <div className="flex-1 grid grid-cols-4 gap-3">
                      {/* Sidebar - AI Models */}
                      <div className="col-span-1 bg-white rounded-lg p-2 space-y-1.5 shadow-sm">
                        <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wide">Models</p>
                        <div className="h-5 bg-brand-100 rounded text-[10px] px-2 flex items-center text-brand-700 font-medium">Google Veo</div>
                        <div className="h-5 bg-neutral-100 rounded text-[10px] px-2 flex items-center text-neutral-600">Runway</div>
                        <div className="h-5 bg-neutral-100 rounded text-[10px] px-2 flex items-center text-neutral-600">Pika</div>
                        <div className="h-5 bg-neutral-100 rounded text-[10px] px-2 flex items-center text-neutral-600">Hailuo</div>
                      </div>
                      
                      {/* Canvas area */}
                      <div className="col-span-3 bg-white rounded-lg shadow-sm p-3 flex flex-col">
                        <div className="flex-1 flex items-center justify-center bg-neutral-50 rounded-lg border-2 border-dashed border-neutral-200">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-brand-400 to-accent-500 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p className="text-xs font-medium text-neutral-700">Text to Video</p>
                            <p className="text-[10px] text-neutral-500">Describe your scene</p>
                          </div>
                        </div>
                        {/* Prompt input */}
                        <div className="mt-2 flex gap-2">
                          <div className="flex-1 h-7 bg-neutral-100 rounded-md px-2 flex items-center text-[10px] text-neutral-400">A cinematic shot of...</div>
                          <div className="h-7 w-16 bg-brand-500 rounded-md flex items-center justify-center text-[10px] text-white font-medium">Generate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom bar */}
                <div className="px-4 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Ready to create</span>
                  <span className="inline-flex items-center gap-1 text-xs text-green-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    AI Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
