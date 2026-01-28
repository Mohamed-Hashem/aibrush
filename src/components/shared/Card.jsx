import { memo } from "react";

const CARD_VARIANTS = {
  default: `
    bg-slate-800/50 backdrop-blur-sm
    border border-white/10
    hover:border-white/20 hover:bg-slate-800/80
  `,
};

const CARD_PADDING = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

function Card({ children, variant = "default", padding = "md", className = "", as = "div", ...props }) {
  const baseStyles = "rounded-2xl transition-all duration-300";
  const variantStyle = CARD_VARIANTS[variant] || CARD_VARIANTS.default;
  const paddingStyle = CARD_PADDING[padding] || CARD_PADDING.md;
  const Tag = as;

  return (
    <Tag className={`${baseStyles} ${variantStyle} ${paddingStyle} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default memo(Card);
