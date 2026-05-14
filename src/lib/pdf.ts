import PDFParser from "pdf2json";

export async function parsePDF(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const parser = new PDFParser();

    parser.on("pdfParser_dataReady", (data) => {
      try {
        const text = parser.getRawTextContent();
        resolve(text || "");
      } catch (e) {
        reject(e);
      }
    });

    parser.on("pdfParser_dataError", (err) => {
      reject(err);
    });

    parser.parseBuffer(buffer);
  });
}
