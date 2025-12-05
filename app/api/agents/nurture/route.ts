// path: app/api/agents/nurture/route.ts
import { NextResponse } from "next/server";
import { streamGrok } from "@/lib/grok";

export async function POST() {
  const stream = await streamGrok(
    "You are a customer success & expansion specialist. Review all customer data and generate: next drip email, upsell triggers, QBR agenda, referral request timing, health score."
  );

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
