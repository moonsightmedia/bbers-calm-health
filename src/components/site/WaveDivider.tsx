type WaveVariant = "calm" | "swell" | "deep" | "ripple";

type Props = {
  className?: string;
  flip?: boolean;
  fill?: string;
  variant?: WaveVariant;
  opacity?: number;
};

const PATHS: Record<WaveVariant, string> = {
  calm: "M0,80 C240,110 480,60 720,75 C960,90 1200,95 1440,80 L1440,120 L0,120 Z",
  swell: "M0,70 C220,100 440,50 720,75 C1000,100 1220,60 1440,85 L1440,120 L0,120 Z",
  deep: "M0,75 C240,110 480,40 720,65 C960,90 1200,100 1440,75 L1440,120 L0,120 Z",
  ripple: "M0,90 C180,75 360,100 540,88 C720,76 900,100 1080,90 C1260,80 1380,92 1440,88 L1440,120 L0,120 Z",
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