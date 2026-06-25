import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHeader } from "@/components/site/PageHeader";
import { Offerings } from "@/components/site/Offerings";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/angebote")({
  head: () =>
    pageHead({
      title: "Angebote — Simone Rothlübbers",
      description:
        "Einzeltherapie, Workshops, Betriebliches Gesundheitsmanagement und Brain-Move für Kinder — vier Bereiche, ein ganzheitlicher Ansatz.",
      path: "/angebote",
      ogDescription: "Physiotherapie, Workshops, BGM und Brain-Move für Kinder.",
    }),
  component: AngebotePage,
});

function AngebotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Angebote"
        title="Vier Wege,"
        italicTail="ein Anliegen."
        intro="Jedes Angebot ist eingebettet in ein ganzheitliches Konzept zur Gesundheits­förderung — fundiert nach Leitfaden Prävention (§ 20 SGB V) und immer angepasst an den Menschen vor mir."
      />
      <Offerings />
      <CtaBand from="var(--sand)" />
    </>
  );
}
