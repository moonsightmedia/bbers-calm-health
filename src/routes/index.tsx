import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Approach } from "@/components/site/Approach";
import { Offerings } from "@/components/site/Offerings";
import { ForWhom } from "@/components/site/ForWhom";
import { AboutSimone } from "@/components/site/AboutSimone";
import { QuotesBand } from "@/components/site/QuotesBand";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionTransition } from "@/components/site/SectionTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simone Rothlübbers — Ganzheitliche Gesundheit, Resilienz & Bewegung" },
      { name: "description", content: "Physiotherapie, Resilienz-Training und Betriebliches Gesundheits­management aus Wuppertal — für Menschen und Unternehmen, die in Bewegung bleiben wollen." },
      { property: "og:title", content: "Simone Rothlübbers — Leben im Gleichgewicht" },
      { property: "og:description", content: "Bewegung, Resilienz und persönliche Begleitung — innen wie außen." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
        accent="var(--tide)"
        height={160}
      />
      <ForWhom />
      <SectionTransition
        from="var(--deep)"
        to="var(--foam)"
        accent="var(--tide)"
        height={160}
      />
      <AboutSimone teaser />
      <QuotesBand />
      <SectionTransition
        from="color-mix(in oklab, var(--tide) 12%, var(--foam))"
        to="var(--deep)"
        accent="var(--tide)"
        height={160}
      />
      <CtaBand />
    </>
  );
}
