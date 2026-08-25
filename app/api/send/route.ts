import { renderEmailHtml } from "@/components/EmailTemplate";

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

    const emailHtml = renderEmailHtml({
      name,
      email,
      phone,
      address,
      service,
      date,
      message,
    });

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        reply_to: email,
        subject: `New Inspection Request from ${name}`,
        html: emailHtml,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      return Response.json(
        { error: (resendData as { message?: string })?.message || "Failed to send email" },
        { status: resendResponse.status }
      );
    }

    return Response.json({ message: "Email sent successfully", data: resendData });
  } catch (error) {
    console.error("Error processing send email request:", error);
    return Response.json(
      { error: "Internal server error while sending email" },
      { status: 500 }
    );
  }
}

