import { memo } from "react";

function SectionHeader({ label, headline, subheadline, className = "", headlineId }) {
  return (
    <div className={`text-center my-6 lg:mb-16 ${className}`}>
      {label && <p className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">{label}</p>}
      <h2 id={headlineId} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {headline}
      </h2>
      {subheadline && <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{subheadline}</p>}
    </div>
  );
}

export default memo(SectionHeader);
