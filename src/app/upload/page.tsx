"use client";

import { useState } from "react";

export default function UploadPage() {
  const [loading, setLoading] = useState(false);

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setLoading(true);

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      alert("Документ успішно завантажений");
    } catch (error) {
      console.error(error);

      alert("Помилка upload");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#07152F] text-white flex items-center justify-center">
      <div className="w-full max-w-xl bg-[#0D1B3D] p-10 rounded-2xl border border-white/10">
        <h1 className="text-3xl font-bold mb-3">Завантаження документів</h1>

        <p className="text-[#A8B6D3] mb-8">
          Завантажте PDF файл нормативної документації
        </p>

        <label className="flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-2xl p-12 cursor-pointer hover:border-[#4C6FFF] transition">
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleUpload}
          />

          <span className="text-lg font-medium">
            {loading ? "Обробка документа..." : "Натисніть для вибору PDF"}
          </span>

          <span className="text-sm text-[#8EA0C5] mt-3">
            PDF • DBN • ПУЕ • ДСТУ
          </span>
        </label>
      </div>
    </main>
  );
}
