
# Startseite Simone Rothlübbers

Eine fließende, naturinspirierte One-Pager-Startseite (Meer & Küste als visuelles Leitmotiv) mit der vorgegebenen Farbpalette als Hauptträger des Designs. Ziel: ruhig, vertrauensvoll, einladend, hochwertig — eindeutig "Personenmarke" statt Agentur-Look.

## Designsprache

**Farben (semantische Tokens in `src/styles.css`)**
- Tiefes Petrol `#1a4a4a` → `--primary` (Headlines, Footer, starke Akzente)
- Türkis `#338483` → `--accent` (CTAs, Highlights, Hover)
- Sandbeige `#e4ce9e` → `--secondary` (warme Flächen, Blob-Hintergründe, Zahlen)
- Off-White `#f2f6f5` → `--background` (großzügige Atemflächen)
- Alle als `oklch()` definiert, hell- und dunkel-tauglich.

**Typografie**
- Headlines: *Fraunces* (warme, moderne Serif — weiblich, vertrauensvoll, nicht klischeehaft)
- Body: *Inter Tight* oder *DM Sans* (klar, ruhig)
- Großzügige Zeilenhöhe, viel Weißraum.

**Visuelle Sprache**
- Organische Blob- und Wellenformen (SVG) als wiederkehrendes Motiv — angelehnt an Küstenlinien und sanfte Wellen
- Sanfte Sand-zu-Petrol Verläufe, gelegentlich türkise Akzente
- Dezente Korn-/Noise-Textur für Wärme
- Sehr weiche Schatten, großzügige Border-Radien (24–48px)
- Subtile Scroll-Animationen mit `framer-motion` (fade/slide-in, Parallax bei Hero-Blob)

## Seitenstruktur (`/`)

```text
┌─ Sticky Navigation (transparent → solid bei Scroll)
│   Logomark + Wortmarke "Simone Rothlübbers"
│   Startseite · Angebote · Für wen · Über Simone · BGM · Kontakt
│   CTA-Button "Termin vereinbaren"
│
├─ 1. HERO
│   Links: Eyebrow "Ganzheitliche Gesundheit"
│          H1 "Bewegung, Resilienz und Begleitung — für ein Leben in Balance."
│          Lead-Text (2–3 Zeilen Positionierung)
│          Primary-CTA + sekundärer Link
│   Rechts: Organischer Blob mit Foto-Platzhalter (Simone),
│           umrahmt von Wellen-SVG, kleine Sand-Akzentkreise
│
├─ 2. ANSATZ — "Ganzheitlich denken, achtsam handeln"
│   3 Pfeiler-Karten: Bewegung · Resilienz · Persönliche Begleitung
│   Jede Karte mit lucide-Icon, weicher Form, Hover-Lift
│
├─ 3. ANGEBOTE — "Wie wir zusammenarbeiten"
│   Asymmetrisches 2-Spalten-Layout, alternierend:
│   • Einzelbegleitung (gesundheitsbewusste Menschen, Wechseljahre)
│   • BGM für Unternehmen (Workshops, Programme)
│   Jeweils Bild-Blob + Kurzbeschreibung + "Mehr erfahren"
│
├─ 4. FÜR WEN — Tab-/Pill-Switch
│   "Einzelpersonen"  ·  "Unternehmen"  ·  "Frauen in den Wechseljahren"
│   Inhalt wechselt mit kurzer Fade-Animation
│
├─ 5. ÜBER SIMONE — Vertrauen
│   Foto-Blob links, Story-Text rechts
│   3 dezente Zahlen/Kennwerte (z. B. Jahre Erfahrung, begleitete Menschen,
│   Unternehmenspartner) auf Sandbeige-Karten
│
├─ 6. CTA-BAND
│   Vollflächig Petrol/Türkis-Verlauf mit Wellen-SVG
│   "Lass uns ins Gespräch kommen." + Button "Kontakt aufnehmen"
│
└─ Footer (Petrol)
    Kontaktdaten · Navigation · Rechtliches (Platzhalter Impressum/Datenschutz)
```

## Technische Umsetzung

- **Routing**: nur `src/routes/index.tsx` ersetzen; spätere Unterseiten als eigene Route-Files (Konvention bereits etabliert).
- **Komponenten** unter `src/components/site/`:
  `Navigation.tsx`, `Hero.tsx`, `Approach.tsx`, `Offerings.tsx`,
  `ForWhom.tsx`, `AboutSimone.tsx`, `CtaBand.tsx`, `Footer.tsx`,
  plus `BlobShape.tsx` und `WaveDivider.tsx` für wiederverwendbare SVGs.
- **Design-Tokens**: alle Markenfarben + Gradient- und Shadow-Tokens in `src/styles.css` (`--gradient-tide`, `--shadow-soft`, `--radius-blob`).
- **Fonts**: via Google Fonts in `__root.tsx` `<head>`-Links eingebunden.
- **Animationen**: `framer-motion` (`bun add framer-motion`) — sparsame, langsame Easings.
- **Icons**: bestehendes `lucide-react`.
- **Bilder**: zunächst stilvolle Platzhalter (neutrale Porträt-Silhouette + Naturmotive) als generierte Assets in `src/assets/`. Echte Fotos kann Simone später ersetzen.
- **SEO**: deutscher Titel, Meta-Description, OG-Tags im Route-`head()`.
- **Responsive**: Mobile-first, Hero stapelt, Asymmetrie wird Vertikalrhythmus.

## Inhalte (Platzhalter-Texte auf Deutsch)

Alle Texte werden auf Deutsch in Simones ruhigem, vertrauensvollem Ton verfasst — als bearbeitbare Platzhalter, die sie später feinjustieren kann. Keine Lorem-Ipsum-Füllung.

## Nicht im Scope dieser Runde

- Unterseiten (Angebote, Für wen, Über Simone, BGM, Kontakt) — Navigation verlinkt vorerst auf Anker/`#`
- Kontaktformular-Backend / Lovable Cloud
- Echtes Bildmaterial von Simone
- Mehrsprachigkeit

Nach Freigabe und ggf. Designfeinschliff können wir die Unterseiten in einer zweiten Runde ergänzen.
