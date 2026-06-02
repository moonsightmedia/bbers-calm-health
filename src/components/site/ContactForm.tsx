import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { submitContactMessage } from "@/lib/contact.functions";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an.").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().max(50).optional(),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, "Bitte schreibe ein paar Zeilen mehr.").max(2000),
  website: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const submit = useServerFn(submitContactMessage);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "", website: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    try {
      await submit({ data: values });
      toast.success("Vielen Dank — deine Nachricht ist angekommen.");
      reset();
      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Etwas ist schiefgelaufen.";
      toast.error(message);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[28px] border border-deep/10 bg-card p-10 text-center"
      >
        <h3 className="font-display text-2xl text-deep">Danke für deine Nachricht.</h3>
        <p className="mt-3 text-sm text-deep/70">
          Ich melde mich in der Regel innerhalb von 1–2 Werktagen bei dir zurück.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-tide underline-offset-4 hover:underline"
        >
          Weitere Nachricht schreiben
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[28px] border border-deep/10 bg-card p-6 md:p-10"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name *" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register("name")}
            className="contact-input"
          />
        </Field>
        <Field label="E-Mail *" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className="contact-input"
          />
        </Field>
        <Field label="Telefon (optional)" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className="contact-input"
          />
        </Field>
        <Field label="Betreff (optional)" error={errors.subject?.message}>
          <input type="text" {...register("subject")} className="contact-input" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Nachricht *" error={errors.message?.message}>
          <textarea
            rows={6}
            {...register("message")}
            className="contact-input resize-y min-h-[140px]"
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-deep/60">
          Mit dem Absenden erklärst du dich einverstanden, dass deine Angaben
          zur Bearbeitung deiner Anfrage gespeichert werden.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-deep px-6 py-3 text-sm text-foam transition-colors hover:bg-tide disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Wird gesendet…
            </>
          ) : (
            <>
              Nachricht senden <Send size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-tide">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-xs text-red-600">{error}</span>
      ) : null}
    </label>
  );
}
