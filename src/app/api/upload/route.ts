import { parsePDF } from "@/lib/pdf";
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

    // FILE BUFFER
    const buffer = Buffer.from(await file.arrayBuffer());

    // PDF -> TEXT
    const text = await parsePDF(buffer);
    console.log(text.slice(0, 500));

    console.log("TEXT LENGTH:", text.length);

    // TEXT -> CHUNKS
    const chunks = await splitText(text);

    console.log("TOTAL CHUNKS:", chunks.length);

    // BATCH INSERT
    const batchSize = 5;

    for (let i = 0; i < chunks.length; i += batchSize) {
      console.log(`PROCESSING BATCH ${i} - ${i + batchSize}`);

      const batch = chunks.slice(i, i + batchSize);

      const rows = await Promise.all(
        batch.map(async (chunk, index) => {
          try {
            console.log(`CREATING EMBEDDING ${i + index + 1}`);

            const embedding = await createEmbedding(chunk);

            if (!embedding) {
              console.log("EMPTY EMBEDDING");
              return null;
            }

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

      // REMOVE NULLS
      const cleanRows = rows.filter(Boolean);

      console.log("VALID ROWS:", cleanRows.length);

      // INSERT INTO SUPABASE
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
      message: "Document uploaded successfully",
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
