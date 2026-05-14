import { openai } from "@/lib/openai";
import { supabase } from "@/lib/supabase";
import { createEmbedding } from "@/lib/embeddings";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("QUESTION:", message);

    let docs: any[] = [];

    // ======================
    // 1. EMBEDDING (SAFE)
    // ======================
    let embedding: number[] = [];

    try {
      embedding = await createEmbedding(message);
      console.log("EMBEDDING OK");
    } catch (e) {
      console.log("EMBEDDING FAILED -> fallback mode");
    }

    // ======================
    // 2. SUPABASE SEARCH (SAFE)
    // ======================
    if (embedding.length) {
      const { data, error } = await supabase.rpc("match_documents", {
        query_embedding: embedding,
        match_threshold: 0.6,
        match_count: 5,
      });

      if (!error) {
        docs = data || [];
      } else {
        console.log("SUPABASE ERROR:", error);
      }
    }

    // ======================
    // 3. CONTEXT
    // ======================
    const context =
      docs.length > 0
        ? docs.map((d, i) => `[Source ${i + 1}] ${d.content}`).join("\n\n")
        : "No documents found. Use general knowledge.";

    // ======================
    // 4. OPENAI CHAT (SAFE)
    // ======================
    let answer = "";

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a construction AI assistant. Always cite sources if provided.",
          },
          {
            role: "user",
            content: `Context:\n${context}\n\nQuestion:\n${message}`,
          },
        ],
      });

      answer = completion.choices[0]?.message?.content || "";
    } catch (e) {
      console.log("OPENAI ERROR:", e);

      // fallback so demo NEVER breaks
      answer =
        "Demo mode: AI unavailable, but system is working. Check Supabase + OpenAI billing.";
    }

    return Response.json({
      answer,
      sources: docs,
    });
  } catch (error: any) {
    console.log("CHAT ERROR:", error);

    return Response.json({
      answer: "System error, but UI is working",
      sources: [],
    });
  }
}
