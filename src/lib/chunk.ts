export function splitText(text: string, size = 800) {
  const clean = text.replace(/\s+/g, " ").trim();

  const chunks = [];

  for (let i = 0; i < clean.length; i += size) {
    const chunk = clean.slice(i, i + size);

    if (chunk.length > 100) {
      chunks.push(chunk);
    }
  }

  return chunks;
}
