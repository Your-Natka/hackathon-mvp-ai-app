import { supabaseServer } from "@/lib/supabase-server";
import { createEmbedding } from "@/lib/embeddings";

export async function searchDocs(query: string) {
  const embedding = await createEmbedding(query);

  if (!embedding) {
    console.error("No embedding generated");
    return [];
  }

  const { data, error } = await supabaseServer.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.75,
    match_count: 5,
  });

  if (error) {
    console.error("SEARCH ERROR:", error);
    return [];
  }

  return data ?? [];
}
