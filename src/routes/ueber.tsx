import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSimone } from "@/components/site/AboutSimone";
import { QuotesBand } from "@/components/site/QuotesBand";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/ueber")({
  head: () =>
    pageHead({
      title: "Über Simone — Physiotherapeutin in Wuppertal",
      description:
        "Über 30 Jahre Physiotherapie, 15 Jahre Kursleitung, 10 Jahre Gesundheitstage — Simones Vita, Qualifikationen und ganzheitliches Verständnis von Gesundheit.",
      path: "/ueber",
      ogTitle: "Über Simone Rothlübbers",
      ogDescription:
        "Physiotherapeutin, Resilienztrainerin, Faszientrainerin und psychologische Beraterin aus Wuppertal.",
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
