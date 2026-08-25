interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  date?: string;
  message?: string;
}

const serviceTitles: Record<string, string> = {
  "roof-replacement": "Roof Replacement",
  "roof-repair": "Roof Repair",
  "roof-inspection": "Roof Inspection",
  "storm-damage": "Storm Damage Restoration",
  "gutters": "Gutters & Drainage",
  "not-sure": "Not Sure Yet / Consultation",
};

export function renderEmailHtml({
  name,
  email,
  phone,
  address,
  service,
  date,
  message,
}: EmailTemplateProps): string {
  const displayService = serviceTitles[service] || service;
  const preferredDate = date || "As soon as possible";

  const sanitize = (str: string = "") =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safePhone = sanitize(phone);
  const safeAddress = sanitize(address);
  const safeService = sanitize(displayService);
  const safeDate = sanitize(preferredDate);
  const safeMessage = message ? sanitize(message) : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Free Inspection Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f4; margin: 0; padding: 32px 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); border: 1px solid #e7e5e4;">
    <!-- Header Banner -->
    <div style="background-color: #18181b; padding: 28px 32px; text-align: left; border-bottom: 4px solid #d95338;">
      <p style="color: #d95338; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px 0;">
        RUGERIOS ROOFING — WEB INQUIRY
      </p>
      <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; line-height: 1.3;">
        🔨 New Free Inspection Request
      </h1>
    </div>

    <!-- Body Content -->
    <div style="padding: 32px;">
      <p style="color: #57534e; font-size: 14px; line-height: 1.6; margin-top: 0; margin-bottom: 24px;">
        A new prospect has submitted the <strong>Free Inspection</strong> form on <strong>rugeriosroofing.com</strong>.
      </p>

      <!-- Customer Details Box -->
      <div style="background-color: #fafaf9; padding: 22px; border-radius: 12px; border: 1px solid #e7e5e4; border-left: 4px solid #d95338; margin-bottom: 24px;">
        <h3 style="color: #1c1917; font-size: 15px; font-weight: 800; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.8px;">
          👤 Customer Details
        </h3>
        <p style="margin: 8px 0; color: #292524; font-size: 15px;">
          <strong>Full Name:</strong> ${safeName}
        </p>
        <p style="margin: 8px 0; color: #292524; font-size: 15px;">
          <strong>Phone:</strong> <a href="tel:${safePhone}" style="color: #d95338; font-weight: 700; text-decoration: none;">${safePhone} 📞</a>
        </p>
        <p style="margin: 8px 0; color: #292524; font-size: 15px;">
          <strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #d95338; font-weight: 700; text-decoration: none;">${safeEmail} ✉️</a>
        </p>
        <p style="margin: 8px 0; color: #292524; font-size: 15px;">
          <strong>Property Address:</strong> ${safeAddress} 📍
        </p>
      </div>

      <!-- Project Details Box -->
      <div style="background-color: #fafaf9; padding: 22px; border-radius: 12px; border: 1px solid #e7e5e4; border-left: 4px solid #18181b; margin-bottom: 28px;">
        <h3 style="color: #1c1917; font-size: 15px; font-weight: 800; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.8px;">
          🏠 Inspection Request Details
        </h3>
        <p style="margin: 8px 0; color: #292524; font-size: 15px;">
          <strong>Service Needed:</strong> <span style="background-color: #ffedd5; color: #c2410c; padding: 4px 10px; border-radius: 6px; font-weight: 700; font-size: 14px;">${safeService}</span>
        </p>
        <p style="margin: 8px 0; color: #292524; font-size: 15px;">
          <strong>Preferred Date:</strong> ${safeDate} 📅
        </p>
        ${
          safeMessage
            ? `<div style="margin-top: 16px;">
                <p style="margin: 0 0 8px 0; color: #1c1917; font-size: 14px; font-weight: 700;">
                  Tell Us About Your Roof:
                </p>
                <p style="color: #44403c; background-color: #ffffff; padding: 14px 16px; border-radius: 8px; border: 1px solid #d6d3d1; line-height: 1.6; font-size: 14px; margin: 0; font-style: italic;">
                  "${safeMessage}"
                </p>
              </div>`
            : ""
        }
      </div>

      <!-- Action Button -->
      <div style="text-align: center; margin: 24px 0 12px 0;">
        <a href="mailto:${safeEmail}?subject=RE:%20Rugerios%20Roofing%20Free%20Inspection%20Request" style="background-color: #d95338; color: #ffffff; font-size: 15px; font-weight: 800; padding: 14px 28px; border-radius: 10px; text-decoration: none; display: inline-block; box-shadow: 0 4px 12px rgba(217, 83, 56, 0.3);">
          Reply to Customer Direct ✉️
        </a>
      </div>
    </div>

    <hr style="border: 0; border-top: 1px solid #e7e5e4; margin: 0;" />

    <!-- Footer -->
    <div style="padding: 20px 32px; background-color: #fafaf9;">
      <p style="font-size: 12px; color: #78716c; text-align: center; margin: 0; line-height: 1.5;">
        Sent automatically from the official schedule form at <a href="https://rugeriosroofing.com" style="color: #d95338; text-decoration: underline;">rugeriosroofing.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}
