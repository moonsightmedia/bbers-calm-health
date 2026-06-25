import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHeader } from "@/components/site/PageHeader";
import { ForWhom } from "@/components/site/ForWhom";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTransition } from "@/components/site/SectionTransition";

export const Route = createFileRoute("/fuer-wen")({
  head: () =>
    pageHead({
      title: "Für wen — Simone Rothlübbers",
      description:
        "Für Einzelpersonen, Unternehmen, Frauen in den Wechseljahren und Kinder im Vorschul- und Grundschulalter — vier Zielgruppen, ein ganzheitlicher Ansatz.",
      path: "/fuer-wen",
      ogDescription:
        "Angebote für Einzelpersonen, Unternehmen, Frauen in den Wechseljahren und Kinder.",
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
