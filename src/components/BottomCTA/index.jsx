import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Button, GradientText } from "../shared";
import { EXTERNAL_URLS, BOTTOM_CTA_CONTENT } from "../../constants";

const BottomCTA = memo(function BottomCTA() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-pink-600/15 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {BOTTOM_CTA_CONTENT.headline} <GradientText>{BOTTOM_CTA_CONTENT.headlineHighlight}</GradientText>?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{BOTTOM_CTA_CONTENT.subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href={EXTERNAL_URLS.projects}
            external
            size="lg"
            iconRight={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            className="group"
            aria-label="Start creating free - begin your journey"
          >
            {BOTTOM_CTA_CONTENT.primaryCta}
          </Button>
          <Button href={EXTERNAL_URLS.docs} external variant="secondary" size="lg">
            {BOTTOM_CTA_CONTENT.secondaryCta}
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-400">{BOTTOM_CTA_CONTENT.trustBadges}</p>
      </div>
    </section>
  );
});

export default BottomCTA;
