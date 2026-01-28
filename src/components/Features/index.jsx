import { memo } from "react";
import { Video, Image, Mic, Music, Film, MessageCircle } from "lucide-react";
import { FEATURES_CONTENT, FEATURES_LIST, AI_MODELS } from "../../constants";
import { Section, SectionHeader, Card, Badge } from "../shared";

const FEATURE_ICONS = {
  video: Video,
  image: Image,
  microphone: Mic,
  music: Music,
  timeline: Film,
  chat: MessageCircle,
};

const FeatureCard = memo(function FeatureCard({ feature }) {
  const IconComponent = FEATURE_ICONS[feature.iconType] || FEATURE_ICONS.video;

  return (
    <Card as="article" className="group">
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 shadow-lg`}
      >
        <IconComponent className="w-6 h-6" aria-hidden="true" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.description}</p>

      <div className="flex flex-wrap gap-2">
        {feature.badges.map((badge, badgeIndex) => (
          <Badge key={badgeIndex}>{badge}</Badge>
        ))}
      </div>
    </Card>
  );
});

const AIModelBadge = memo(function AIModelBadge({ model }) {
  return (
    <Badge variant="gradient" size="lg" className="whitespace-nowrap">
      <span className="font-semibold">{model.name}</span>
      <span className="text-gray-400">• {model.type}</span>
    </Badge>
  );
});

function Features() {
  return (
    <Section id="features" aria-labelledby="features-heading">
      <SectionHeader
        headlineId="features-heading"
        label={FEATURES_CONTENT.label}
        headline={FEATURES_CONTENT.headline}
        subheadline={FEATURES_CONTENT.subheadline}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES_LIST.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm font-medium text-gray-400 mb-6">Powered by industry-leading AI models</p>
        <ul className="flex flex-wrap justify-center gap-3" aria-label="AI models">
          {AI_MODELS.map((model, index) => (
            <li key={index}>
              <AIModelBadge model={model} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default memo(Features);
