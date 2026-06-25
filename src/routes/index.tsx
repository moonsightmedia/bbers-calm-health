import { createFileRoute } from "@tanstack/react-router";
import { pageHead, websiteSchema } from "@/lib/seo";
import { Hero } from "@/components/site/Hero";
import { Approach } from "@/components/site/Approach";
import { Offerings } from "@/components/site/Offerings";
import { ForWhom } from "@/components/site/ForWhom";
import { AboutSimone } from "@/components/site/AboutSimone";
import { QuotesBand } from "@/components/site/QuotesBand";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTransition } from "@/components/site/SectionTransition";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Simone Rothlübbers | Physiotherapie, Resilienz & BGM in Wuppertal",
      description:
        "Ganzheitliche Physiotherapie, Resilienz-Training und BGM aus Wuppertal — für Menschen und Unternehmen, die in Bewegung bleiben wollen.",
      path: "/",
      ogTitle: "Simone Rothlübbers — Leben im Gleichgewicht",
      ogDescription: "Bewegung, Resilienz und persönliche Begleitung — innen wie außen.",
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(websiteSchema),
        },
      ],
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SectionTransition
        from="var(--foam)"
        to="var(--sand-light)"
        height={100}
      />
      <Approach />
      <Offerings compact />
      <SectionTransition
        from="var(--sand)"
        to="var(--deep)"
        height={140}
      />
      <ForWhom />
      <SectionTransition
        from="var(--deep)"
        to="var(--foam)"
        height={140}
      />
      <AboutSimone teaser />
      <QuotesBand />
      <CtaBand />
    </>
  );
}
