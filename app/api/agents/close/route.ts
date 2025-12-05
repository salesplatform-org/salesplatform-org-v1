// path: app/api/agents/close/route.ts
import { NextResponse } from "next/server";
import { streamGrok } from "@/lib/grok";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

export async function POST(req: Request) {
  const { dealId } = await req.json();

  // Generate proposal + Stripe link with 1% fee baked in
  const stream = await streamGrok(
    `Create a stunning HTML sales proposal for Deal ID ${dealId}. Include pricing, terms, ROI, and a Stripe Checkout button with a 1% salesplatform.org success fee.`
  );

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
