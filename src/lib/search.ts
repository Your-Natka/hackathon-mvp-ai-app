import { docs } from "./docs";

export function searchDocs(query: string) {
  return docs.filter((doc) =>
    doc.text.toLowerCase().includes(query.toLowerCase()),
  );
}
