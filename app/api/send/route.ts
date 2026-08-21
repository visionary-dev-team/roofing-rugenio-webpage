import { EmailTemplate } from "@/components/EmailTemplate";
import { render } from "@react-email/render";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RESEND_EMAIL_TO;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Rugerios Roofing <no-reply@rugeriosroofing.com>";

    if (!apiKey || !recipientEmail) {
      console.error("Missing RESEND_API_KEY or RESEND_EMAIL_TO environment variables.");
      return Response.json(
        {
          error:
            "Server configuration error: RESEND_API_KEY and RESEND_EMAIL_TO must be configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, phone, address, service, date, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !address || !service) {
      return Response.json(
        {
          error:
            "Missing required fields: name, email, phone, address, and service are required.",
        },
        { status: 400 }
      );
    }

    const emailHtml = await render(
      EmailTemplate({
        name,
        email,
        phone,
        address,
        service,
        date,
        message,
      }) as React.ReactElement
    );

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `New Inspection Request from ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }

    return Response.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error processing send email request:", error);
    return Response.json(
      { error: "Internal server error while sending email" },
      { status: 500 }
    );
  }
}
