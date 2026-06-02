import { motion } from "framer-motion";
import { Activity, Heart, Compass } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Bewegung",
    text: "Funktionelle, freudvolle Bewegung als Quelle von Beweglichkeit, Kraft und Lebensenergie — abgestimmt auf Lebensphase und Alltag.",
  },
  {
    icon: Heart,
    title: "Resilienz",
    text: "Innere Widerstandskraft aufbauen — durch Atem, Achtsamkeit, Schlafhygiene und einen bewussten Umgang mit dem eigenen Biorhythmus.",
  },
  {
    icon: Compass,
    title: "Begleitung",
    text: "Persönlich, ganzheitlich, auf Augenhöhe — mit dem Ziel, jeden Menschen in seine Selbstwirksamkeit zu führen.",
  },
];

export function Approach() {
  return (
    <section
      id="ansatz"
      className="relative py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--sand-light) 0%, var(--foam) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-tide">Mein Ansatz</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-deep md:text-5xl">
            Ganzheitlich denken, <br />
            <span className="italic">achtsam handeln.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-deep/70">
            Mein Verständnis von Gesundheit bezieht die geistig-seelische Ebene
            immer mit ein. Aus meiner eigenen Erfahrung und dem tiefen
            Verständnis für die Komplexität von Körper und Geist erarbeite ich
            für jeden Menschen seinen individuellen Weg.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[28px] border border-deep/8 bg-card p-9 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sand/40 transition-transform duration-700 group-hover:scale-125" />
              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-deep text-foam transition-colors group-hover:bg-tide">
                  <p.icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-7 font-display text-2xl text-deep">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-deep/70">{p.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
