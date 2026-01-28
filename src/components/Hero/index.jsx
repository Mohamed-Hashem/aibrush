import { useState, useEffect, memo } from "react";
import { Video, Music, Mic, Image, Play, ArrowRight, Check, MessageCircle } from "lucide-react";
import { HERO_EXAMPLES, HERO_FEATURES, EXTERNAL_URLS } from "../../constants";
import { Button } from "../shared";

const iconMap = {
  video: Video,
  music: Music,
  mic: Mic,
  image: Image,
};

function Hero() {
  const [currentExample, setCurrentExample] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % HERO_EXAMPLES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const example = HERO_EXAMPLES[currentExample];
  const IconComponent = iconMap[example.iconType];

  return (
    <section className="relative overflow-hidden text-white bg-slate-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Everything
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                in One Place
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The all-in-one AI creative studio. Generate videos, music, voiceovers, and images — then edit everything
              together in one powerful workspace.
            </p>

            <div className="space-y-3">
              {HERO_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                href={EXTERNAL_URLS.projects}
                external
                size="lg"
                iconRight={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                className="group"
                aria-label="Start creating free - go to projects"
              >
                Start Creating Free
              </Button>

              <Button
                href={EXTERNAL_URLS.examples}
                external
                variant="secondary"
                size="lg"
                iconLeft={<Play className="w-5 h-5" />}
              >
                See Examples
              </Button>
            </div>

            <p className="text-sm text-gray-400">Free trial available • Flexible plans • Cancel anytime</p>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce z-10">
                <Video className="w-6 h-6" aria-hidden="true" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce z-10"
                style={{ animationDelay: "0.5s" }}
              >
                <Music className="w-6 h-6" aria-hidden="true" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">What You Can Create</p>
                <div className="flex gap-1" role="tablist" aria-label="Example categories">
                  {HERO_EXAMPLES.map((ex, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentExample(index)}
                      aria-label={`View ${ex.title}`}
                      aria-selected={index === currentExample}
                      role="tab"
                      className={`h-6 min-w-[24px] rounded-full transition-all duration-300 flex items-center justify-center ${
                        index === currentExample ? "w-10 bg-purple-400" : "w-6 bg-white/20 hover:bg-white/40"
                      }`}
                    >
                      <span className="sr-only">{ex.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-20`}
                  aria-hidden="true"
                />
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true" />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-2">{example.title}</p>
                  <p className="text-gray-300 text-sm sm:text-base">{example.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Timeline Editor</p>
                <div className="space-y-2">
                  <div className="h-8 bg-gradient-to-r from-purple-600/40 to-purple-600/10 rounded-lg flex items-center px-3">
                    <Video className="w-4 h-4 mr-2 text-purple-400" aria-hidden="true" />
                    <span className="text-sm text-gray-300">Video Track</span>
                  </div>
                  <div className="h-8 bg-gradient-to-r from-pink-600/40 to-pink-600/10 rounded-lg flex items-center px-3">
                    <Image className="w-4 h-4 mr-2 text-pink-400" aria-hidden="true" />
                    <span className="text-sm text-gray-300">Image Track</span>
                  </div>
                  <div className="h-8 bg-gradient-to-r from-blue-600/40 to-blue-600/10 rounded-lg flex items-center px-3">
                    <Music className="w-4 h-4 mr-2 text-blue-400" aria-hidden="true" />
                    <span className="text-sm text-gray-300">Audio Track</span>
                  </div>
                  <div className="h-8 bg-gradient-to-r from-orange-600/40 to-orange-600/10 rounded-lg flex items-center px-3">
                    <Mic className="w-4 h-4 mr-2 text-orange-400" aria-hidden="true" />
                    <span className="text-sm text-gray-300">Voiceover Track</span>
                  </div>
                  <div className="h-8 bg-gradient-to-r from-green-600/40 to-green-600/10 rounded-lg flex items-center px-3">
                    <MessageCircle className="w-4 h-4 mr-2 text-green-400" aria-hidden="true" />
                    <span className="text-sm text-gray-300">AI Chat Assistant</span>
                  </div>
                  <div className="h-8 bg-gradient-to-r from-cyan-600/40 to-cyan-600/10 rounded-lg flex items-center px-3">
                    <Music className="w-4 h-4 mr-2 text-cyan-400" aria-hidden="true" />
                    <span className="text-sm text-gray-300">Music & Sound Effects</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-green-400 text-sm">The AiBrush Way: Everything in One Workspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
