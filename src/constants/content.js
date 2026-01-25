export const FEATURES_CONTENT = {
  label: "All-in-One Creative Studio",
  headline: "Every media type. One workspace.",
  subheadline:
    "Generate videos, images, speech, music, and sound effects with premium AI models. Edit everything in a professional timeline and export in seconds.",
};

export const FEATURES_LIST = [
  {
    id: "video-generation",
    title: "Video Generation",
    description:
      "Create cinematic videos from text or images with Google Veo, Runway, Pika, and Hailuo. Includes AI lip-sync with Pixverse and Veed.",
    badges: ["Text to Video", "Image to Video", "Lip Sync"],
    gradient: "from-purple-600 to-pink-600",
    iconType: "video",
  },
  {
    id: "image-generation",
    title: "Image Generation",
    description:
      "Generate stunning images with Google Imagen, Flux Pro, Runway, and See Dream V4. Supports style presets, high resolution, and multi-image reference.",
    badges: ["Text to Image", "4K Quality", "Style Presets"],
    gradient: "from-blue-600 to-cyan-600",
    iconType: "image",
  },
  {
    id: "speech-voice",
    title: "Speech & Voice",
    description:
      "Convert text to natural speech with Gemini and OpenAI voices. 50+ languages, 30+ voices, emotion control, and multi-voice conversations.",
    badges: ["50+ Languages", "30+ Voices", "Emotion Control"],
    gradient: "from-green-600 to-emerald-600",
    iconType: "microphone",
  },
  {
    id: "music-audio",
    title: "Music & Audio",
    description:
      "Compose original music with Suno and Google Lyria. Create cinematic sound effects with ElevenLabs. Multiple genres, custom length, high quality.",
    badges: ["AI Music", "Sound Effects", "Multiple Genres"],
    gradient: "from-orange-600 to-red-600",
    iconType: "music",
  },
  {
    id: "timeline-editor",
    title: "Timeline Editor",
    description:
      "Professional video editing with drag-and-drop arrangement. Trim, cut, layer clips, and export with GPU acceleration. Build complete projects.",
    badges: ["Drag & Drop", "GPU Export", "Multi-track"],
    gradient: "from-violet-600 to-purple-600",
    iconType: "timeline",
  },
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description:
      "Create projects by chatting with AI. Describe your vision and let AI write your story, build concepts, and set up your entire project.",
    badges: ["Context Aware", "Project Setup", "Creative Support"],
    gradient: "from-pink-600 to-rose-600",
    iconType: "chat",
  },
];

export const HOW_IT_WORKS_CONTENT = {
  label: "How It Works",
  headline: "From idea to export in minutes",
  subheadline:
    "AiBrush Studio streamlines your creative workflow with AI-powered generation and professional editing tools.",
  ctaText: "Start Your First Project",
};

export const HOW_IT_WORKS_STEPS = [
  {
    id: "step-describe",
    number: "01",
    title: "Describe Your Vision",
    description:
      "Start with a concept or let AI imagine one for you. Chat naturally and AI will write your story and build the concept.",
    iconType: "chat",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: "step-generate",
    number: "02",
    title: "Generate Media",
    description:
      "Choose your AI model and create videos, images, speech, music, or sound effects. Regenerate until you're happy.",
    iconType: "sparkles",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "step-edit",
    number: "03",
    title: "Edit in Timeline",
    description:
      "Drag and drop media onto your timeline. Trim, cut, layer clips, and arrange your story with professional editing tools.",
    iconType: "timeline",
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: "step-export",
    number: "04",
    title: "Export & Share",
    description:
      "Export your final video with GPU acceleration in seconds. Download or share directly to any platform.",
    iconType: "upload",
    gradient: "from-green-600 to-emerald-600",
  },
];

export const AI_MODELS = [
  { name: "Google Veo", type: "Video" },
  { name: "Google Imagen", type: "Image" },
  { name: "Runway Gen-3", type: "Video & Image" },
  { name: "Flux Pro", type: "Image" },
  { name: "Suno", type: "Music" },
  { name: "Pika", type: "Video" },
  { name: "ElevenLabs", type: "SFX" },
  { name: "OpenAI TTS", type: "Speech" },
];

export const BOTTOM_CTA_CONTENT = {
  headline: "Ready to Create Something",
  headlineHighlight: "Amazing",
  subheadline:
    "Join thousands of creators using AiBrush to bring their vision to life with AI-powered video, image, music, and voice generation.",
  primaryCta: "Start Creating Free",
  secondaryCta: "Read Documentation",
  trustBadges: "Free trial available • Flexible plans • Cancel anytime",
};

export const FOOTER_CONTENT = {
  brand: {
    name: "AiBrush Studio",
    tagline: "Create beautiful AI-powered media effortlessly.",
  },
  sections: {
    product: {
      title: "Product",
      links: [
        { name: "Workspace", href: "https://aibrush.co/workspace" },
        { name: "Projects", href: "https://aibrush.co/projects" },
        { name: "Pricing", href: "https://aibrush.co/pricing" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Documentation", href: "https://docs.aibrush.co" },
        { name: "Quick Start", href: "https://docs.aibrush.co/quick-start" },
        { name: "Examples", href: "https://docs.aibrush.co/examples" },
        { name: "AI Models", href: "https://docs.aibrush.co/ai-models" },
      ],
    },
    connect: {
      title: "Connect",
    },
  },
  supportEmail: "support@aibrush.co",
  copyright: "All rights reserved.",
  legalLinks: [
    { name: "Privacy Policy", href: "https://aibrush.co/coming-soon?page=privacy" },
    { name: "Terms of Service", href: "https://aibrush.co/coming-soon?page=terms" },
  ],
};

export const HERO_EXAMPLES = [
  {
    iconType: "video",
    title: "AI Video Generation",
    description: "Create stunning videos from text prompts",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    iconType: "music",
    title: "AI Music Creation",
    description: "Generate original music and soundtracks",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    iconType: "mic",
    title: "AI Voice & Speech",
    description: "Professional voiceovers in any language",
    gradient: "from-orange-600 to-red-600",
  },
  {
    iconType: "image",
    title: "AI Image Generation",
    description: "Create beautiful images from descriptions",
    gradient: "from-green-600 to-emerald-600",
  },
];

export const HERO_FEATURES = [
  "Generate videos, music, and voiceovers",
  "Edit everything in one timeline",
  "Export in any format instantly",
];
