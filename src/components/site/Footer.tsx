import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

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
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10"
      >
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img
              src={logoLight}
              alt="Simone Rothlübbers"
              className="h-16 w-auto md:h-20"
            />
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
            <li className="pt-3 flex gap-3 text-foam/55">
              <Link to="/impressum" className="hover:text-sand">Impressum</Link>
              <span aria-hidden>·</span>
              <Link to="/datenschutz" className="hover:text-sand">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="border-t border-foam/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-foam/55 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} Simone Rothlübbers. Alle Rechte vorbehalten.</span>
          <span>
            Webseite von{" "}
            <a
              href="https://moonsightmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foam/75 underline decoration-foam/30 underline-offset-2 transition-colors hover:text-sand hover:decoration-sand"
            >
              Moonsight Media
            </a>
          </span>
      </div>
      </div>
    </footer>
  );
}
