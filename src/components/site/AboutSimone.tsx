import { motion } from "framer-motion";
import portraitAsset from "@/assets/simone-portrait.jpg.asset.json";
const portrait = portraitAsset.url;

const stats = [
  { value: "30+", label: "Jahre Physiotherapie" },
  { value: "15", label: "Jahre Kursleitung" },
  { value: "10", label: "Jahre Gesundheitstage" },
];

const qualifications = [
  "Physiotherapeutin & sektorale Heilpraktikerin",
  "Resilienztrainerin",
  "Faszientrainerin",
  "Psychologische Beraterin",
  "Hypnose (nicht medizinisch)",
  "Qigong · Feldenkrais · Alexandertechnik",
  "Atemtechniken & Achtsamkeit",
];

type Props = {
  /** If true, render compact teaser variant for the homepage */
  teaser?: boolean;
};

export function AboutSimone({ teaser = false }: Props) {
  return (
    <section
      id="ueber"
      className="relative py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--foam) 0%, color-mix(in oklab, var(--tide) 12%, var(--foam)) 100%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px]">
            <div
              className="absolute inset-0 -translate-x-5 translate-y-5 bg-sand"
              style={{ borderRadius: "58% 42% 50% 50% / 50% 55% 45% 50%" }}
            />
            <div
              className="relative h-full w-full overflow-hidden shadow-soft"
              style={{ borderRadius: "58% 42% 50% 50% / 50% 55% 45% 50%" }}
            >
              <img
                src={portrait}
                alt="Simone Rothlübbers"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-tide">Über Simone</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-deep md:text-5xl">
            Erfahrung, die <br />
            <span className="italic">trägt und bewegt.</span>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-deep/75">
            <p>
              Als Physiotherapeutin und Faszientrainerin ist es mein innigster
              Wunsch, jeden Klienten und jede Klientin in die Selbst­wirksamkeit
              zu bringen. Über 30 Jahre Praxis, eine sektorale Heilpraktiker­erlaubnis
              und kontinuierliche Weiterbildung bilden dafür das Fundament.
            </p>
            {!teaser && (
              <p>
                Als Resilienz­trainerin, psychologische Beraterin und
                Hypnotiseurin stehen mir verschiedene Methoden zur Verfügung,
                die Menschen auf ihrem Weg zu mehr geistig-seelischer Gesundheit
                unterstützen — immer eingebettet in ein ganzheitliches Verständnis
                von Körper und Geist.
              </p>
            )}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-sand-light px-5 py-6 text-deep"
              >
                <div className="font-display text-3xl md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-deep/65">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {!teaser && (
            <div className="mt-10">
              <h3 className="text-xs uppercase tracking-[0.22em] text-tide">
                Qualifikationen
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {qualifications.map((q) => (
                  <span
                    key={q}
                    className="rounded-full border border-deep/15 bg-foam px-4 py-2 text-sm text-deep/80"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
