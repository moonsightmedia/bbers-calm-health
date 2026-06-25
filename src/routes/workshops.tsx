import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHeader } from "@/components/site/PageHeader";
import { FaszienCourse } from "@/components/site/FaszienCourse";
import { WorkshopGrid } from "@/components/site/WorkshopGrid";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/workshops")({
  head: () =>
    pageHead({
      title: "Workshops & Kurse — Simone Rothlübbers",
      description:
        "Workshops zu Rücken, Faszien, Schulter, Koordination, Krafttraining, Wechseljahren und Brain-Move für Kinder — als Einzeltermin oder fortlaufende Reihe.",
      path: "/workshops",
      ogDescription:
        "Vielfältige Workshops zu Bewegung, Resilienz und Gesundheit — plus wöchentlicher Faszien-Kurs montags in Barmen.",
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
          <FaszienCourse />
          <WorkshopGrid />
        </div>
      </section>
      <CtaBand from="var(--foam)" />
    </>
  );
}
