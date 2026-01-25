import { memo } from "react";

const BADGE_VARIANTS = {
  default: "bg-white/10 text-gray-300 border border-white/5",
  gradient: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30",
  outline: "border border-white/20 text-gray-300",
  success: "bg-green-500/20 text-green-400 border border-green-500/30",
};

const BADGE_SIZES = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm",
};

function Badge({ children, variant = "default", size = "md", className = "", ...props }) {
  const baseStyles = "inline-flex items-center gap-1.5 font-medium rounded-md";
  const variantStyle = BADGE_VARIANTS[variant] || BADGE_VARIANTS.default;
  const sizeStyle = BADGE_SIZES[size] || BADGE_SIZES.md;

  return (
    <span className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
      {children}
    </span>
  );
}

export default memo(Badge);
