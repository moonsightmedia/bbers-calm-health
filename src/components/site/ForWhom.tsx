import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Building2, Flower2, Baby } from "lucide-react";

const tabs = [
  {
    id: "einzeln",
    label: "Einzelpersonen",
    icon: Sparkles,
    headline: "Für Menschen, die ihre Gesundheit selbst in die Hand nehmen.",
    text: "Du möchtest dich wieder kraftvoll, beweglich und klar fühlen? Gemeinsam entwickeln wir deinen individuellen Weg zu mehr Gesundheit und Verständnis für die Auslöser des Ungleichgewichts im eigenen Körper.",
    points: [
      "Standortbestimmung & individuelle Ziele",
      "Physiotherapie, Personal Training & Hypnose",
      "Hausbesuche möglich · Abrechnung über Privat-KK oder HP-VO",
    ],
  },
  {
    id: "unternehmen",
    label: "Unternehmen",
    icon: Building2,
    headline: "Für Organisationen, die Gesundheit kulturell verankern.",
    text: "Maßgeschneiderte BGM-Programme nach Leitfaden Prävention (§ 20 SGB V) — strategisch fundiert, alltagstauglich und nah an den Menschen, die sie erreichen sollen.",
    points: [
      "Gesundheitstage & Workshops",
      "Resilienz, Bewegung, Faszien, Ergonomie",
      "Bereits im Einsatz u. a. bei Helios, Wamed, Roche",
    ],
  },
  {
    id: "wechseljahre",
    label: "Frauen in den Wechseljahren",
    icon: Flower2,
    headline: "Spezielle Seminare als Wertschätzung weiblicher Lebensphasen.",
    text: "Die Wechseljahre sind kein Defizit — sondern eine Phase, in der Bewegung, Resilienz und liebevolle Selbstführung besonders viel bewirken können. Auch als Workshop-Angebot für Unternehmen.",
    points: [
      "Hormonsensible Bewegung",
      "Mentale Stärke & neue Selbstverständnis­lichkeit",
      "Auch als Inhouse-Workshop buchbar",
    ],
  },
  {
    id: "kinder",
    label: "Kinder & Jugendliche",
    icon: Baby,
    headline: "Brain-Move für Kitas, Grundschulen und Bildungsträger.",
    text: "Ein Koordinations- und Bewegungstraining, das neue Verschaltungen im Gehirn anregt — für mehr Konzentration, bessere Merkfähigkeit und sicherere Bewegungsabläufe. Eltern und Erzieher können aktiv teilnehmen.",
    points: [
      "Zielgruppe: 4–10 Jahre",
      "Koordination, Konzentration & Spaß",
      "Workshops mit Eltern- & Erzieher-Beteiligung & Handout",
    ],
  },
];

export function ForWhom() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="fuer-wen" className="relative overflow-hidden bg-deep py-28 text-foam md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-tide/25 blur-3xl" />
        <div className="absolute right-[-10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-sand/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-sand">Für wen</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Vier Wege, <span className="italic text-sand">ein Anliegen.</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {tabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition-all ${
                  isActive
                    ? "border-sand bg-sand text-deep"
                    : "border-foam/25 text-foam/80 hover:border-foam/50 hover:text-foam"
                }`}
              >
                <t.icon size={16} strokeWidth={1.7} />
                {t.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid gap-10 rounded-[32px] border border-foam/10 bg-foam/5 p-8 backdrop-blur md:grid-cols-2 md:p-12"
          >
            <div>
              <h3 className="font-display text-2xl leading-snug text-foam md:text-3xl">
                {current.headline}
              </h3>
              <p className="mt-5 leading-relaxed text-foam/75">{current.text}</p>
            </div>
            <ul className="space-y-4">
              {current.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl bg-foam/5 px-5 py-4 text-foam/90"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sand" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
