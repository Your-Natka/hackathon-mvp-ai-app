import { parsePDF } from "./pdf";
import { extractTextOCR } from "./ocr";

export async function extractText(buffer: Buffer): Promise<string> {
  let text = await parsePDF(buffer);

  // fallback OCR
  if (!text || text.length < 50) {
    console.log("Switching to OCR...");

    text = await extractTextOCR(buffer);
  }

  return text;
}
