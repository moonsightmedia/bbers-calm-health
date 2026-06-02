type Props = {
  eyebrow: string;
  title: string;
  italicTail?: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, italicTail, intro }: Props) {
  return (
    <header className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-tide/10 blur-3xl" />
        <div className="absolute -right-32 -top-10 h-[420px] w-[420px] rounded-full bg-sand/40 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <span className="text-xs uppercase tracking-[0.22em] text-tide">{eyebrow}</span>
        <h1 className="mt-5 font-display text-4xl leading-[1.05] text-deep md:text-6xl">
          {title}
          {italicTail && (
            <>
              {" "}
              <span className="italic text-tide">{italicTail}</span>
            </>
          )}
        </h1>
        {intro && (
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-deep/70">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
