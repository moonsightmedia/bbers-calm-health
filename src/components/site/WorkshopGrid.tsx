import { motion } from "framer-motion";
import {
  Activity,
  Sparkles,
  Brain,
  Heart,
  HandHeart,
  Dumbbell,
  Flower2,
  Baby,
  ShieldCheck,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Workshop = {
  title: string;
  text: string;
  icon: LucideIcon;
  tag: string;
};

const workshops: Workshop[] = [
  {
    title: "Das Kreuz mit dem Kreuz",
    tag: "Rücken",
    icon: ShieldCheck,
    text: "Tiefenmuskulatur, autochthone Rückenmuskulatur, Bauch und Beckenboden — das Fundament für eine stabile Wirbelsäule.",
  },
  {
    title: "Fasziengesundheit am Arbeitsplatz",
    tag: "Faszien",
    icon: Waves,
    text: "Geschmeidige Faszien als Schlüssel für Beweglichkeit, Energie und schmerz­freies Sitzen im Büroalltag.",
  },
  {
    title: "Die Schulter — das besondere Gelenk",
    tag: "Schulter",
    icon: Activity,
    text: "Funktion verstehen, Beweglichkeit erhalten und typische Beschwerden gezielt vorbeugen.",
  },
  {
    title: "Wellness für das ISG",
    tag: "Rücken",
    icon: Heart,
    text: "Das ISG als Schaltstelle zwischen Oberkörper und Beinen — Übungen, die Blockaden und Schmerzen langfristig vermeiden.",
  },
  {
    title: "Koordinationstraining für Körper & Geist",
    tag: "Brain-Move",
    icon: Brain,
    text: "Über den Körper das Gehirn trainieren — mit Spaß und alltagstauglichen Anregungen für mehr Merkfähigkeit und Koordination.",
  },
  {
    title: "Entspannung für den Schulter-Nacken-Bereich",
    tag: "Entspannung",
    icon: Sparkles,
    text: "Triggerpunkte selbst behandeln, dehnen und funktionell kräftigen — für ein muskuläres Gleichgewicht im oberen Rücken.",
  },
  {
    title: "Gesundes Krafttraining",
    tag: "Kraft",
    icon: Dumbbell,
    text: "Mehr Kraft, weniger Pfunde: leichtes Training mit dem eigenen Körpergewicht aktiviert viele Muskelgruppen gleichzeitig.",
  },
  {
    title: "Die Hände auf Händen tragen",
    tag: "Hände",
    icon: HandHeart,
    text: "Einschlafende Hände, Karpaltunnel, Arthrose — Ursachen verstehen und Zusammenhänge im Körper erkennen.",
  },
  {
    title: "Workshop Menopause",
    tag: "Wechseljahre",
    icon: Flower2,
    text: "Bewegung, Resilienz und Wissen rund um die hormonelle Umstellung — eine wertschätzende Begleitung in einer besonderen Lebensphase.",
  },
  {
    title: "Brain-Move für Kinder & Eltern",
    tag: "Kinder",
    icon: Baby,
    text: "Koordination, Bewegung und Konzentration für Kinder im Vorschul- und Grundschulalter — gemeinsam mit den Eltern.",
  },
];

type Props = {
  /** If set, show only the first N workshops (for homepage teaser) */
  limit?: number;
};

export function WorkshopGrid({ limit }: Props) {
  const items = limit ? workshops.slice(0, limit) : workshops;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((w, i) => (
        <motion.article
          key={w.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-[24px] border border-deep/10 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sand/30 transition-transform duration-700 group-hover:scale-125" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-deep text-foam transition-colors group-hover:bg-tide">
                <w.icon size={18} strokeWidth={1.7} />
              </span>
              <span className="rounded-full bg-sand-light px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-deep/70">
                {w.tag}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl leading-snug text-deep">
              {w.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-deep/70">{w.text}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
