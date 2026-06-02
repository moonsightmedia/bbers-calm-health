import { motion } from "framer-motion";

const references = ["Helios", "Vitra", "Roche"];

export function References() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[28px] border border-deep/10 bg-foam/70 p-8 backdrop-blur md:p-10"
    >
      <span className="text-xs uppercase tracking-[0.22em] text-tide">
        Bisher im Einsatz für
      </span>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {references.map((r, i) => (
          <motion.span
            key={r}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="rounded-full border border-deep/15 bg-card px-6 py-3 font-display text-xl text-deep"
          >
            {r}
          </motion.span>
        ))}
      </div>
      <p className="mt-6 text-sm text-deep/60">
        Auswahl bisheriger Auftraggeber im Bereich BGM und Gesundheitstage.
      </p>
    </motion.div>
  );
}
