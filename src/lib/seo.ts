const DEFAULT_SITE_URL = "https://www.xn--simone-rothlbbers-e3b.de";

export const SITE_URL = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

export const OG_IMAGE_PATH = "/og.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const OG_IMAGE_ALT = "Simone Rothlübbers — Physiotherapie, Resilienz & BGM in Wuppertal";

export function absoluteUrl(path: string) {
  if (path === "/" || path === "") {
    return `${SITE_URL}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

type PageHeadScript = {
  type: string;
  children: string;
};

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: string;
  scripts?: PageHeadScript[];
};

export function pageHead({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  robots,
  scripts,
}: PageHeadOptions) {
  const url = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(robots ? [{ name: "robots", content: robots }] : []),
      { property: "og:title", content: ogTitle ?? title },
      { property: "og:description", content: ogDescription ?? description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:title", content: ogTitle ?? title },
      { name: "twitter:description", content: ogDescription ?? description },
      { name: "twitter:image", content: OG_IMAGE_URL },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(scripts ? { scripts } : {}),
  };
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Simone Rothlübbers",
  alternateName: "Simone Rothlübbers — Physiotherapie & BGM",
  url: absoluteUrl("/"),
  publisher: {
    "@type": "Organization",
    name: "Simone Rothlübbers",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/favicon-192.png"),
    },
  },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Simone Rothlübbers",
  url: SITE_URL,
  image: OG_IMAGE_URL,
  jobTitle: "Physiotherapeutin & Resilienztrainerin",
  worksFor: {
    "@type": "Organization",
    name: "Simone Rothlübbers — Physiotherapie & BGM",
    url: absoluteUrl("/"),
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Röttgen 123",
    postalCode: "42109",
    addressLocality: "Wuppertal",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  telephone: "+49 176 31345153",
  email: "hallo@xn--simone-rothlbbers-e3b.de",
  areaServed: {
    "@type": "City",
    name: "Wuppertal",
  },
  knowsAbout: [
    "Physiotherapie",
    "Resilienztraining",
    "Betriebliches Gesundheitsmanagement",
    "Faszientraining",
    "Brain-Move",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": absoluteUrl("/kontakt"),
  name: "Simone Rothlübbers — Physiotherapie & BGM",
  url: absoluteUrl("/kontakt"),
  image: OG_IMAGE_URL,
  description:
    "Ganzheitliche Physiotherapie, Resilienz-Training und Betriebliches Gesundheitsmanagement in Wuppertal.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Röttgen 123",
    postalCode: "42109",
    addressLocality: "Wuppertal",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  telephone: "+49 176 31345153",
  email: "hallo@xn--simone-rothlbbers-e3b.de",
  areaServed: "Wuppertal",
};
