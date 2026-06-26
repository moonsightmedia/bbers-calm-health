import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { OG_IMAGE_ALT, OG_IMAGE_URL, personSchema } from "@/lib/seo";
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
      { name: "author", content: "Simone Rothlübbers" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Simone Rothlübbers" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
      { name: "theme-color", content: "#1a4a4a" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter+Tight:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        children:
          "(function(){var h=location.hostname;if(h==='xn--simone-rothlbbers-e3b.de'||h==='simone-rothlübbers.de'){location.replace('https://www.xn--simone-rothlbbers-e3b.de'+location.pathname+location.search+location.hash);}})();",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
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
    <div className="min-h-dvh bg-foam text-deep">
      <Navigation />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
