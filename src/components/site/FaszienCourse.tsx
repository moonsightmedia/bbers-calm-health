import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=tanzetage+wuppertal+Fuchsstraße+28+42285";

export function FaszienCourse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 rounded-[28px] border border-deep/10 bg-card p-8 md:p-10"
    >
      <span className="text-xs uppercase tracking-[0.22em] text-tide">
        Regelmäßiger Kurs
      </span>
      <h2 className="mt-4 font-display text-3xl text-deep md:text-4xl">
        Wöchentlicher Faszien-Kurs
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-deep/75">
        Geschmeidige Faszien für mehr Beweglichkeit und Wohlbefinden — in einer
        festen Gruppe, die sich jede Woche trifft. Ideal für alle, die Faszienarbeit
        regelmäßig in ihren Alltag integrieren möchten.
      </p>

      <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
        <li className="flex items-center gap-3 text-deep/85">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tide/15 text-tide">
            <Calendar size={18} strokeWidth={1.7} />
          </span>
          <span className="text-sm">Jeden Montag</span>
        </li>
        <li className="flex items-center gap-3 text-deep/85">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tide/15 text-tide">
            <Clock size={18} strokeWidth={1.7} />
          </span>
          <span className="text-sm">20:00 – 21:00 Uhr</span>
        </li>
        <li className="flex items-center gap-3 text-deep/85">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tide/15 text-tide">
            <MapPin size={18} strokeWidth={1.7} />
          </span>
          <span className="text-sm">
            Fuchsstraße 28, 42285 Barmen
            <span className="block text-deep/60">Tanzetage Wuppertal</span>
          </span>
        </li>
      </ul>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 border-b border-deep/30 pb-1 text-deep transition-colors hover:border-tide hover:text-tide"
      >
        Standort auf Google Maps <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}
