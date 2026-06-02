const references = ["Helios", "Vitra", "Roche"];

export function References() {
  return (
    <div className="rounded-[28px] border border-deep/10 bg-foam/70 p-8 backdrop-blur md:p-10">
      <span className="text-xs uppercase tracking-[0.22em] text-tide">
        Bisher im Einsatz für
      </span>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {references.map((r) => (
          <span
            key={r}
            className="rounded-full border border-deep/15 bg-card px-6 py-3 font-display text-xl text-deep"
          >
            {r}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm text-deep/60">
        Auswahl bisheriger Auftraggeber im Bereich BGM und Gesundheitstage.
      </p>
    </div>
  );
}
