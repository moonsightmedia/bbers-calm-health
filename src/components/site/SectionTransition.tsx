import { WaveDivider } from "./WaveDivider";

type Props = {
  /** CSS color of the section ABOVE this transition (the wave's "from" — drawn behind) */
  from: string;
  /** CSS color of the section BELOW (the wave's main color, sitting on top) */
  to: string;
  /** Optional accent color for a second, lighter wave layer */
  accent?: string;
  /** Height in px (defaults responsive) */
  height?: number;
  /** Flip vertically so the wave dips upward */
  flip?: boolean;
};

/**
 * Layered wave transition between two sections.
 * - Background fills with `from` (matches section above)
 * - Two stacked SVG waves create a soft, multi-layer shoreline
 * - The bottom wave (`to`) bleeds into the next section
 */
export function SectionTransition({
  from,
  to,
  accent,
  height = 140,
  flip = false,
}: Props) {
  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden"
      style={{
        background: from,
        height,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      {accent && (
        <WaveDivider
          variant="swell"
          fill={accent}
          opacity={0.55}
          className="absolute inset-x-0 bottom-0 h-full w-full"
        />
      )}
      <WaveDivider
        variant="calm"
        fill={to}
        className="absolute inset-x-0 bottom-0 h-full w-full"
      />
    </div>
  );
}