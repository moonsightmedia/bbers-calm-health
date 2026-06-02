import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Simone Rothlübbers" },
      { name: "description", content: "Simone Rothlübbers · Röttgen 123, 42109 Wuppertal · hallo@simone-rothlübbers.de · 0176 31345153" },
      { property: "og:title", content: "Kontakt — Simone Rothlübbers" },
      { property: "og:description", content: "Ein erstes Gespräch ist kostenfrei und unverbindlich." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

const items = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "hallo@simone-rothlübbers.de",
    href: "mailto:hallo@simone-rothlübbers.de",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "0176 31345153",
    href: "tel:+4917631345153",
  },
  {
    icon: MapPin,
    label: "Praxis",
    value: "Röttgen 123, 42109 Wuppertal",
    href: "https://www.google.com/maps/search/?api=1&query=R%C3%B6ttgen+123+42109+Wuppertal",
  },
];

function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Lass uns ins"
        italicTail="Gespräch kommen."
        intro="Ein erstes Gespräch ist kostenfrei und unverbindlich. Schreib mir kurz, was dich beschäftigt — gemeinsam finden wir den passenden nächsten Schritt."
      />

      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-5 md:grid-cols-3">
            {items.map((it, i) => (
              <motion.a
                key={it.label}
                href={it.href}
                target={it.label === "Praxis" ? "_blank" : undefined}
                rel={it.label === "Praxis" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[24px] border border-deep/10 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sand/30 transition-transform duration-700 group-hover:scale-125" />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-deep text-foam transition-colors group-hover:bg-tide">
                    <it.icon size={18} strokeWidth={1.7} />
                  </span>
                  <div className="mt-5 text-xs uppercase tracking-[0.18em] text-tide">
                    {it.label}
                  </div>
                  <div className="mt-2 font-display text-lg text-deep break-words">
                    {it.value}
                  </div>
                  <ArrowRight
                    size={16}
                    className="mt-5 text-deep/50 transition-all group-hover:translate-x-1 group-hover:text-tide"
                  />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-deep/10 bg-foam/70 p-8 text-sm text-deep/70 backdrop-blur md:p-10">
            <p>
              <span className="font-medium text-deep">Behandlung & Abrechnung:</span>{" "}
              Termine im eigenen Behandlungsraum sowie als Hausbesuch.
              Abrechnung über private Krankenkassen (bei vorhandenem Rezept)
              oder über die Heilpraktiker­verordnung — eine sektorale
              Heilpraktiker­erlaubnis für Physiotherapie liegt vor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
