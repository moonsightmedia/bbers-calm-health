## Inhalte + echte Unterseiten

Zwei Teile: (A) Inhalte aus Simones Notizen einarbeiten, (B) echte Unterseiten statt nur Hash-Anker — jede mit eigenem SEO-Tag und teilbarer URL.

## A) Unterseiten-Struktur (neu)

```text
src/routes/
  index.tsx          /              Startseite (Teaser aller Bereiche)
  angebote.tsx       /angebote      Übersicht aller 4 Angebotsbereiche
  workshops.tsx      /workshops     Komplette Workshop-Liste
  fuer-wen.tsx       /fuer-wen      Zielgruppen (4 Tabs)
  ueber.tsx          /ueber         Vita, Qualifikationen, Sinnsprüche
  bgm.tsx            /bgm           BGM-Detail + Referenzen (Helios, Vitra, Roche)
  kontakt.tsx        /kontakt       Kontaktdaten + Anfahrt
```

Jede Route bekommt eigenes `head()` mit individuellem Title, Description, og:title, og:description (kein Copy-Paste vom Home).

Navigation wird zu echten `<Link to="...">` umgebaut statt `<a href="#...">`.

**Shared Layout**: Navigation + Footer in `__root.tsx` (sind sie schon) — Inhalt der Unterseiten erscheint im `<Outlet />`.

## B) Inhalte aus Simones Notizen

### Startseite (Teaser)
- **Hero**: Headline „Leben im Gleichgewicht — innen wie außen" (Simones Leitsatz).
- **Approach**: Simones eigene Worte (Selbstwirksamkeit, ganzheitlich körperlich + geistig-seelisch).
- **Angebote-Teaser**: 4 kompakte Karten → linken auf `/angebote`.
- **Workshop-Teaser**: 3–4 ausgewählte Workshops → Link auf `/workshops`.
- **Über-Teaser**: Kurz-Vita + Foto → Link auf `/ueber`.
- **Sinnsprüche-Band**: Simones 3 Leitsätze.
- **CTA**: → `/kontakt`.

### /angebote
4 Bereiche, jeweils mit Detailtext:
1. Einzeltherapie & Personal Training (Physio, Hypnose, Hausbesuche, Heilpraktiker-VO, Abrechnung privat/HP)
2. Workshops & Kurse (Link → `/workshops`)
3. BGM (Link → `/bgm`)
4. Brain-Move für Kinder (NEU, 4–10 Jahre, Kitas/Grundschulen)

### /workshops
Alle 10 Workshops aus den Notizen mit je 1–2 Sätzen:
Kreuz mit dem Kreuz · Fasziengesundheit am Arbeitsplatz · Die Schulter · Wellness für das ISG · Koordinationstraining · Schulter-Nacken-Entspannung · Gesundes Krafttraining · Die Hände auf Händen tragen · Workshop Menopause · Brain-Move (Kinder & Eltern)

### /fuer-wen
4 Zielgruppen-Sektionen: Einzelpersonen · Unternehmen (BGM) · Frauen in Wechseljahren · Kinder & Jugendliche.

### /ueber
- Echte Vita: 53 J., 30+ J. Physio, 15 J. Kursleitung, 10 J. Gesundheitstage, 3 J. BGM.
- Stats-Block ersetzt durch `30+ J. Physio · 15 J. Kursleitung · 10 J. Gesundheitstage`.
- Qualifikations-Badges (Physio & sektorale Heilpraktikerin · Resilienz · Faszien · Psych. Beraterin · Hypnose · Qigong/Feldenkrais/Alexandertechnik/Atem/Achtsamkeit).
- Sinnsprüche-Sektion.

### /bgm
- BGM-Programmbeschreibung (§ 20 SGB V, Arbeitssicherheit, Gesundheitstage).
- Referenzen-Leiste: **Helios · Vitra · Roche** (Text-Badges, keine Logos ohne Freigabe).
- Förder-Hinweis mit Link zur BMI-Förderseite.
- CTA → `/kontakt`.

### /kontakt
- `hallo@simone-rothlübbers.de`
- `0176 31345153`
- Röttgen 123, 42109 Wuppertal
- Kein Formular-Backend in diesem Schritt (mailto + tel-Links).

### Footer
Echte Kontaktdaten, Nav-Links auf die neuen Routen, Platzhalter-Links für Impressum/Datenschutz (kommen separat).

## Wieder­verwendung
Bestehende Komponenten (`Hero`, `Approach`, `Offerings`, `ForWhom`, `AboutSimone`, `CtaBand`, `SectionTransition`, `WaveDivider`, `FloatingAccent`) werden weiter genutzt — die Unterseiten setzen sich aus diesen Bausteinen + neuen kleineren Sub-Komponenten (Workshop-Karte, Qualifikations-Badge, Referenz-Leiste) zusammen. Design, Farben, Übergänge bleiben unverändert.

## Was NICHT enthalten ist
- Kein Backend / Kontaktformular (separater Schritt).
- Keine Impressum-/Datenschutz-Inhalte (kommen, wenn Rechtsdaten da sind).
- Keine neuen Bilder generiert — bestehende Assets bleiben.

## Hinweis Umlaut-Domain
`hallo@simone-rothlübbers.de` wird im UI mit Umlaut angezeigt; falls die Mailbox technisch unter Punycode (`xn--simone-rothlbbers-elb.de`) liegt, ist das später ein einfacher Tausch.
