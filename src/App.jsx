import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      
      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-white font-semibold">AiBrush Studio</span>
              </div>
              <p className="text-sm text-neutral-500">
                Create beautiful AI-powered media effortlessly.
              </p>
            </div>
            
            {/* Product links */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2">
                <li><a href="https://aibrush.co/workspace" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Workspace</a></li>
                <li><a href="https://aibrush.co/projects" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Projects</a></li>
                <li><a href="https://aibrush.co/pricing" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Pricing</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://docs.aibrush.co" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="https://docs.aibrush.co/quick-start" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Quick Start</a></li>
                <li><a href="https://docs.aibrush.co/examples" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Examples</a></li>
                <li><a href="https://docs.aibrush.co/ai-models" className="text-sm hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">AI Models</a></li>
              </ul>
            </div>
            
            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Connect</h4>
              <div className="flex gap-3">
                <a href="https://github.com/aibrush" className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://x.com/aibrushproject" className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.instagram.com/aibrush.co" className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.youtube.com/@aibrushproject" className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@aibrushproject" className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              </div>
              <p className="text-xs text-neutral-500 mt-4">
                <a href="mailto:support@aibrush.co" className="hover:text-white transition-colors">support@aibrush.co</a>
              </p>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} AiBrush Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://aibrush.co/coming-soon?page=privacy" className="text-sm text-neutral-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="https://aibrush.co/coming-soon?page=terms" className="text-sm text-neutral-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
