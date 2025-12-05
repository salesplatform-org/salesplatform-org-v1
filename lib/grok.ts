// path: lib/grok.ts
import { Stream } from 'openai/streaming';

const GROK_API_URL = "https://api.x.ai/v1/chat/completions";

export async function streamGrok(prompt: string, system: string = "You are a world-class sales agent.") {
  const response = await fetch(GROK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROK_API_KEY}`,
    },
    body: JSON.stringify({
      model: "grok-4.1-fast",
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      stream: true
    }),
  });

  if (!response.ok) throw new Error("Grok API error");

  return response.body;
}
