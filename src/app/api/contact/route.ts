import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(8)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "RESEND_NOT_CONFIGURED" }, { status: 501 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const target = process.env.CONTACT_TO_EMAIL || "hello@example.com";

    await resend.emails.send({
      from: "Ahmed Study Hub <onboarding@resend.dev>",
      to: target,
      subject: `رسالة جديدة من ${data.name}`,
      replyTo: data.email || undefined,
      text: `الاسم: ${data.name}\nالبريد: ${data.email || "غير متوفر"}\n\n${data.message}`
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
  }
}
