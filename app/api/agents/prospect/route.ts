// path: app/api/agents/prospect/route.ts
import { NextResponse } from "next/server";
import { streamGrok } from "@/lib/grok";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const stream = await streamGrok(
    "Find 10 perfect ICP leads for a B2B SaaS company selling sales software. Return name, title, company, email, LinkedIn, and a hyper-personalized cold email subject + body."
  );

  // In production: parse, send via Resend, book via Nylas, insert into Supabase
  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
