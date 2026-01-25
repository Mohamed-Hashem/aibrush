import React from "react";

/**
 * Features Component - AiBrush Key Features Section
 * 
 * Based on docs.aibrush.co documentation:
 * - Core Features: Workspace, Timeline Editor, AI Models, ControlNet
 * - Media Types: Images, Videos, Speech, Music, Sound Effects
 * - AI Models: Google Veo/Imagen, Runway, Flux Pro, Suno, etc.
 */
export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Video Generation",
      description: "Create cinematic videos from text or images with Google Veo, Runway, Pika, and Hailuo. Includes AI lip-sync with Pixverse and Veed.",
      badges: ["Text to Video", "Image to Video", "Lip Sync"],
      color: "brand",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Image Generation",
      description: "Generate stunning images with Google Imagen, Flux Pro, Runway, and See Dream V4. Supports style presets, high resolution, and multi-image reference.",
      badges: ["Text to Image", "4K Quality", "Style Presets"],
      color: "accent",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Speech & Voice",
      description: "Convert text to natural speech with Gemini and OpenAI voices. 50+ languages, 30+ voices, emotion control, and multi-voice conversations.",
      badges: ["50+ Languages", "30+ Voices", "Emotion Control"],
      color: "brand",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: "Music & Audio",
      description: "Compose original music with Suno and Google Lyria. Create cinematic sound effects with ElevenLabs. Multiple genres, custom length, high quality.",
      badges: ["AI Music", "Sound Effects", "Multiple Genres"],
      color: "accent",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      title: "Timeline Editor",
      description: "Professional video editing with drag-and-drop arrangement. Trim, cut, layer clips, and export with GPU acceleration. Build complete projects.",
      badges: ["Drag & Drop", "GPU Export", "Multi-track"],
      color: "brand",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "AI Chat Assistant",
      description: "Create projects by chatting with AI. Describe your vision and let AI write your story, build concepts, and set up your entire project.",
      badges: ["Context Aware", "Project Setup", "Creative Support"],
      color: "accent",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      brand: {
        bg: "bg-brand-100",
        text: "text-brand-600",
        border: "group-hover:border-brand-200",
        badge: "bg-brand-50 text-brand-700",
      },
      accent: {
        bg: "bg-accent-400/10",
        text: "text-accent-600",
        border: "group-hover:border-accent-200",
        badge: "bg-accent-400/10 text-accent-700",
      },
    };
    return colors[color] || colors.brand;
  };

  return (
    <section 
      id="features"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 
            id="features-heading"
            className="text-sm font-semibold text-brand-600 uppercase tracking-wide"
          >
            All-in-One Creative Studio
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
            Every media type. One workspace.
          </p>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Generate videos, images, speech, music, and sound effects with premium AI models. 
            Edit everything in a professional timeline and export in seconds.
          </p>
        </div>

        {/* Feature cards - 2x3 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <article
                key={index}
                className={`group relative p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:bg-white hover:shadow-lg transition-all duration-300 ${colorClasses.border}`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.text} mb-4`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Feature badges */}
                <div className="flex flex-wrap gap-2">
                  {feature.badges.map((badge, badgeIndex) => (
                    <span 
                      key={badgeIndex}
                      className={`px-2 py-1 text-xs font-medium rounded-md ${colorClasses.badge}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* AI Models showcase */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-neutral-500 mb-6">Powered by industry-leading AI models</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Google Veo", type: "Video" },
              { name: "Google Imagen", type: "Image" },
              { name: "Runway Gen-3", type: "Video & Image" },
              { name: "Flux Pro", type: "Image" },
              { name: "Suno", type: "Music" },
              { name: "Pika", type: "Video" },
              { name: "ElevenLabs", type: "SFX" },
              { name: "OpenAI TTS", type: "Speech" },
            ].map((model, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
              >
                <span className="font-medium text-neutral-900">{model.name}</span>
                <span className="ml-2 text-xs text-neutral-500">{model.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
