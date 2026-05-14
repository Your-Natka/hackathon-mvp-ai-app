import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import Tesseract from "tesseract.js";

export async function extractText(buffer: Buffer, mimeType: string) {
  let text = "";

  if (mimeType === "application/pdf") {
    try {
      const loadingTask = pdfjsLib.getDocument({
        data: new Uint8Array(buffer),
      });

      const pdf = await loadingTask.promise;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        const pageText = content.items.map((item: any) => item.str).join(" ");

        text += pageText + "\n";
      }
    } catch (e) {
      console.log("PDF PARSE ERROR:", e);
    }
  }

  if (!text || text.trim().length < 10) {
    console.log("OCR ACTIVATED");

    const result = await Tesseract.recognize(buffer, "eng+ukr");
    text = result.data.text || "";
  }

  return text;
}
