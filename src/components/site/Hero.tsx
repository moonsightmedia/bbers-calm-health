import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import portrait from "@/assets/simone-portrait.jpg";
import { BlobShape } from "./BlobShape";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* ambient background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-tide/10 blur-3xl" />
        <div className="absolute -right-32 -top-10 h-[420px] w-[420px] rounded-full bg-sand/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-deep/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-deep/70">
            <span className="h-1.5 w-1.5 rounded-full bg-tide" />
            Ganzheitliche Gesundheit
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] text-deep md:text-[3.6rem] lg:text-[4.2rem]">
            Bewegung, Resilienz <br />
            und{" "}
            <span className="relative inline-block italic text-tide">
              Begleitung
              <svg
                viewBox="0 0 220 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-sand"
                aria-hidden
              >
                <path
                  d="M2,8 Q55,1 110,7 T218,6"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            für ein Leben in Balance.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-deep/75">
            Ich begleite Menschen und Unternehmen auf dem Weg zu mehr Gesundheit,
            Klarheit und innerer Stärke — mit einem Ansatz, der Körper, Geist und
            Lebensphase gleichermaßen ernst nimmt.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 rounded-full bg-deep px-7 py-4 text-foam shadow-[0_18px_40px_-18px_var(--deep)] transition-all hover:bg-tide hover:shadow-[0_22px_50px_-18px_var(--tide)]"
            >
              Termin vereinbaren
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ansatz"
              className="inline-flex items-center gap-3 text-deep/80 hover:text-deep"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deep/20 bg-foam text-deep">
                <Play size={14} fill="currentColor" />
              </span>
              Mein Ansatz
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
            {/* sand backdrop blob */}
            <BlobShape
              variant={2}
              className="absolute inset-0 -translate-x-6 translate-y-6 text-sand"
            />
            {/* tide accent blob */}
            <BlobShape
              variant={3}
              className="absolute -right-6 -top-6 h-32 w-32 text-tide/80"
            />

            {/* portrait masked into a soft blob */}
            <div
              className="relative h-full w-full overflow-hidden shadow-soft"
              style={{
                clipPath:
                  "path('M260 10 C420 10 510 110 510 260 C510 410 410 510 260 510 C110 510 10 410 10 260 C10 110 100 10 260 10 Z')",
                WebkitClipPath:
                  "path('M260 10 C420 10 510 110 510 260 C510 410 410 510 260 510 C110 510 10 410 10 260 C10 110 100 10 260 10 Z')",
              }}
            >
              <img
                src={portrait}
                alt="Porträt von Simone Rothlübbers vor ruhiger Küstenlandschaft"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating accent dots */}
            <div className="absolute -right-4 top-1/3 flex flex-col gap-3">
              <span className="h-3 w-3 rounded-full bg-sand" />
              <span className="h-3 w-3 rounded-full bg-tide" />
              <span className="h-3 w-3 rounded-full bg-deep" />
            </div>

            {/* floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl bg-foam/95 p-5 shadow-soft backdrop-blur"
            >
              <p className="font-display text-[15px] italic leading-snug text-deep">
                „Gesundheit beginnt da, wo wir uns selbst wieder zuhören."
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-tide">
                — Simone
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}