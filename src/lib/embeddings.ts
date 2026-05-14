import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function createEmbedding(text: string, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
      });

      return res.data[0].embedding;
    } catch (err) {
      console.error(`Embedding retry ${i + 1}`, err);

      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }

  return null;
}
