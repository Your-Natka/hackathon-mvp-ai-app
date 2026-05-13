import { createEmbedding } from "./embeddings";
import { supabase } from "./supabase";

export async function searchDocuments(query: string) {
  const embedding = await createEmbedding(query);

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: embedding,
    match_threshold: 0.5,
    match_count: 5,
  });

  if (error) {
    console.error(error);

    return [];
  }

  return data;
}
