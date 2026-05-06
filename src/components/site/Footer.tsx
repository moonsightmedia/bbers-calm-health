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
            Ganzheitliche Gesundheit, Resilienz und Bewegung — für Menschen
            und Organisationen, die in Bewegung bleiben wollen.
          </p>
        </div>

        <div>
          <h4 className="font-display text-foam">Navigation</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["Startseite", "#top"],
              ["Angebote", "#angebote"],
              ["Für wen", "#fuer-wen"],
              ["Über Simone", "#ueber"],
              ["BGM", "#bgm"],
              ["Kontakt", "#kontakt"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-sand">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-foam">Kontakt</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>hallo@simone-rothluebbers.de</li>
            <li>+49 (0) 000 0000000</li>
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