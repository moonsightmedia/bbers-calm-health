import { motion } from "framer-motion";

const quotes = [
  "Leben im Gleichgewicht — innen wie außen.",
  "Verständnis und Annahme von dem, was ist, schafft den richtigen Nährboden für das Neue.",
  "Lerne dich selbst noch einmal ganz neu kennen und komm dir und deiner Gesundheit Schritt für Schritt näher.",
];

export function QuotesBand() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--tide) 12%, var(--foam)) 0%, color-mix(in oklab, var(--tide) 12%, var(--foam)) 100%)",
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-tide/15 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-[320px] w-[320px] rounded-full bg-sand/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <span className="block text-center text-xs uppercase tracking-[0.22em] text-tide">
          Leitsätze
        </span>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[28px] border border-deep/10 bg-foam/70 p-8 backdrop-blur"
            >
              <span className="font-display text-5xl leading-none text-tide/60">"</span>
              <blockquote className="mt-3 font-display text-lg italic leading-snug text-deep md:text-xl">
                {q}
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-tide">
                — Simone
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
