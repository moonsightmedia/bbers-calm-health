import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an.").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Bitte schreibe ein paar Zeilen mehr.").max(2000),
  website: z.string().max(0).optional().or(z.literal("")),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "Simone Rothlübbers <hallo@simone-rothlübbers.de>";
  const to = process.env.CONTACT_TO_EMAIL ?? "hallo@simone-rothlübbers.de";

  if (!apiKey) {
    throw new Error("E-Mail-Versand ist nicht konfiguriert. Bitte versuche es später erneut.");
  }

  return { apiKey, from, to };
}

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      return { ok: true };
    }

    const { apiKey, from, to } = getContactConfig();
    const resend = new Resend(apiKey);

    const subject =
      data.subject?.trim() ||
      `Kontaktanfrage über die Website von ${data.name}`;

    const phoneLine = data.phone?.trim()
      ? `<p><strong>Telefon:</strong> ${escapeHtml(data.phone.trim())}</p>`
      : "";

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
        ${phoneLine}
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
      `,
    });

    if (error) {
      console.error("[contact] resend failed:", error);
      throw new Error("Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.");
    }

    return { ok: true };
  });
