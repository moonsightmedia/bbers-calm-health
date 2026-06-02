import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { References } from "@/components/site/References";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/bgm")({
  head: () => ({
    meta: [
      { title: "BGM & Gesundheitstage — Simone Rothlübbers" },
      { name: "description", content: "BGM-Programme, Workshops und Gesundheitstage nach Leitfaden Prävention (§ 20 SGB V) — für Unternehmen, Kliniken und Einrichtungen." },
      { property: "og:title", content: "BGM — Simone Rothlübbers" },
      { property: "og:description", content: "Ganzheitliches Betriebliches Gesundheits­management für Unternehmen und Kliniken." },
      { property: "og:url", content: "/bgm" },
    ],
    links: [{ rel: "canonical", href: "/bgm" }],
  }),
  component: BgmPage,
});

const features = [
  "Gesundheitstage & BGM-Programme",
  "Workshops zu Resilienz, Bewegung & Ergonomie",
  "Spezielle Angebote für Frauen vor und in den Wechseljahren",
  "Brain-Move gegen Leistungsabfall am Nachmittag",
  "Monatliche Workshops zu speziellen Gesundheitsthemen",
  "Drei Jahre Erfahrung im BGM, u. a. im Bereich Arbeitssicherheit",
];

function BgmPage() {
  return (
    <>
      <PageHeader
        eyebrow="Betriebliches Gesundheitsmanagement"
        title="Gesundheit"
        italicTail="kulturell verankern."
        intro="BGM-Programme, die wirken — eingebettet in ein ganzheitliches Konzept zur Gesundheits­förderung der Mitarbeitenden. Inhalt und Qualifikationen entsprechen dem aktuellen Leitfaden Prävention nach § 20 Abs. 2 SGB V."
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <span className="text-xs uppercase tracking-[0.22em] text-tide">
                Resilienz along the line
              </span>
              <h2 className="mt-4 font-display text-3xl text-deep md:text-4xl">
                Mehr körperliche und geistige Widerstandskraft im
                beruflichen Alltag.
              </h2>
              <p className="mt-5 leading-relaxed text-deep/75">
                Schlafhygiene, Biorhythmus, Atemtechniken, Achtsamkeit und
                Bewegung als kleine „Resilienz-Häppchen" — alltagstauglich
                in die Arbeitsroutine integriert. Ergänzt durch tiefer­gehende
                Workshops und Gesundheitstage zu Faszien, Rücken, Schulter
                und Wechseljahren.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-deep/85">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tide/15 text-tide">
                      <Check size={12} strokeWidth={2.4} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 lg:col-span-5"
            >
              <References />

              <div className="rounded-[28px] border border-deep/10 bg-card p-8">
                <span className="text-xs uppercase tracking-[0.22em] text-tide">
                  Förderhinweis
                </span>
                <h3 className="mt-3 font-display text-xl text-deep">
                  BGM ist förderfähig.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/70">
                  Maßnahmen im Betrieblichen Gesundheits­management können
                  steuerlich begünstigt und in Teilen über öffentliche
                  Programme gefördert werden. Wir prüfen das gemeinsam für
                  Ihre Situation.
                </p>
                <a
                  href="https://www.bmi.bund.de/DE/themen/oeffentlicher-dienst/arbeiten-in-der-bundesverwaltung/foerderung-betriebliches-gesundheitsmanagement/foerderung-betriebliches-gesundheitsmanagement-artikel.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-b border-deep/30 pb-1 text-sm text-deep transition-colors hover:border-tide hover:text-tide"
                >
                  Förderhinweise BMI <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBand from="var(--foam)" />
    </>
  );
}
