import { supabase } from "@/lib/supabase";
import { createEmbedding } from "@/lib/embeddings";

export async function searchDocs(query: string) {
  const embedding = await createEmbedding(query);

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.7,
    match_count: 5,
  });

  if (error) {
    console.error("SEARCH ERROR:", error);
    return [];
  }

  return data || [];
}
