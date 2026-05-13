export async function splitText(text: string) {
  const chunkSize = 1000;
  const overlap = 200;

  const chunks: string[] = [];

  for (let i = 0; i < text.length; i += chunkSize - overlap) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  return chunks.filter((c) => c.trim().length > 0);
}
