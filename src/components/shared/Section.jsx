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
  showTopFade = false,
  showBottomFade = false,
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
      {showTopFade && (
        <div
          className="absolute top-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-b from-purple-950/30 via-slate-950/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      {showBottomFade && (
        <div
          className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default memo(Section);
