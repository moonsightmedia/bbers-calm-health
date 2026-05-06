import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlobShape } from "./BlobShape";

type Props = {
  variant?: 1 | 2 | 3 | 4;
  className?: string;
  colorClass?: string;
  /** parallax intensity in px from -range..+range as section scrolls through viewport */
  range?: number;
};

/** A softly drifting blob accent — meant to bridge across section borders. */
export function FloatingAccent({
  variant = 1,
  className = "",
  colorClass = "text-sand/40",
  range = 80,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      aria-hidden
      className={`pointer-events-none absolute ${colorClass} ${className}`}
    >
      <BlobShape variant={variant} className="h-full w-full" />
    </motion.div>
  );
}