type WaveVariant = "calm" | "swell" | "deep" | "ripple";

type Props = {
  className?: string;
  flip?: boolean;
  fill?: string;
  variant?: WaveVariant;
  opacity?: number;
};

const PATHS: Record<WaveVariant, string> = {
  calm: "M0,85 C240,115 480,65 720,80 C960,95 1200,110 1440,118 L1440,120 L0,120 Z",
  swell: "M0,75 C220,105 440,55 720,80 C1000,105 1220,90 1440,115 L1440,120 L0,120 Z",
  deep: "M0,80 C240,115 480,45 720,70 C960,95 1200,115 1440,118 L1440,120 L0,120 Z",
  ripple: "M0,95 C180,80 360,105 540,93 C720,81 900,105 1080,95 C1260,90 1380,110 1440,118 L1440,120 L0,120 Z",
};

export function WaveDivider({
  className = "",
  flip = false,
  fill = "currentColor",
  variant = "calm",
  opacity = 1,
}: Props) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <path d={PATHS[variant]} fill={fill} opacity={opacity} />
    </svg>
  );
}