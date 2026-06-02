import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ForWhom } from "@/components/site/ForWhom";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTransition } from "@/components/site/SectionTransition";

export const Route = createFileRoute("/fuer-wen")({
  head: () => ({
    meta: [
      { title: "Für wen — Simone Rothlübbers" },
      { name: "description", content: "Für Einzelpersonen, Unternehmen, Frauen in den Wechseljahren und Kinder im Vorschul- und Grundschulalter — vier Zielgruppen, ein ganzheitlicher Ansatz." },
      { property: "og:title", content: "Für wen — Simone Rothlübbers" },
      { property: "og:description", content: "Angebote für Einzelpersonen, Unternehmen, Frauen in den Wechseljahren und Kinder." },
      { property: "og:url", content: "/fuer-wen" },
    ],
    links: [{ rel: "canonical", href: "/fuer-wen" }],
  }),
  component: FuerWenPage,
});

function FuerWenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Für wen"
        title="Vier Wege,"
        italicTail="ein Anliegen."
        intro="Mein Angebot richtet sich an Menschen in unterschiedlichen Lebens- und Arbeits­situationen — verbunden durch ein gemeinsames Ziel: mehr Selbst­wirksamkeit, mehr Gesundheit."
      />
      <SectionTransition
        from="var(--foam)"
        to="var(--deep)"
        accent="var(--tide)"
        height={140}
      />
      <ForWhom />
      <CtaBand from="var(--deep)" />
    </>
  );
}
