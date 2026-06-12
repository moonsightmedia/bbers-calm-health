import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Simone Rothlübbers" },
      { name: "description", content: "Anbieterkennzeichnung gemäß § 5 DDG." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Impressum"
        intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
      />
      <section className="mx-auto max-w-3xl px-6 pb-24 md:px-10">
        <div className="prose prose-deep max-w-none space-y-8 text-deep/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-deep">Anbieterin</h2>
            <p className="mt-3">
              Simone Rothlübbers<br />
              Röttgen 123<br />
              42109 Wuppertal<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Kontakt</h2>
            <p className="mt-3">
              Telefon: <a href="tel:+4917631345153" className="underline hover:text-tide">0176 31345153</a><br />
              E-Mail: <a href="mailto:hallo@simone-rothlübbers.de" className="underline hover:text-tide break-all">hallo@simone-rothlübbers.de</a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Berufsbezeichnung</h2>
            <p className="mt-3">
              Physiotherapeutin (verliehen in Deutschland)<br />
              Sektorale Heilpraktikerin (Physiotherapie) (verliehen in Deutschland)
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Zuständige Aufsichtsbehörde</h2>
            <p className="mt-3">
              Gesundheitsamt der Landeshauptstadt Düsseldorf<br />
              Kölner Straße 180<br />
              40227 Düsseldorf<br />
              Deutschland<br />
              <a
                href="https://www.duesseldorf.de/gesundheitsamt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-tide"
              >
                www.duesseldorf.de/gesundheitsamt
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Berufsrechtliche Regelungen</h2>
            <p className="mt-3">
              Es gelten u. a. das Masseur- und Physiotherapeutengesetz (MPhG), das
              Heilpraktikergesetz (HeilprG) sowie die jeweiligen Gebühren- und
              Berufsordnungen. Einsehbar z. B. unter{" "}
              <a
                href="https://www.gesetze-im-internet.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-tide"
              >
                gesetze-im-internet.de
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Umsatzsteuer</h2>
            <p className="mt-3 italic text-deep/60">
              [Bitte ergänzen: USt-IdNr. gemäß § 27 a UStG — oder Hinweis auf
              Kleinunternehmerregelung / Umsatzsteuerbefreiung für Heilbehandlungen
              gemäß § 4 Nr. 14 UStG]
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mt-3">
              Simone Rothlübbers, Anschrift wie oben.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Streitschlichtung</h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-tide"
              >
                ec.europa.eu/consumers/odr
              </a>
              . Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Haftung für Inhalte</h2>
            <p className="mt-3">
              Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
              dieser Website nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
              10 DDG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Haftung für Links</h2>
            <p className="mt-3">
              Diese Website enthält Links zu externen Websites Dritter, auf deren
              Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-deep">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser
              Website unterliegen dem deutschen Urheberrecht. Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
              des Urheberrechtes bedürfen der schriftlichen Zustimmung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
