import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import iconDark from "@/assets/icon-dark.png.asset.json";
import iconLight from "@/assets/icon-light.png.asset.json";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-foam px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-deep">404</h1>
        <h2 className="mt-4 font-display text-xl text-deep">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-deep/70">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-deep px-5 py-2.5 text-sm text-foam transition-colors hover:bg-tide"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Simone Rothlübbers — Ganzheitliche Gesundheit, Resilienz & Bewegung" },
      { name: "description", content: "Physiotherapie, Resilienz & Betriebliches Gesundheitsmanagement aus Wuppertal — Simone Rothlübbers begleitet Menschen und Unternehmen zu mehr Gesundheit und innerer Stärke." },
      { name: "author", content: "Simone Rothlübbers" },
      { property: "og:title", content: "Simone Rothlübbers — Ganzheitliche Gesundheit" },
      { property: "og:description", content: "Leben im Gleichgewicht — innen wie außen. Physiotherapie, Resilienz, BGM und Brain-Move für Kinder." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Simone Rothlübbers" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter+Tight:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-foam text-deep">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
