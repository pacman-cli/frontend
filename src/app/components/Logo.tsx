export default function Logo({ size = 28 }: { size?: number }) {
  const bg = "#64FFDA";
  const fg = "#0A1930"; // contrast with site background
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="P Logo"
      role="img"
    >
      <rect x="1" y="1" width="30" height="30" rx="8" fill={bg} />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fontFamily="Dank Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
        fill={fg}
      >
        P
      </text>
    </svg>
  );
}


