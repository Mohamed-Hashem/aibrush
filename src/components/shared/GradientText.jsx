import { memo } from "react";

function GradientText({ children, className = "", as = "span" }) {
  const Tag = as;

  return (
    <Tag
      className={`bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  );
}

export default memo(GradientText);
