import { memo } from "react";

function Badge({ children, variant = "default", size = "md", className = "", ...props }) {
  const variantStyle =
    variant === "gradient"
      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
      : "bg-white/10 text-gray-300 border border-white/5";

  const sizeStyle = size === "lg" ? "px-3 py-1.5 text-sm" : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-md ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default memo(Badge);
