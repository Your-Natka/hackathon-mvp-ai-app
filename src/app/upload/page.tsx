"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2 } from "lucide-react";
import { parsePDF } from "@/lib/pdf";
import { splitText } from "@/lib/chunk";
import { createEmbedding } from "@/lib/embeddings";
import { supabaseServer } from "@/lib/supabase-server";

export default function UploadPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

      setSuccess(true);
    } catch (error) {
      console.error(error);

      alert("Помилка upload");
    } finally {
      setLoading(false);
    }
  }

  function handleSuccess() {
    router.push("/demo");
  }

  return (
    <main className="min-h-screen bg-[#07152F] flex items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-[#0D1B3D] border border-white/10 rounded-3xl p-12 shadow-2xl">
        {/* TITLE */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Завантаження документів
          </h1>

          <p className="text-[#A8B6D3] mt-4 text-lg">
            Додайте PDF файл нормативної документації для AI аналізу
          </p>
        </div>

        {/* UPLOAD AREA */}
        <label
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            border-2
            border-dashed
            border-white/15
            rounded-3xl
            p-16
            cursor-pointer
            hover:border-[#4C6FFF]
            hover:bg-white/[0.02]
            transition
          "
        >
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleUpload}
          />

          {/* LOADING */}
          {loading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="w-14 h-14 text-[#6D7DFF] animate-spin" />

              <p className="text-white text-xl font-semibold mt-6">
                Документ обробляється...
              </p>

              <p className="text-[#8EA0C5] mt-3 text-sm">
                AI створює embeddings та індексує документ
              </p>
            </div>
          ) : (
            <>
              <div className="w-24 h-24 rounded-full bg-[#1B2A4B] flex items-center justify-center mb-6">
                <span className="text-4xl">📄</span>
              </div>

              <p className="text-2xl font-semibold text-white">
                Натисніть для вибору PDF
              </p>

              <p className="text-[#8EA0C5] mt-4">ПУЕ • ДБН • ДСТУ • НПАОП</p>
            </>
          )}
        </label>
      </div>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-2xl text-center">
            <div className="flex justify-center">
              <CheckCircle2 className="w-20 h-20 text-green-500" />
            </div>

            <h2 className="text-3xl font-bold text-[#0B1736] mt-6">
              Документ завантажено
            </h2>

            <p className="text-[#667085] mt-4 leading-relaxed">
              AI успішно обробив документ та додав його у базу знань.
            </p>

            <button
              onClick={handleSuccess}
              className="
                mt-8
                w-full
                bg-gradient-to-r
                from-[#4C6FFF]
                to-[#7356FF]
                text-white
                py-4
                rounded-2xl
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Добре
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
