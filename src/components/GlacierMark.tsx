interface GlacierMarkProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function GlacierMark({
  size = 24,
  color = "#6DD4AD",
  strokeWidth = 1.5,
}: GlacierMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Back triangle (taller, set behind) */}
      <path d="M16 4 L28 26 L4 26 Z" opacity={0.45} />
      {/* Front triangle (shorter, overlapping) */}
      <path d="M11 12 L22 26 L2 26 Z" />
      {/* Waterline */}
      <path d="M2 28 L30 28" opacity={0.5} />
    </svg>
  );
}
