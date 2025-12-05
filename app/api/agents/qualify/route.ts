// path: app/api/agents/qualify/route.ts
import { NextResponse } from "next/server";
import { streamGrok } from "@/lib/grok";

export async function POST(req: Request) {
  const { transcript } = await req.json();

  const stream = await streamGrok(
    `Analyze this sales call transcript and return a full MEDDPICC breakdown + score 1–10 for each category + overall close probability:\n\n${transcript}`
  );

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}
