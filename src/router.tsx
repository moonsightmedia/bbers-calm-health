import { useEffect } from "react";
import { createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const CHUNK_RELOAD_KEY = "simone-rothluebbers-chunk-reload";
const CANONICAL_ORIGIN = "https://www.xn--simone-rothlbbers-e3b.de";

function isApexHost(hostname: string) {
  const host = hostname.toLowerCase();
  return host === "xn--simone-rothlbbers-e3b.de" || host === "simone-rothlübbers.de";
}

function redirectToCanonical() {
  window.location.replace(
    `${CANONICAL_ORIGIN}${window.location.pathname}${window.location.search}${window.location.hash}`,
  );
}

function isChunkLoadError(message: string) {
  return /Failed to fetch dynamically imported module|Loading chunk \d+ failed|Importing a module script failed|error loading dynamically imported module/i.test(
    message,
  );
}

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const chunkLoadError = isChunkLoadError(error.message);

  useEffect(() => {
    if (isApexHost(window.location.hostname)) {
      redirectToCanonical();
      return;
    }

    if (!chunkLoadError || sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
      return;
    }

    sessionStorage.setItem(CHUNK_RELOAD_KEY, "1");
    window.location.reload();
  }, [chunkLoadError]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-foam px-4 py-20">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-deep/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-deep"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <h1 className="font-display text-2xl text-deep">
          {chunkLoadError ? "Seite wird aktualisiert …" : "Etwas ist schiefgelaufen"}
        </h1>
        <p className="mt-2 text-sm text-deep/70">
          {chunkLoadError
            ? "Nach dem letzten Update wird die Seite neu geladen."
            : "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut."}
        </p>
        {import.meta.env.DEV && error.message && (
          <pre className="mt-4 max-h-40 overflow-auto rounded-md bg-deep/5 p-3 text-left font-mono text-xs text-deep">
            {error.message}
          </pre>
        )}
        {!chunkLoadError && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                sessionStorage.removeItem(CHUNK_RELOAD_KEY);
                router.invalidate();
                reset();
              }}
              className="inline-flex items-center justify-center rounded-full bg-deep px-5 py-2.5 text-sm text-foam transition-colors hover:bg-tide"
            >
              Erneut versuchen
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-deep/20 px-5 py-2.5 text-sm text-deep transition-colors hover:bg-deep/5"
            >
              Zur Startseite
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
