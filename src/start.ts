import { createStart, createMiddleware } from "@tanstack/react-start";

const CANONICAL_HOST = "www.xn--simone-rothlbbers-e3b.de";

const APEX_HOSTS = new Set([
  "xn--simone-rothlbbers-e3b.de",
  "simone-rothlübbers.de",
]);

const wwwRedirectMiddleware = createMiddleware().server(async ({ request, next }) => {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host && APEX_HOSTS.has(host)) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = CANONICAL_HOST;

    return new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  }

  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [wwwRedirectMiddleware],
}));
