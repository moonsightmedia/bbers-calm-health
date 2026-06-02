import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png.asset.json";

const navLinks = [
  { label: "Startseite", to: "/" },
  { label: "Angebote", to: "/angebote" },
  { label: "Workshops", to: "/workshops" },
  { label: "Für wen", to: "/fuer-wen" },
  { label: "Über Simone", to: "/ueber" },
  { label: "BGM", to: "/bgm" },
  { label: "Kontakt", to: "/kontakt" },
] as const;

export function Footer() {
  return (
    <footer className="bg-deep text-foam/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
              <circle cx="18" cy="18" r="17" fill="var(--sand)" />
              <path
                d="M8 22 C 13 16, 23 28, 28 18"
                stroke="var(--deep)"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="18" cy="13" r="2" fill="var(--deep)" />
            </svg>
            <span className="font-display text-lg text-foam">Simone Rothlübbers</span>
          </div>
          <p className="mt-5 max-w-md leading-relaxed">
            Leben im Gleichgewicht — innen wie außen. Physiotherapie, Resilienz
            und Betriebliches Gesundheitsmanagement aus Wuppertal.
          </p>
        </div>

        <div>
          <h4 className="font-display text-foam">Navigation</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-sand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-foam">Kontakt</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 shrink-0" />
              <a href="mailto:hallo@simone-rothlübbers.de" className="hover:text-sand break-all">
                hallo@simone-rothlübbers.de
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1 shrink-0" />
              <a href="tel:+4917631345153" className="hover:text-sand">
                0176 31345153
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0" />
              <span>Röttgen 123, 42109 Wuppertal</span>
            </li>
            <li className="pt-3 text-foam/55">Impressum · Datenschutz</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foam/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-foam/55 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Simone Rothlübbers. Alle Rechte vorbehalten.</span>
          <span>Mit Sorgfalt gestaltet.</span>
        </div>
      </div>
    </footer>
  );
}
