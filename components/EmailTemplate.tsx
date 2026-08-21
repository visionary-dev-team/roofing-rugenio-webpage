import * as React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Section,
  Hr,
  Link,
  Button,
} from "@react-email/components";

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

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  address,
  service,
  date,
  message,
}) => {
  const displayService = serviceTitles[service] || service;

  return (
    <Html>
      <Body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          backgroundColor: "#f5f5f4",
          margin: 0,
          padding: "32px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e7e5e4",
          }}
        >
          {/* Header Banner - Matching Site Dark Ink #18181b */}
          <Section
            style={{
              backgroundColor: "#18181b",
              padding: "28px 32px",
              textAlign: "left",
              borderBottom: "4px solid #d95338",
            }}
          >
            <Text
              style={{
                color: "#d95338",
                fontSize: "12px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "2px",
                margin: "0 0 6px 0",
              }}
            >
              RUGERIOS ROOFING — WEB INQUIRY
            </Text>
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "800",
                margin: 0,
                lineHeight: "1.3",
              }}
            >
              🔨 New Free Inspection Request
            </Heading>
          </Section>

          {/* Body Content */}
          <Section style={{ padding: "32px" }}>
            <Text
              style={{
                color: "#57534e",
                fontSize: "14px",
                lineHeight: "1.6",
                marginTop: 0,
                marginBottom: "24px",
              }}
            >
              A new prospect has submitted the <strong>Free Inspection</strong> form on <strong>rugeriosroofing.com</strong>.
            </Text>

            {/* Customer Details Box - Styled like site cards */}
            <Section
              style={{
                backgroundColor: "#fafaf9",
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid #e7e5e4",
                borderLeft: "4px solid #d95338",
                marginBottom: "24px",
              }}
            >
              <Heading
                as="h3"
                style={{
                  color: "#1c1917",
                  fontSize: "15px",
                  fontWeight: "800",
                  margin: "0 0 16px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                👤 Customer Details
              </Heading>

              <Text style={{ margin: "8px 0", color: "#292524", fontSize: "15px" }}>
                <strong>Full Name:</strong> {name}
              </Text>

              <Text style={{ margin: "8px 0", color: "#292524", fontSize: "15px" }}>
                <strong>Phone:</strong>{" "}
                <Link
                  href={`tel:${phone}`}
                  style={{
                    color: "#d95338",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  {phone} 📞
                </Link>
              </Text>

              <Text style={{ margin: "8px 0", color: "#292524", fontSize: "15px" }}>
                <strong>Email:</strong>{" "}
                <Link
                  href={`mailto:${email}`}
                  style={{
                    color: "#d95338",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  {email} ✉️
                </Link>
              </Text>

              <Text style={{ margin: "8px 0", color: "#292524", fontSize: "15px" }}>
                <strong>Property Address:</strong> {address} 📍
              </Text>
            </Section>

            {/* Project Details Box */}
            <Section
              style={{
                backgroundColor: "#fafaf9",
                padding: "22px",
                borderRadius: "12px",
                border: "1px solid #e7e5e4",
                borderLeft: "4px solid #18181b",
                marginBottom: "28px",
              }}
            >
              <Heading
                as="h3"
                style={{
                  color: "#1c1917",
                  fontSize: "15px",
                  fontWeight: "800",
                  margin: "0 0 16px 0",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                🏠 Inspection Request Details
              </Heading>

              <Text style={{ margin: "8px 0", color: "#292524", fontSize: "15px" }}>
                <strong>Service Needed:</strong>{" "}
                <span
                  style={{
                    backgroundColor: "#ffedd5",
                    color: "#c2410c",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {displayService}
                </span>
              </Text>

              <Text style={{ margin: "8px 0", color: "#292524", fontSize: "15px" }}>
                <strong>Preferred Date:</strong> {date || "As soon as possible"} 📅
              </Text>

              {message && (
                <div style={{ marginTop: "16px" }}>
                  <Text
                    style={{
                      margin: "0 0 8px 0",
                      color: "#1c1917",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Tell Us About Your Roof:
                  </Text>
                  <Text
                    style={{
                      color: "#44403c",
                      backgroundColor: "#ffffff",
                      padding: "14px 16px",
                      borderRadius: "8px",
                      border: "1px solid #d6d3d1",
                      lineHeight: "1.6",
                      fontSize: "14px",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    "{message}"
                  </Text>
                </div>
              )}
            </Section>

            {/* Primary Action Button - Matching Site Button Style */}
            <Section style={{ textAlign: "center", margin: "24px 0 12px 0" }}>
              <Button
                href={`mailto:${email}?subject=RE:%20Rugerios%20Roofing%20Free%20Inspection%20Request`}
                style={{
                  backgroundColor: "#d95338",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "800",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 4px 12px rgba(217, 83, 56, 0.3)",
                }}
              >
                Reply to Customer Direct ✉️
              </Button>
            </Section>
          </Section>

          <Hr style={{ borderColor: "#e7e5e4", margin: 0 }} />

          {/* Footer */}
          <Section style={{ padding: "20px 32px", backgroundColor: "#fafaf9" }}>
            <Text
              style={{
                fontSize: "12px",
                color: "#78716c",
                textAlign: "center",
                margin: 0,
                lineHeight: "1.5",
              }}
            >
              Sent automatically from the official schedule form at{" "}
              <Link
                href="https://rugeriosroofing.com"
                style={{ color: "#d95338", textDecoration: "underline" }}
              >
                rugeriosroofing.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
