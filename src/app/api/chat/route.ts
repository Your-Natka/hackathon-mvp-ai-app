import { getAIResponse } from "@/services/ai.service";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await getAIResponse(messages);

  return Response.json({ response });
}
