import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const links = [
  { label: "Startseite", to: "/" },
  { label: "Angebote", to: "/angebote" },
  { label: "Workshops", to: "/workshops" },
  { label: "Für wen", to: "/fuer-wen" },
  { label: "Über Simone", to: "/ueber" },
  { label: "BGM", to: "/bgm" },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-foam/85 backdrop-blur-xl shadow-[0_4px_30px_-15px_rgba(26,74,74,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center">
          <img
            src={logoDark}
            alt="Simone Rothlübbers"
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm text-deep/75 transition-colors hover:text-deep data-[status=active]:text-deep data-[status=active]:font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/kontakt"
          className="hidden items-center gap-2 rounded-full bg-deep px-5 py-2.5 text-sm text-foam transition-all hover:bg-tide hover:shadow-[0_10px_30px_-10px_var(--tide)] lg:inline-flex"
        >
          Kontakt
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-deep/5 text-deep lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-deep/10 bg-foam/95 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile Navigation" className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-deep/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-deep px-5 py-3 text-foam"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
