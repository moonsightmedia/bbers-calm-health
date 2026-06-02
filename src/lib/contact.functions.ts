import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an.").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Bitte schreibe ein paar Zeilen mehr.").max(2000),
  // Honeypot — bots fill this; humans don't see it.
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // Silently accept honeypot submissions.
      return { ok: true };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject || null,
      message: data.message,
    });

    if (error) {
      console.error("[contact] insert failed:", error);
      throw new Error("Nachricht konnte nicht gespeichert werden. Bitte versuche es später erneut.");
    }

    return { ok: true };
  });
