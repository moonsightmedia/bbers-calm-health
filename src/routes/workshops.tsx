import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkshopGrid } from "@/components/site/WorkshopGrid";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops & Kurse — Simone Rothlübbers" },
      { name: "description", content: "Workshops zu Rücken, Faszien, Schulter, Koordination, Krafttraining, Wechseljahren und Brain-Move für Kinder — als Einzeltermin oder fortlaufende Reihe." },
      { property: "og:title", content: "Workshops & Kurse — Simone Rothlübbers" },
      { property: "og:description", content: "Über 10 fundierte Workshops rund um Bewegung, Resilienz und Gesundheit." },
      { property: "og:url", content: "/workshops" },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
  }),
  component: WorkshopsPage,
});

function WorkshopsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workshops & Kurse"
        title="Wissen,"
        italicTail="das in Bewegung bringt."
        intro="Jeder Workshop verbindet fundiertes Wissen mit alltagstauglichen Übungen — buchbar einzeln, als Reihe oder als Gesundheitstag für Unternehmen, Kliniken und Bildungsträger."
      />
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <WorkshopGrid />
        </div>
      </section>
      <CtaBand from="var(--foam)" />
    </>
  );
}
