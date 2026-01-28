import { memo } from "react";
import { MessageCircle, Sparkles, Film, Upload, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_CONTENT, HOW_IT_WORKS_STEPS, EXTERNAL_URLS } from "../../constants";
import { Section, SectionHeader, Card, Button } from "../shared";

const STEP_ICONS = {
  chat: MessageCircle,
  sparkles: Sparkles,
  timeline: Film,
  upload: Upload,
};

const StepCard = memo(function StepCard({ step }) {
  const IconComponent = STEP_ICONS[step.iconType] || STEP_ICONS.sparkles;

  return (
    <div className="relative">
      <Card className="h-full">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} text-white mb-4 relative z-10 shadow-lg`}
        >
          <IconComponent className="w-8 h-8" aria-hidden="true" />
        </div>

        <div
          className={`text-xs font-bold mb-2 tracking-wide bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
        >
          STEP {step.number}
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
      </Card>
    </div>
  );
});

function HowItWorks() {
  return (
    <Section id="how-it-works" aria-labelledby="how-it-works-heading">
      <SectionHeader
        headlineId="how-it-works-heading"
        label={HOW_IT_WORKS_CONTENT.label}
        headline={HOW_IT_WORKS_CONTENT.headline}
        subheadline={HOW_IT_WORKS_CONTENT.subheadline}
      />

      <div className="relative">
        <div
          className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 -translate-y-1/2"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button
          href={EXTERNAL_URLS.projects}
          external
          size="lg"
          iconRight={<ArrowRight className="w-5 h-5" />}
          aria-label="Start your first project now"
        >
          {HOW_IT_WORKS_CONTENT.ctaText}
        </Button>
      </div>
    </Section>
  );
}

export default memo(HowItWorks);
