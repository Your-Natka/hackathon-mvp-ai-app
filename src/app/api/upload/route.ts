import { parsePDF } from "@/lib/pdf";
import { parseDOCX } from "@/lib/docx";
import { splitText } from "@/lib/chunk";
import { createEmbedding } from "@/lib/embeddings";
import { supabaseServer } from "@/lib/supabase-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    console.log("UPLOAD STARTED");

    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return Response.json(
        {
          success: false,
          error: "No file uploaded",
        },
        {
          status: 400,
        },
      );
    }

    console.log("FILE:", file.name);

    const buffer = Buffer.from(await file.arrayBuffer());

    let text = "";

    // PDF
    if (file.name.endsWith(".pdf")) {
      text = await parsePDF(buffer);
    }

    // DOCX
    if (file.name.endsWith(".docx")) {
      text = await parseDOCX(buffer);
    }

    console.log("TEXT LENGTH:", text.length);

    if (!text || text.length < 20) {
      return Response.json(
        {
          success: false,
          error: "Document text is empty",
        },
        {
          status: 400,
        },
      );
    }

    // CHUNKING
    const chunks = await splitText(text);

    console.log("TOTAL CHUNKS:", chunks.length);

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
        } else {
          console.log("BATCH SAVED");
        }
      }
    }

    console.log("UPLOAD FINISHED");

    return Response.json({
      success: true,
      chunks: chunks.length,
    });
  } catch (e: any) {
    console.error("UPLOAD ERROR:", e);

    return Response.json(
      {
        success: false,
        error: e.message,
      },
      {
        status: 500,
      },
    );
  }
}
