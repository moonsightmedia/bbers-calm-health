import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { Approach } from "@/components/site/Approach";
import { Offerings } from "@/components/site/Offerings";
import { ForWhom } from "@/components/site/ForWhom";
import { AboutSimone } from "@/components/site/AboutSimone";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";
import { SectionTransition } from "@/components/site/SectionTransition";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-foam text-deep">
      <Navigation />
      <Hero />
      <SectionTransition
        from="var(--foam)"
        to="var(--sand-light)"
        height={100}
      />
      <Approach />
      <Offerings />
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
      <AboutSimone />
      <CtaBand />
      <Footer />
    </main>
  );
}
