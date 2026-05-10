import OpenAI from "openai";
import { searchDocs } from "@/lib/search";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const USE_MOCK = true; // 👈 головний перемикач

export async function getAIResponse(messages: any[]) {
  const lastMessage = messages[messages.length - 1]?.content || "";

  const relevantDocs = searchDocs(lastMessage);

  const context = relevantDocs.map((d) => d.text).join("\n\n");

  // 🔥 MOCK режим (для демо)
  if (USE_MOCK) {
    return {
      answer:
        "AI demo mode: відповідь сформована на основі ГОСТ документів (mock режим)",
      sources: relevantDocs.map((d) => d.id),
    };
  }

  // 🤖 REAL AI режим
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Ти будівельний AI. Відповідай тільки по наданому контексту. Завжди додавай джерело.",
      },
      {
        role: "system",
        content: `КОНТЕКСТ:\n${context}`,
      },
      ...messages,
    ],
  });

  return {
    answer: response.choices[0].message.content,
    sources: relevantDocs.map((d) => d.id),
  };
}
