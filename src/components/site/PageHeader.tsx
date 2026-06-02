import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-tide/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -right-32 -top-10 h-[420px] w-[420px] rounded-full bg-sand/40 blur-3xl"
        />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-xs uppercase tracking-[0.22em] text-tide"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-4xl leading-[1.05] text-deep md:text-6xl"
        >
          {title}
          {italicTail && (
            <>
              {" "}
              <span className="italic text-tide">{italicTail}</span>
            </>
          )}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-deep/70"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </header>
  );
}
