import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

export function CtaBand() {
  return (
    <section id="kontakt" className="relative overflow-hidden">
      <WaveDivider className="block h-16 w-full text-deep md:h-24" fill="currentColor" />

      <div className="relative bg-deep py-28 text-foam md:py-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-tide/40 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-[360px] w-[360px] rounded-full bg-sand/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl px-6 text-center md:px-10"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-sand">Kontakt</span>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
            Lass uns ins <br />
            <span className="italic text-sand">Gespräch kommen.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-foam/75">
            Ein erstes Gespräch ist kostenfrei und unverbindlich. Schreib mir,
            was dich beschäftigt — gemeinsam finden wir den passenden nächsten Schritt.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hallo@simone-rothluebbers.de"
              className="group inline-flex items-center gap-3 rounded-full bg-sand px-7 py-4 text-deep transition-all hover:bg-foam hover:shadow-glow"
            >
              <Mail size={18} />
              hallo@simone-rothluebbers.de
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}