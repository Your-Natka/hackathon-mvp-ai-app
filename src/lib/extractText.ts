import { parsePDF } from "./pdf";
import { pdfToImages, extractTextOCR } from "./ocr";

export async function extractText(buffer: Buffer): Promise<string> {
  let text = await parsePDF(buffer);

  // якщо PDF пустий → OCR fallback
  if (!text || text.length < 50) {
    console.log("Switching to OCR...");

    const images = await pdfToImages(buffer);

    let ocrText = "";

    for (const img of images) {
      const extracted = await extractTextOCR(img);
      ocrText += extracted ?? "";
    }

    text = ocrText;
  }

  return text ?? "";
}
