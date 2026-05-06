import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { Approach } from "@/components/site/Approach";
import { Offerings } from "@/components/site/Offerings";
import { ForWhom } from "@/components/site/ForWhom";
import { AboutSimone } from "@/components/site/AboutSimone";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-foam text-deep">
      <Navigation />
      <Hero />
      <Approach />
      <Offerings />
      <ForWhom />
      <AboutSimone />
      <CtaBand />
      <Footer />
    </main>
  );
}
