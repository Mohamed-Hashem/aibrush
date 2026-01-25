import { memo } from "react";

const GRADIENT_PRESETS = {
  primary: "from-purple-400 via-pink-500 to-orange-400",
  purple: "from-purple-400 to-pink-400",
  blue: "from-blue-400 to-cyan-400",
  green: "from-green-400 to-emerald-400",
  orange: "from-orange-400 to-red-400",
};

function GradientText({ children, gradient = "primary", className = "", as = "span" }) {
  const gradientClass = GRADIENT_PRESETS[gradient] || gradient;
  const Tag = as;

  return (
    <Tag className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent ${className}`}>{children}</Tag>
  );
}

export default memo(GradientText);
