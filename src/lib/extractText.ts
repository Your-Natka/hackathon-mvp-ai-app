import { parsePDF } from "./pdf";
import { extractTextOCR } from "./ocr";

export async function extractText(buffer: Buffer): Promise<string> {
  let text = await parsePDF(buffer);

  // якщо PDF пустий → OCR fallback
  if (!text || text.trim().length < 20) {
    text = await extractTextOCR(buffer);
  }

  return text;
}
