import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required.")
    .max(100, "Full name is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "A valid phone number is required.")
    .max(30, "Phone number is too long."),

  email: z
    .string()
    .trim()
    .email("A valid email address is required.")
    .max(254, "Email address is too long."),

  service: z
    .string()
    .trim()
    .min(1, "Please select a service.")
    .max(100, "Service selection is too long."),

  reason: z
    .string()
    .trim()
    .min(3, "Please provide a reason for reaching out.")
    .max(300, "Reason is too long."),

  message: z
    .string()
    .trim()
    .max(5000, "Message is too long."),

  type: z
    .string()
    .trim()
    .max(50)
    .optional(),

  honeypot: z
    .string()
    .max(0, "Spam detected.")
    .optional(),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured correctly.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you provided.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
      fullName,
      phone,
      email,
      service,
      reason,
      message,
      type,
      honeypot,
    } = result.data;

    /*
     * Honeypot protection.
     *
     * Real visitors should leave this field empty.
     * Bots often fill every available input.
     */
    if (honeypot) {
      return NextResponse.json({
        success: true,
      });
    }

    const safeName = escapeHtml(fullName);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeReason = escapeHtml(reason);
    const safeMessage = escapeHtml(message);
    const safeType = escapeHtml(type ?? "General enquiry");

    const { data, error } = await resend.emails.send({
      from:
        process.env.SRCC_FROM_EMAIL ??
        "SRCC Website <onboarding@resend.dev>",

      to: [
        process.env.SRCC_CONTACT_EMAIL ??
          "info@smartroyalcareer.co.ke",
      ],

      replyTo: email,

      subject: `New SRCC Website Enquiry — ${service}`,

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>New SRCC Website Enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f4f4f5;
              font-family: Arial, Helvetica, sans-serif;
              color: #18181b;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 20px;
                overflow: hidden;
              "
            >

              <div
                style="
                  background: #24043d;
                  padding: 32px;
                  color: #ffffff;
                "
              >
                <div
                  style="
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #facc15;
                  "
                >
                  Smart Royal Career Consultant
                </div>

                <h1
                  style="
                    margin: 14px 0 0;
                    font-size: 30px;
                    line-height: 1.15;
                  "
                >
                  New Website Enquiry
                </h1>
              </div>

              <div style="padding: 32px;">
                <p
                  style="
                    margin-top: 0;
                    font-size: 14px;
                    line-height: 1.7;
                    color: #52525b;
                  "
                >
                  A visitor has submitted an enquiry through the
                  SRCC website.
                </p>

                <div
                  style="
                    margin-top: 24px;
                    padding: 20px;
                    background: #f5f3ff;
                    border-radius: 14px;
                  "
                >
                  <div
                    style="
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: 1.5px;
                      text-transform: uppercase;
                      color: #5b21b6;
                    "
                  >
                    Enquiry Pathway
                  </div>

                  <div
                    style="
                      margin-top: 8px;
                      font-size: 18px;
                      font-weight: 700;
                    "
                  >
                    ${safeType}
                  </div>
                </div>

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="margin-top: 28px;"
                >
                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-size: 12px;
                        color: #71717a;
                        width: 150px;
                      "
                    >
                      Full Name
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        font-size: 14px;
                        font-weight: 700;
                      "
                    >
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-size: 12px;
                        color: #71717a;
                      "
                    >
                      Phone
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        font-size: 14px;
                        font-weight: 700;
                      "
                    >
                      ${safePhone}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-size: 12px;
                        color: #71717a;
                      "
                    >
                      Email
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        font-size: 14px;
                        font-weight: 700;
                      "
                    >
                      ${safeEmail}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-size: 12px;
                        color: #71717a;
                      "
                    >
                      Service
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        font-size: 14px;
                        font-weight: 700;
                      "
                    >
                      ${safeService}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 10px 0;
                        font-size: 12px;
                        color: #71717a;
                        vertical-align: top;
                      "
                    >
                      Reason
                    </td>

                    <td
                      style="
                        padding: 10px 0;
                        font-size: 14px;
                        font-weight: 700;
                      "
                    >
                      ${safeReason}
                    </td>
                  </tr>
                </table>

                <div
                  style="
                    margin-top: 28px;
                    padding-top: 24px;
                    border-top: 1px solid #e4e4e7;
                  "
                >
                  <div
                    style="
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: 1.5px;
                      text-transform: uppercase;
                      color: #71717a;
                    "
                  >
                    Additional Message
                  </div>

                  <div
                    style="
                      margin-top: 10px;
                      font-size: 14px;
                      line-height: 1.8;
                      white-space: pre-wrap;
                    "
                  >
                    ${safeMessage || "No additional message provided."}
                  </div>
                </div>

                <div
                  style="
                    margin-top: 32px;
                    padding-top: 20px;
                    border-top: 1px solid #e4e4e7;
                    font-size: 11px;
                    color: #a1a1aa;
                  "
                >
                  Submitted through the Smart Royal Career Consultant
                  website.
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not send your enquiry right now. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred. Please try again.",
      },
      { status: 500 },
    );
  }
}