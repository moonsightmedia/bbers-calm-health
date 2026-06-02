import { motion } from "framer-motion";
import { ArrowRight, Play, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import portraitAsset from "@/assets/simone-portrait.jpg.asset.json";
const portrait = portraitAsset.url;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden bg-foam px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-12 lg:pt-44 lg:pb-16"
    >
      {/* Background decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sand/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-tide/10 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 flex w-full flex-col items-start space-y-8 lg:w-1/2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-tide/20 bg-foam/40 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-tide" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep">
              Ganzheitliche Gesundheit · Wuppertal
            </span>
          </span>

          <h1 className="font-display text-5xl font-light leading-[1.1] text-deep lg:text-7xl">
            Leben im <br />
            <span className="relative inline-block italic font-normal text-tide">
              Gleichgewicht
              <svg
                className="absolute -bottom-1 left-0 h-2 w-full text-sand/60"
                viewBox="0 0 240 12"
                fill="none"
                aria-hidden
              >
                <motion.path
                  d="M2 10C60 2.5 180 2.5 238 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </span>{" "}
            <br />
            — innen wie außen.
          </h1>

          <p className="max-w-lg text-lg font-light leading-relaxed text-deep/80 lg:text-xl">
            Als Physiotherapeutin, Resilienz&shy;trainerin und psychologische
            Beraterin begleite ich Menschen und Unternehmen zu mehr Gesundheit,
            Selbst&shy;wirksamkeit und innerer Stärke — fundiert, ruhig und
            persönlich.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-deep px-8 py-4 font-medium text-foam transition-all hover:bg-tide hover:shadow-glow"
            >
              Termin vereinbaren
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/angebote"
              className="group inline-flex items-center gap-3 font-medium text-deep transition-colors hover:text-tide"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-tide/30 bg-tide/5 transition-colors group-hover:bg-tide/10">
                <Play size={12} className="ml-0.5" fill="currentColor" />
              </span>
              <span>Angebote entdecken</span>
            </Link>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full justify-center lg:w-1/2"
        >
          <div className="relative aspect-[4/5] w-full max-w-[480px]">
            {/* Arch Frame Outline */}
            <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-t-full border border-sand opacity-60" />

            {/* Portrait in arch */}
            <div className="h-full w-full overflow-hidden rounded-t-full bg-sand/20 shadow-soft">
              <img
                src={portrait}
                alt="Porträt von Simone Rothlübbers"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -bottom-10 -left-6 max-w-[300px] rounded-2xl border border-foam bg-foam/95 p-6 shadow-soft backdrop-blur lg:-left-16 lg:p-8"
            >
              <Quote size={28} className="mb-4 text-sand" />
              <p className="font-display text-base italic leading-relaxed text-deep lg:text-lg">
                Verständnis und Annahme von dem, was ist, schafft den
                richtigen Nährboden für das Neue.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-8 bg-tide" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tide">
                  Simone Rothlübbers
                </span>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute -right-8 top-1/2 flex -translate-y-1/2 flex-col gap-5">
              <span className="h-1.5 w-1.5 rounded-full bg-sand" />
              <span className="h-1.5 w-1.5 rounded-full bg-tide" />
              <span className="h-1.5 w-1.5 rounded-full bg-deep/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
