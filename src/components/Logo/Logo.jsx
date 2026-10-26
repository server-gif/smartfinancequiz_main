/**
 * SmartFinanceQuiz brand mark — the glossy blue ribbon "S/F" with an upward
 * arrow and ascending bars on a rounded navy gradient tile. It ships as a
 * raster (see scripts/make-brand-logo.py, which composites the delivered
 * logo art), so the header and footer render the exact same asset the splash
 * and OG card use.
 */
export default function Logo({ className = '' }) {
  return (
    <img
      className={className}
      src="/images/brand/logo-512.png"
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      draggable={false}
    />
  );
}
