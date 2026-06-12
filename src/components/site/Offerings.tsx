import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartPulse, GraduationCap, Building2, Baby } from "lucide-react";

const offers = [
  {
    icon: HeartPulse,
    eyebrow: "1:1 Begleitung",
    title: "Einzeltherapie & Personal Training",
    text: "Physiotherapie, Personal Training und Hypnose im Behandlungsraum oder als Hausbesuch. Abrechnung über private Krankenkasse (Rezept) oder Heilpraktiker-VO — sektorale Heilpraktiker­erlaubnis für Physiotherapie liegt vor.",
    bullets: ["Physiotherapie & Faszientraining", "Personal Training & Bewegungs­programme", "Hypnose (nicht medizinisch)"],
    href: "/kontakt",
    cta: "Termin anfragen",
  },
  {
    icon: GraduationCap,
    eyebrow: "Workshops & Kurse",
    title: "Workshops & Kursangebote",
    text: "Vielfältige Workshops zu Rücken, Schulter, Faszien, Krafttraining und Achtsamkeit — buchbar einzeln oder als Reihe. Zusätzlich: wöchentlicher Faszien-Kurs montags 20:00–21:00 Uhr in der Fuchsstraße 28, 42285 Barmen.",
    bullets: ["Rücken, Faszien & Schulter", "Koordination & Krafttraining", "Wechseljahre · Brain-Move"],
    href: "/workshops",
    cta: "Workshops ansehen",
  },
  {
    icon: Building2,
    eyebrow: "Für Unternehmen",
    title: "Betriebliches Gesundheitsmanagement",
    text: "BGM-Programme und Gesundheitstage nach Leitfaden Prävention (§ 20 SGB V) — eingebettet in ein ganzheitliches Konzept zur Gesundheits­förderung der Mitarbeitenden. Drei Jahre Erfahrung in Kliniken und Firmen.",
    bullets: ["Gesundheitstage & BGM-Programme", "Resilienz & Arbeitssicherheit", "Referenzen: Helios · Wamed · Roche"],
    href: "/bgm",
    cta: "BGM entdecken",
  },
  {
    icon: Baby,
    eyebrow: "Neu",
    title: "Brain-Move für Kinder",
    text: "Koordinationstraining für Kitas, Grundschulen und Bildungsträger — für mehr Konzentration, bessere Gedächtnisleistung und sicherere Bewegungsabläufe im Sport und Alltag. Eltern und Erzieher können aktiv teilnehmen.",
    bullets: ["Zielgruppe: 4–10 Jahre", "Mehr Konzentration & Merkfähigkeit", "Workshops mit Eltern-Handout"],
    href: "/kontakt",
    cta: "Anfrage senden",
  },
];

type Props = {
  /** If true, render compact 4-card grid for the homepage teaser */
  compact?: boolean;
};

export function Offerings({ compact = false }: Props) {
  return (
    <section
      id="angebote"
      className="relative py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--foam) 0%, var(--sand) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-tide">Angebote</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-deep md:text-5xl">
              Wie wir <span className="italic">zusammenarbeiten</span>.
            </h2>
          </div>
          <p className="max-w-md text-deep/70">
            Vier Bereiche, ein Anliegen: Menschen, Organisationen und Kinder in
            ihre Selbst­wirksamkeit bringen.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {offers.map((o, i) => (
            <motion.article
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-deep/8 bg-card p-9 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sand/30 transition-transform duration-700 group-hover:scale-125" />
              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-foam transition-colors group-hover:bg-tide">
                    <o.icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-tide">
                    {o.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-deep md:text-3xl">
                  {o.title}
                </h3>
                <p className="mt-4 leading-relaxed text-deep/75">{o.text}</p>
                {!compact && (
                  <ul className="mt-5 space-y-2.5">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-deep/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tide" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  to={o.href}
                  className="mt-7 inline-flex items-center gap-2 self-start border-b border-deep/30 pb-1 text-deep transition-colors hover:border-tide hover:text-tide"
                >
                  {o.cta} <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
