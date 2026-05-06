## Ziel

Die Startseite soll sich nicht mehr wie eine Kette getrennter Sektionen anfühlen, sondern wie eine durchgehende, fließende Landschaft. Wir bauen die bestehende `WaveDivider`-Idee zu einem konsistenten System aus, das Sektionsfarben sanft ineinander übergehen lässt.

## Strategie: 3 Ebenen Fluss

**1. Sektionsfarben verbinden (statt harter Wechsel)**

Aktuell wechseln die Sektionen abrupt zwischen `bg-foam`, `bg-gradient-to-b from-foam to-sand/30`, wieder `bg-foam` etc. — das erzeugt sichtbare Kanten. Wir definieren eine durchgehende Farbreise:

```text
Hero       foam → sand-light
Approach   sand-light → foam
Offerings  foam → sand
ForWhom    sand → foam
About      foam → tide/10
CTA        tide/10 → deep (bestehend)
```

Jede Sektion endet farblich dort, wo die nächste beginnt. Keine sichtbaren Bruchstellen mehr.

**2. Wellen-Übergänge zwischen jeder Sektion**

`WaveDivider` wird zur zentralen Übergangskomponente ausgebaut:
- 3–4 zusätzliche Wellenpfade (sanft, mittel, doppelt-geschichtet) als Varianten
- Neue Komponente `SectionTransition.tsx`, die Wellen + Farbübergang als ein Element kapselt — `from`/`to` Farb-Props, `variant`, optional `flip`
- Eingesetzt zwischen: Hero↔Approach, Approach↔Offerings, Offerings↔ForWhom, ForWhom↔About, About↔CTA
- Mehrlagige Wellen (2 SVGs übereinander, leicht versetzt, unterschiedliche Opazität) für Tiefenwirkung wie am Meer

**3. Schwebende Verbindungselemente**

Damit der Blick zwischen Sektionen nicht "anhält":
- Dezente Blob-Akzente (bestehende `BlobShape`) ragen über Sektionsgrenzen hinweg — z. B. ein Sand-Blob, der unten in Approach beginnt und oben in Offerings endet
- Sehr langsamer Parallax auf 1–2 dieser Blobs via `framer-motion useScroll`
- Vereinzelte Sand-/Tide-Punktreihen (wie schon im Hero) als wiederkehrendes "Strand"-Motiv an Übergängen
- Sektions-Padding leicht reduziert (py-28→py-24), damit die Übergänge selbst Atemraum bekommen

## Technische Umsetzung

**Geänderte/neue Dateien:**

```text
src/components/site/WaveDivider.tsx     erweitert: variants (calm, layered, deep), Höhen-Prop
src/components/site/SectionTransition.tsx   NEU: kombiniert 1–2 Wellen + Farbverlauf
src/components/site/FloatingAccent.tsx      NEU: schwebende Blobs/Punkte mit Parallax
src/routes/index.tsx                    SectionTransitions zwischen alle Sektionen
src/components/site/Approach.tsx        bg-Verlauf statt solid
src/components/site/Offerings.tsx       bg-Verlauf angepasst
src/components/site/ForWhom.tsx         bg-Verlauf statt solid
src/components/site/AboutSimone.tsx     bg-Verlauf statt solid
src/components/site/CtaBand.tsx         bestehender WaveDivider durch SectionTransition ersetzt
src/styles.css                          ggf. 1–2 neue Verlaufs-Tokens (--gradient-shore-soft etc.)
```

**Keine** Inhaltsänderungen, **keine** neuen Sektionen, **keine** Backend-Arbeit. Reines Visual-/Übergangs-Refinement im Frontend.

## Nicht im Scope

- Neue Inhalte oder Texte
- Änderungen an Typografie, Farbpalette oder Layout der einzelnen Sektionen selbst
- Unterseiten

Nach Freigabe setze ich das in einem Durchgang um.