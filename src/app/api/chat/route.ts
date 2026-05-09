import { getAIResponse } from "@/services/ai.service";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await getAIResponse([
    {
      role: "system",
      content: "You are an enterprise AI assistant.",
    },
    ...messages,
  ]);

  return Response.json({ response });
}
