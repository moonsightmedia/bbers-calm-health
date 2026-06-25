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

type ContactPayload = z.infer<typeof ContactSchema>;

function buildContactNotificationEmail(data: ContactPayload, subject: string) {
  const receivedAt = new Date().toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "long",
    timeStyle: "short",
  });

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(subject);
  const safePhone = data.phone?.trim() ? escapeHtml(data.phone.trim()) : "";
  const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  const phoneRow = safePhone
    ? `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #e8eeed;color:#5f7371;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;width:120px;vertical-align:top;">
            Telefon
          </td>
          <td style="padding:14px 0 14px 16px;border-bottom:1px solid #e8eeed;color:#1a4a4a;font-size:15px;line-height:1.5;">
            <a href="tel:${safePhone.replace(/\s/g, "")}" style="color:#338483;text-decoration:none;">${safePhone}</a>
          </td>
        </tr>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Neue Kontaktanfrage</title>
</head>
<body style="margin:0;padding:0;background-color:#f2f6f5;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1a4a4a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f2f6f5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;background-color:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #e8eeed;">
          <tr>
            <td style="padding:28px 32px;background:linear-gradient(135deg,#1a4a4a 0%,#338483 100%);">
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(242,246,245,0.82);">
                Website · Kontaktformular
              </p>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;font-weight:500;color:#f2f6f5;">
                Neue Kontaktanfrage
              </h1>
              <p style="margin:12px 0 0;font-size:14px;line-height:1.5;color:rgba(242,246,245,0.88);">
                Eingegangen am ${escapeHtml(receivedAt)}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 10px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#5f7371;">
                Betreff
              </p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.35;color:#1a4a4a;">
                ${safeSubject}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e8eeed;">
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #e8eeed;color:#5f7371;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;width:120px;vertical-align:top;">
                    Name
                  </td>
                  <td style="padding:14px 0 14px 16px;border-bottom:1px solid #e8eeed;color:#1a4a4a;font-size:15px;line-height:1.5;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #e8eeed;color:#5f7371;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;width:120px;vertical-align:top;">
                    E-Mail
                  </td>
                  <td style="padding:14px 0 14px 16px;border-bottom:1px solid #e8eeed;color:#1a4a4a;font-size:15px;line-height:1.5;">
                    <a href="mailto:${safeEmail}" style="color:#338483;text-decoration:none;font-weight:600;">${safeEmail}</a>
                  </td>
                </tr>
                ${phoneRow}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <p style="margin:0 0 10px;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#5f7371;">
                Nachricht
              </p>
              <div style="padding:18px 20px;background-color:#f7faf9;border:1px solid #e8eeed;border-left:4px solid #338483;border-radius:16px;color:#1a4a4a;font-size:15px;line-height:1.65;">
                ${safeMessage}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;background-color:#f7faf9;border-top:1px solid #e8eeed;">
              <p style="margin:0;font-size:13px;line-height:1.6;color:#5f7371;">
                Antworte einfach auf diese E-Mail — deine Antwort geht direkt an <strong style="color:#1a4a4a;">${safeName}</strong>.
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-size:12px;line-height:1.5;color:#7a8f8d;">
          Simone Rothlübbers · simone-rothlübbers.de
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const phoneLine = data.phone?.trim() ? `Telefon: ${data.phone.trim()}\n` : "";

  const text = `Neue Kontaktanfrage über die Website
Eingegangen am ${receivedAt}

Betreff: ${subject}

Name: ${data.name}
E-Mail: ${data.email}
${phoneLine}
Nachricht:
${data.message}

---
Antworte auf diese E-Mail, um direkt an ${data.name} zu antworten.`;

  return { html, text };
}

function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Simone Rothlübbers <hallo@xn--simone-rothlbbers-e3b.de>";
  const to = process.env.CONTACT_TO_EMAIL ?? "hallo@xn--simone-rothlbbers-e3b.de";

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

    const { html, text } = buildContactNotificationEmail(data, subject);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[contact] resend failed:", error);
      throw new Error("Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.");
    }

    return { ok: true };
  });
