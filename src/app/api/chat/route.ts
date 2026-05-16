import { openai } from "@/lib/openai";
import { supabaseServer } from "@/lib/supabase-server";
import { createEmbedding } from "@/lib/embeddings";
import { SYSTEM_PROMPT } from "@/utils/prompts";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("QUESTION:", message);

    let docs: any[] = [];

    // ======================
    // 1. CREATE EMBEDDING
    // ======================
    let embedding: number[] | null = null;

    try {
      embedding = await createEmbedding(message);

      console.log("EMBEDDING EXISTS:", !!embedding);
      console.log("EMBEDDING SIZE:", embedding?.length);
    } catch (e) {
      console.log("EMBEDDING ERROR:", e);
    }

    // ======================
    // 2. SUPABASE VECTOR SEARCH
    // ======================
    if (embedding && embedding.length > 0) {
      const { data, error } = await supabaseServer.rpc("match_documents", {
        query_embedding: embedding,
        match_threshold: 0.4,
        match_count: 5,
      });

      console.log("RPC ERROR:", error);
      console.log("DOCS COUNT:", data?.length);

      if (!error) {
        docs = data || [];
      }
    }

    // ======================
    // 3. BUILD CONTEXT
    // ======================
    const context =
      docs.length > 0
        ? docs.map((d, i) => `[Source ${i + 1}] ${d.content}`).join("\n\n")
        : "No relevant documents found.";

    // ======================
    // 4. OPENAI RESPONSE
    // ======================
    let answer = "";

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",

        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },

          {
            role: "user",
            content: `
CONTEXT:
${context}

QUESTION:
${message}

Instructions:
- Use provided context when available
- Stay within electrical and construction domain
- If context is insufficient, answer carefully using technical knowledge
            `,
          },
        ],
      });

      answer =
        completion.choices[0]?.message?.content || "No response generated.";
    } catch (e) {
      console.log("OPENAI ERROR:", e);

      answer =
        "AI service is temporarily unavailable, but the system is operational.";
    }

    // ======================
    // 5. RESPONSE
    // ======================
    return Response.json({
      answer,
      sources: docs,
    });
  } catch (error) {
    console.log("CHAT ERROR:", error);

    return Response.json({
      answer: "System error, but API is alive.",
      sources: [],
    });
  }
}
