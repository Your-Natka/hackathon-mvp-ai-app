import { openai } from "@/lib/openai";

export async function getAIResponse(messages: any[]) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature: 0.2,
  });

  return res.choices[0].message.content;
}
