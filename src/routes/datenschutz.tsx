import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — Simone Rothlübbers" },
      {
        name: "description",
        content:
          "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutz"
        intro="Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß Art. 13 DSGVO."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-10">
        <div className="space-y-8 text-deep/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-deep">1. Verantwortliche</h2>
            <p className="mt-3">
              Simone Rothlübbers<br />
              Röttgen 123, 42109 Wuppertal<br />
              E-Mail: <a href="mailto:hallo@simone-rothlübbers.de" className="underline hover:text-tide break-all">hallo@simone-rothlübbers.de</a><br />
              Telefon: <a href="tel:+4917631345153" className="underline hover:text-tide">0176 31345153</a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">2. Aufruf der Website (Server-Logs)</h2>
            <p className="mt-3">
              Beim Aufruf dieser Website werden durch den Hosting-Provider technisch
              notwendige Daten in Server-Logfiles erfasst (z. B. IP-Adresse, Datum/
              Uhrzeit, abgerufene Seite, Browser, Betriebssystem). Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und
              stabilen Betrieb der Website). Die Daten werden nach kurzer Zeit gelöscht,
              soweit sie nicht zur Sicherheitsanalyse benötigt werden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">3. Hosting</h2>
            <p className="mt-3">
              Diese Website wird bei Vercel Inc. gehostet, der die für den
              Betrieb erforderlichen Daten in unserem Auftrag verarbeitet
              (Auftragsverarbeitung gem. Art. 28 DSGVO).
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">4. Kontaktformular</h2>
            <p className="mt-3">
              Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen
              Daten (Name, E-Mail-Adresse, optional Telefon und Betreff, Nachricht)
              zur Bearbeitung Ihrer Anfrage per E-Mail an uns übermittelt. Der Versand
              erfolgt über den Dienst Resend (Auftragsverarbeitung gem. Art. 28 DSGVO).
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw.
              lit. f (berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Die
              Daten werden gelöscht, sobald sie für den Zweck der Verarbeitung nicht
              mehr erforderlich sind, spätestens nach Ablauf gesetzlicher
              Aufbewahrungsfristen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">5. Kontaktaufnahme per E-Mail oder Telefon</h2>
            <p className="mt-3">
              Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre Angaben
              zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">6. Google Fonts</h2>
            <p className="mt-3">
              Diese Website lädt Schriftarten von Google Fonts
              (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
              Dabei wird beim Aufruf der Website Ihre IP-Adresse an Google übertragen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (ansprechende
              Darstellung). Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-tide"
              >
                policies.google.com/privacy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">7. Cookies</h2>
            <p className="mt-3">
              Diese Website setzt ausschließlich technisch notwendige Cookies, soweit
              dies für den Betrieb erforderlich ist. Tracking- oder Analyse-Cookies
              werden nicht eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">8. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft (Art. 15), Berichtigung
              (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
              Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht (Art. 21
              DSGVO). Wenden Sie sich dazu formlos an die oben genannten Kontaktdaten.
            </p>
            <p className="mt-3">
              Es besteht außerdem ein Beschwerderecht bei einer Datenschutz-Aufsichts­behörde.
              Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">9. Datensicherheit</h2>
            <p className="mt-3">
              Die Übertragung dieser Website erfolgt verschlüsselt per HTTPS. Wir
              treffen angemessene technische und organisatorische Maßnahmen, um Ihre
              Daten vor unbefugtem Zugriff zu schützen.
            </p>
          </div>

          <p className="text-sm text-deep/55">Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}</p>
        </div>
      </section>
    </>
  );
}
