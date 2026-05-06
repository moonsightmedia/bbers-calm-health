import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import coastal from "@/assets/coastal-walk.jpg";
import workshop from "@/assets/bgm-workshop.jpg";

const offers = [
  {
    eyebrow: "Für dich persönlich",
    title: "1:1 Begleitung",
    text: "Individuelle Begleitung für gesundheitsbewusste Menschen und Frauen in den Wechseljahren — Bewegung, Resilienz und Lebensqualität, abgestimmt auf deine Lebensphase.",
    bullets: ["Erstgespräch & Standortbestimmung", "Persönliches Bewegungs- & Resilienzprogramm", "Begleitung über mehrere Monate"],
    image: coastal,
    href: "#kontakt",
  },
  {
    eyebrow: "Für Unternehmen",
    title: "Betriebliches Gesundheitsmanagement",
    text: "Maßgeschneiderte BGM-Programme, Workshops und Vorträge — wirksam, alltagstauglich und nachhaltig in der Unternehmenskultur verankert.",
    bullets: ["Strategische BGM-Beratung", "Workshops zu Resilienz & Bewegung", "Programme für Führungskräfte"],
    image: workshop,
    href: "#bgm",
  },
];

export function Offerings() {
  return (
    <section id="angebote" className="relative bg-gradient-to-b from-foam to-sand/30 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-tide">Angebote</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-deep md:text-5xl">
              Wie wir <span className="italic">zusammenarbeiten</span>.
            </h2>
          </div>
          <p className="max-w-md text-deep/70">
            Zwei Wege — ein gemeinsames Ziel: Menschen und Organisationen
            stärken, die in Bewegung bleiben wollen.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative lg:col-span-6">
                <div className="absolute -inset-4 -z-10 rounded-[40px] bg-tide/15 blur-2xl" />
                <div
                  className="relative aspect-[5/4] w-full overflow-hidden shadow-soft"
                  style={{ borderRadius: "44% 56% 60% 40% / 48% 42% 58% 52%" }}
                >
                  <img
                    src={o.image}
                    alt={o.title}
                    width={1280}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-deep shadow-soft">
                  <span className="font-display text-lg">0{i + 1}</span>
                </span>
              </div>

              <div className="lg:col-span-6">
                <span className="text-xs uppercase tracking-[0.22em] text-tide">
                  {o.eyebrow}
                </span>
                <h3 className="mt-4 font-display text-3xl text-deep md:text-4xl">
                  {o.title}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-deep/75">{o.text}</p>
                <ul className="mt-7 space-y-3">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-deep/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tide" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={o.href}
                  className="mt-8 inline-flex items-center gap-2 border-b border-deep/30 pb-1 text-deep transition-colors hover:border-tide hover:text-tide"
                >
                  Mehr erfahren <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}