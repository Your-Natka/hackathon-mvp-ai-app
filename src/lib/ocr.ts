import { createWorker } from "tesseract.js";

let workerPromise: Promise<any> | null = null;

async function getWorker() {
  if (!workerPromise) {
    workerPromise = createWorker("eng");
  }
  return workerPromise;
}

// OCR from buffer (NO FILES, NO pdf2pic)
export async function extractTextOCR(buffer: Buffer) {
  const worker = await getWorker();

  const {
    data: { text },
  } = await worker.recognize(buffer);

  return text ?? "";
}
