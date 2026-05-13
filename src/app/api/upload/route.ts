import { parsePDF } from "@/lib/pdf";
import { splitText } from "@/lib/chunk";
import { createEmbedding } from "@/lib/embeddings";
import { supabaseServer } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return Response.json({ error: "No file" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const text = await parsePDF(buffer);
    const chunks = await splitText(text);

    const batchSize = 5;

    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);

      const rows = await Promise.all(
        batch.map(async (chunk) => {
          try {
            const embedding = await createEmbedding(chunk);

            if (!embedding) return null;

            return {
              content: chunk,
              embedding,
            };
          } catch (e) {
            console.error("EMBED ERROR:", e);
            return null;
          }
        }),
      );

      const cleanRows = rows.filter(Boolean);

      if (cleanRows.length > 0) {
        const { error } = await supabaseServer
          .from("documents")
          .insert(cleanRows);

        if (error) {
          console.error("SUPABASE INSERT ERROR:", error);
        }
      }
    }

    return Response.json({
      success: true,
      chunks: chunks.length,
    });
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
