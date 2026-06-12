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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    text: "Koordination, Bewegung und Konzentration für Kinder im Vorschul- und Grundschulalter — gemeinsam mit Eltern und Erziehern.",
  },
];

function WorkshopCard({ workshop: w }: { workshop: Workshop }) {
  return (
    <article className="group flex h-full flex-col rounded-[24px] border border-deep/10 bg-card p-7 transition-shadow hover:shadow-soft">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-deep text-foam transition-colors group-hover:bg-tide">
            <w.icon size={18} strokeWidth={1.7} />
          </span>
          <span className="rounded-full bg-sand-light px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-deep/70">
            {w.tag}
          </span>
        </div>
        <h2 className="mt-5 font-display text-xl leading-snug text-deep">
          {w.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-deep/70">{w.text}</p>
      </div>
    </article>
  );
}

const navButtonClass =
  "static left-auto right-auto top-auto h-10 w-10 translate-x-0 translate-y-0 border-deep/20 bg-card text-deep shadow-sm hover:bg-sand-light hover:text-deep";

export function WorkshopGrid() {
  return (
    <div className="mt-16">
      <div className="mb-10 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.22em] text-tide">
          Workshop-Themen
        </span>
        <h2 className="mt-4 font-display text-3xl text-deep md:text-4xl">
          Beispielthemen für Workshops zum Durchklicken
        </h2>
        <p className="mt-4 leading-relaxed text-deep/70">
          Eine Auswahl möglicher Inhalte — entdecken Sie mit den Pfeilen
          Themen, die zu Ihrer Gruppe passen.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4 py-1">
          {workshops.map((w) => (
            <CarouselItem
              key={w.title}
              className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <WorkshopCard workshop={w} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex items-center justify-center gap-4">
          <CarouselPrevious className={navButtonClass} />
          <CarouselNext className={navButtonClass} />
        </div>
      </Carousel>
    </div>
  );
}
