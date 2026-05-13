import OpenAI from "openai";

import { supabase } from "@/lib/supabase";
import { createEmbedding } from "@/lib/embeddings";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("QUESTION:", message);

    // =========================
    // CREATE EMBEDDING
    // =========================

    const embedding = await createEmbedding(message);

    console.log("EMBEDDING OK");

    // =========================
    // VECTOR SEARCH
    // =========================

    const { data: docs, error } = await supabase.rpc("match_documents", {
      query_embedding: embedding,
      match_threshold: 0.5,
      match_count: 5,
    });

    console.log("DOCS:", docs);

    if (error) {
      console.log("SUPABASE ERROR:", error);

      return Response.json(
        {
          answer: "Supabase error",
          sources: [],
        },
        {
          status: 500,
        },
      );
    }

    // =========================
    // CONTEXT
    // =========================

    const context = docs
      ?.map((doc: any, index: number) => `[Source ${index + 1}] ${doc.content}`)
      .join("\n\n");

    console.log("CONTEXT READY");

    // =========================
    // OPENAI
    // =========================

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content:
            "You are a construction AI assistant. Answer ONLY from provided documents.",
        },

        {
          role: "user",
          content: `
Context:
${context}

Question:
${message}
`,
        },
      ],
    });

    console.log("OPENAI OK");

    const answer = completion.choices[0]?.message?.content || "No response";

    return Response.json({
      answer,
      sources: docs || [],
    });
  } catch (error: any) {
    console.error("CHAT ERROR:", error);

    return Response.json(
      {
        answer: "Server error",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
