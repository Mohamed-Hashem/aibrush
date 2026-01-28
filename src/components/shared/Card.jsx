import { memo } from "react";

function Card({ children, className = "", as = "div", ...props }) {
  const Tag = as;

  return (
    <Tag
      className={`rounded-2xl transition-all duration-300 bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-slate-800/80 p-6 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default memo(Card);
