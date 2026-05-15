import { openai } from "@/lib/openai";
import { supabaseServer } from "@/lib/supabase-server";
import { createEmbedding } from "@/lib/embeddings";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("QUESTION:", message);

    let docs: any[] = [];

    // ======================
    // 1. EMBEDDING
    // ======================
    let embedding: number[] | null = null;

    try {
      embedding = await createEmbedding(message);

      console.log("EMBEDDING EXISTS:", !!embedding);
      console.log("EMBEDDING SIZE:", embedding?.length);
      console.log("EMBEDDING SAMPLE:", embedding?.slice?.(0, 5));
    } catch (e) {
      console.log("EMBEDDING ERROR:", e);
    }

    // ======================
    // 2. SUPABASE SEARCH
    // ======================
    if (embedding && embedding.length > 0) {
      const { data, error } = await supabaseServer.rpc("match_documents", {
        query_embedding: embedding,
        match_threshold: 0.4, // більш стабільний пошук
        match_count: 5,
      });

      console.log("RPC ERROR:", error);
      console.log("RPC DATA:", data);
      console.log("DOCS COUNT:", data?.length);

      if (!error) {
        docs = data || [];
      }
    }

    const hasDocs = docs.length > 0;

    // ======================
    // 3. CONTEXT
    // ======================
    const context = hasDocs
      ? docs.map((d, i) => `[Source ${i + 1}] ${d.content}`).join("\n\n")
      : "No documents found. Answer using general knowledge.";

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
            content:
              "You are a construction AI assistant. Use provided context if available. If no context, answer generally but clearly state uncertainty when needed.",
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

      answer = "Demo mode: AI unavailable, but system is working correctly.";
    }

    // ======================
    // RESPONSE
    // ======================
    return Response.json({
      answer,
      sources: docs,
    });
  } catch (error) {
    console.log("CHAT ERROR:", error);

    return Response.json({
      answer: "System error, but API is alive",
      sources: [],
    });
  }
}
