import { memo } from "react";

const BUTTON_VARIANTS = {
  primary: `
    bg-gradient-to-r from-purple-600 to-pink-600 
    text-white font-semibold
    shadow-lg shadow-purple-500/25 
    hover:shadow-purple-500/40 hover:scale-[1.02]
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950
    transition-all duration-300
  `,
  secondary: `
    border border-white/20 bg-white/5 backdrop-blur-sm
    text-white font-semibold
    hover:bg-white/10 hover:border-white/30
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950
    transition-all duration-300
  `,
  ghost: `
    text-gray-300 font-medium
    hover:text-white hover:bg-white/10
    focus:outline-none focus:ring-2 focus:ring-purple-500/50
    transition-colors duration-200
  `,
};

const BUTTON_SIZES = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  className = "",
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2";
  const variantStyle = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary;
  const sizeStyle = BUTTON_SIZES[size] || BUTTON_SIZES.md;
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const combinedClassName = `${baseStyles} ${variantStyle} ${sizeStyle} ${disabledStyles} ${className}`.trim();

  const content = (
    <>
      {loading ? (
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        iconLeft
      )}
      {children}
      {!loading && iconRight}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        aria-label={ariaLabel}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
}

export default memo(Button);
