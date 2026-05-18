import { extractText } from "@/lib/extractText";
import { parseDOCX } from "@/lib/docx";
import { splitText } from "@/lib/chunk";
import { createEmbedding } from "@/lib/embeddings";
import { supabaseService } from "@/lib/supabase-server";

export const runtime = "nodejs";

type DocumentRow = {
  content: string;
  embedding: number[];
  filename: string;
};

export async function POST(req: Request) {
  try {
    console.log("UPLOAD STARTED");

    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json(
        { success: false, error: "No file uploaded" },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    let text = "";

    if (file.name.endsWith(".pdf")) {
      text = await extractText(buffer);
    } else if (file.name.endsWith(".docx")) {
      text = await parseDOCX(buffer);
    }

    text = text?.trim() ?? "";

    if (text.length < 20) {
      return Response.json(
        { success: false, error: "Document text is empty" },
        { status: 400 },
      );
    }

    const chunks = splitText(text);

    console.log("TOTAL CHUNKS:", chunks.length);

    const batchSize = 5;
    await supabaseService.from("documents").delete().eq("filename", file.name);

    for (let i = 0; i < chunks.length; i += batchSize) {
      const batch = chunks.slice(i, i + batchSize);

      const rows = await Promise.allSettled(
        batch.map(async (chunk): Promise<DocumentRow | null> => {
          const embedding = await createEmbedding(chunk);

          if (!embedding) return null;

          return {
            content: chunk,
            embedding,
            filename: file.name,
          };
        }),
      );

      const cleanRows: DocumentRow[] = rows
        .filter(
          (r): r is PromiseFulfilledResult<DocumentRow | null> =>
            r.status === "fulfilled",
        )
        .map((r) => r.value)
        .filter((r): r is DocumentRow => r !== null);

      if (cleanRows.length) {
        const { error } = await supabaseService
          .from("documents")
          .insert(cleanRows);

        if (error) {
          console.error("SUPABASE INSERT ERROR:", error);
        } else {
          console.log(`BATCH SAVED (${cleanRows.length})`);
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
        error: e?.message ?? "Unknown error",
      },
      { status: 500 },
    );
  }
}
