import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  org?: string;
  role?: string;
  size?: string;
  city?: string;
  program?: string;
  when?: string;
  goal?: string;
};

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const FIELD_LABELS: Record<keyof ContactPayload, string> = {
  name: "Name",
  email: "Work email",
  phone: "Phone",
  org: "Organisation",
  role: "Role",
  size: "Group size",
  city: "City / destination",
  program: "Program type",
  when: "Preferred date",
  goal: "Goal",
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const lines: string[] = [];
  const rows: string[] = [];
  (Object.keys(FIELD_LABELS) as (keyof ContactPayload)[]).forEach((key) => {
    const value = body[key]?.toString().trim();
    if (!value) return;
    lines.push(`${FIELD_LABELS[key]}: ${value}`);
    rows.push(
      `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;">${escape(
        FIELD_LABELS[key]
      )}</td><td style="padding:6px 12px;white-space:pre-wrap;">${escape(value)}</td></tr>`
    );
  });

  const text = `New enquiry from corporateeventsindia.com\n\n${lines.join("\n")}`;
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#111;">
      <h2 style="margin:0 0 12px;">New enquiry from corporateeventsindia.com</h2>
      <table style="border-collapse:collapse;border:1px solid #eee;">${rows.join("")}</table>
    </div>
  `;

  try {
    await sendNotificationEmail({
      subject: `New enquiry — ${name}${body.org ? ` (${body.org})` : ""}`,
      text,
      html,
      replyTo: email,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Could not send email. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
