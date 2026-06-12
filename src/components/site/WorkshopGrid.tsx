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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-deep/10 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sand/30 transition-transform duration-700 group-hover:scale-125" />
      <div className="relative flex flex-1 flex-col">
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

export function WorkshopGrid() {
  return (
    <div className="relative px-12 md:px-14">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {workshops.map((w) => (
            <CarouselItem
              key={w.title}
              className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <WorkshopCard workshop={w} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 border-deep/20 bg-card text-deep hover:bg-sand-light hover:text-deep md:-left-4" />
        <CarouselNext className="-right-2 border-deep/20 bg-card text-deep hover:bg-sand-light hover:text-deep md:-right-4" />
      </Carousel>
    </div>
  );
}
