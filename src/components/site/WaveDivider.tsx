type Props = {
  className?: string;
  flip?: boolean;
  fill?: string;
};

export function WaveDivider({ className = "", flip = false, fill = "currentColor" }: Props) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <path
        d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}