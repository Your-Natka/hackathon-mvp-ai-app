type ChunkData = {
  text: string;
  page: number;
  paragraph: number;
};

export function splitText(text: string, maxChunkSize = 800): ChunkData[] {
  const pages = text.split("\f");

  const chunks: ChunkData[] = [];

  pages.forEach((pageText, pageIndex) => {
    const paragraphs = pageText.split(/\n\s*\n/).filter(Boolean);

    paragraphs.forEach((paragraphText, paragraphIndex) => {
      const sentences = paragraphText.match(/[^.!?]+[.!?]+/g) || [
        paragraphText,
      ];

      let currentChunk = "";

      for (const sentence of sentences) {
        if ((currentChunk + sentence).length > maxChunkSize) {
          chunks.push({
            text: currentChunk.trim(),
            page: pageIndex + 1,
            paragraph: paragraphIndex + 1,
          });

          currentChunk = sentence;
        } else {
          currentChunk += " " + sentence;
        }
      }

      if (currentChunk.trim()) {
        chunks.push({
          text: currentChunk.trim(),
          page: pageIndex + 1,
          paragraph: paragraphIndex + 1,
        });
      }
    });
  });

  return chunks;
}
