import { memo } from "react";

const SECTION_PADDING = {
  sm: "py-8 sm:py-10",
  md: "py-10 sm:py-12",
  lg: "py-12 sm:py-16",
};

function Section({
  children,
  id,
  bg = "",
  padding = "lg",
  className = "",
  "aria-labelledby": ariaLabelledBy,
  ...props
}) {
  const paddingStyle = SECTION_PADDING[padding] || SECTION_PADDING.lg;

  return (
    <section
      id={id}
      className={`relative ${bg} ${paddingStyle} ${className}`}
      aria-labelledby={ariaLabelledBy}
      {...props}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default memo(Section);
