import { memo } from "react";

function Section({ children, id, className = "", "aria-labelledby": ariaLabelledBy, ...props }) {
  return (
    <section id={id} className={`relative py-12 sm:py-16 ${className}`} aria-labelledby={ariaLabelledBy} {...props}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default memo(Section);
