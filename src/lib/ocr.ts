import { createWorker } from "tesseract.js";
import { fromBuffer } from "pdf2pic";

export async function pdfToImages(buffer: Buffer) {
  const convert = fromBuffer(buffer, {
    density: 200,
    saveFilename: "page",
    savePath: "./tmp",
    format: "png",
  });

  const pages = await convert.bulk(-1, true);

  return pages.map((p) => p.path);
}

export async function extractTextOCR(imagePath: string) {
  const worker = await createWorker("eng");

  const {
    data: { text },
  } = await worker.recognize(imagePath);

  await worker.terminate();

  return text;
}
