import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSimone } from "@/components/site/AboutSimone";
import { QuotesBand } from "@/components/site/QuotesBand";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/ueber")({
  head: () => ({
    meta: [
      { title: "Über Simone — Physiotherapeutin in Wuppertal" },
      { name: "description", content: "Über 30 Jahre Physiotherapie, 15 Jahre Kursleitung, 10 Jahre Gesundheitstage — Simones Vita, Qualifikationen und ganzheitliches Verständnis von Gesundheit." },
      { property: "og:title", content: "Über Simone Rothlübbers" },
      { property: "og:description", content: "Physiotherapeutin, Resilienztrainerin, Faszientrainerin und psychologische Beraterin aus Wuppertal." },
      { property: "og:url", content: "/ueber" },
    ],
    links: [{ rel: "canonical", href: "/ueber" }],
  }),
  component: UeberPage,
});

function UeberPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über Simone"
        title="Erfahrung,"
        italicTail="die trägt und bewegt."
        intro="53 Jahre, über 30 Jahre Physiotherapie — und ein tiefes, ganzheitliches Verständnis von Körper, Geist und Selbstwirksamkeit."
      />
      <AboutSimone />
      <QuotesBand />
      <CtaBand />
    </>
  );
}
