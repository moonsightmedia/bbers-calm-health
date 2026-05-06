type WaveVariant = "calm" | "swell" | "deep" | "ripple";

type Props = {
  className?: string;
  flip?: boolean;
  fill?: string;
  variant?: WaveVariant;
  opacity?: number;
};

const PATHS: Record<WaveVariant, string> = {
  calm: "M0,70 C240,110 480,30 720,55 C960,80 1200,110 1440,65 L1440,120 L0,120 Z",
  swell: "M0,40 C200,100 420,10 720,55 C1020,100 1240,20 1440,70 L1440,120 L0,120 Z",
  deep: "M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z",
  ripple: "M0,90 C180,70 360,100 540,85 C720,70 900,100 1080,88 C1260,76 1380,92 1440,84 L1440,120 L0,120 Z",
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