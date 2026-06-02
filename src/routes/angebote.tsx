import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Offerings } from "@/components/site/Offerings";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/angebote")({
  head: () => ({
    meta: [
      { title: "Angebote — Simone Rothlübbers" },
      { name: "description", content: "Einzeltherapie, Workshops, Betriebliches Gesundheits­management und Brain-Move für Kinder — vier Bereiche, ein ganzheitlicher Ansatz." },
      { property: "og:title", content: "Angebote — Simone Rothlübbers" },
      { property: "og:description", content: "Physiotherapie, Workshops, BGM und Brain-Move für Kinder." },
      { property: "og:url", content: "/angebote" },
    ],
    links: [{ rel: "canonical", href: "/angebote" }],
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
