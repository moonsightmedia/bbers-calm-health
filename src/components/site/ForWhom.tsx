import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Building2, Flower2 } from "lucide-react";

const tabs = [
  {
    id: "einzeln",
    label: "Einzelpersonen",
    icon: Sparkles,
    headline: "Für Menschen, die ihre Gesundheit selbst in die Hand nehmen.",
    text: "Du möchtest dich wieder kraftvoll, beweglich und klar fühlen? Gemeinsam entwickeln wir einen Weg, der zu deinem Leben passt — ohne Druck, dafür mit langfristiger Wirkung.",
    points: ["Standortbestimmung & individuelle Ziele", "Bewegung, die in deinen Alltag passt", "Resilienz für stressige Lebensphasen"],
  },
  {
    id: "unternehmen",
    label: "Unternehmen",
    icon: Building2,
    headline: "Für Organisationen, die Gesundheit kulturell verankern.",
    text: "Ich entwickle BGM-Programme, die wirken — strategisch fundiert und gleichzeitig nah an den Menschen, die sie erreichen sollen.",
    points: ["Analyse & Strategie für nachhaltiges BGM", "Workshops, Vorträge & Programme", "Begleitung von Führungskräften"],
  },
  {
    id: "wechseljahre",
    label: "Frauen in den Wechseljahren",
    icon: Flower2,
    headline: "Für Frauen, die diese Lebensphase aktiv gestalten wollen.",
    text: "Die Wechseljahre sind kein Defizit — sondern eine Phase, in der Bewegung, Resilienz und liebevolle Selbstführung besonders viel bewirken können.",
    points: ["Spezifisches Wissen rund um die Wechseljahre", "Hormonsensible Bewegung & Ernährungstipps", "Mentale Stärke & neue Selbstverständlichkeit"],
  },
];

export function ForWhom() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="fuer-wen" className="relative overflow-hidden bg-deep py-28 text-foam md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-tide/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-sand/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-sand">Für wen</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Drei Wege, <span className="italic text-sand">ein Anliegen.</span>
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