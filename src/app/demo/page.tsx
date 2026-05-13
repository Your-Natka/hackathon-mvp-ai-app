"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  MessageSquare,
  LayoutDashboard,
  FileText,
  ShieldCheck,
  Settings,
  Send,
  Clock3,
  FolderOpen,
} from "lucide-react";

export default function DemoPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    setSources([]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await res.json();

      setAnswer(data.answer || "No response");
      setSources(data.sources || []);
    } catch (error) {
      console.error(error);

      setAnswer("Помилка при запиті до AI.");
    }

    setLoading(false);
  }

  return (
    <main className="h-screen bg-[#F4F7FB] flex overflow-hidden">
      {/* ========================= */}
      {/* LEFT SIDEBAR */}
      {/* ========================= */}

      <aside className="w-[310px] bg-gradient-to-b from-[#07152F] to-[#0B1E45] text-white flex flex-col border-r border-white/5">
        {/* LOGO */}
        <div className="px-6 pt-6">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/image_logo.png"
              alt="Sentinel AI"
              width={52}
              height={52}
              className="object-contain h-auto"
            />

            <div>
              <h1 className="text-lg font-bold tracking-wide">SENTINEL AI</h1>

              <p className="text-xs text-[#8FA5D2]">
                Construction Knowledge System
              </p>
            </div>
          </Link>

          {/* NEW CHAT */}
          <button className="mt-8 w-full bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] rounded-2xl px-5 py-4 flex items-center justify-center gap-3 shadow-2xl hover:opacity-90 transition">
            <MessageSquare className="w-5 h-5" />

            <span className="font-medium">Новий чат</span>
          </button>
        </div>

        {/* MENU */}
        <nav className="px-4 py-8 border-b border-white/5 space-y-2">
          <button className="w-full flex items-center gap-4 bg-white/10 rounded-2xl px-5 py-4 text-white shadow-lg">
            <MessageSquare className="w-5 h-5" />

            <span className="font-medium">AI Чат</span>
          </button>

          <button className="w-full flex items-center gap-4 text-[#B7C4E0] hover:bg-white/5 rounded-2xl px-5 py-4 transition">
            <LayoutDashboard className="w-5 h-5" />

            <span>Dashboard</span>
          </button>

          <button className="w-full flex items-center gap-4 text-[#B7C4E0] hover:bg-white/5 rounded-2xl px-5 py-4 transition">
            <FileText className="w-5 h-5" />

            <span>Документи</span>
          </button>

          <button className="w-full flex items-center gap-4 text-[#B7C4E0] hover:bg-white/5 rounded-2xl px-5 py-4 transition">
            <ShieldCheck className="w-5 h-5" />

            <span>DBN Перевірка</span>
          </button>

          <button className="w-full flex items-center gap-4 text-[#B7C4E0] hover:bg-white/5 rounded-2xl px-5 py-4 transition">
            <Settings className="w-5 h-5" />

            <span>Налаштування</span>
          </button>
        </nav>

        {/* CHAT HISTORY */}
        <div className="px-4 py-8">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#8FA5D2]">
              Історія чатів
            </h3>

            <Clock3 className="w-4 h-4 text-[#8FA5D2]" />
          </div>

          <div className="space-y-3">
            <button className="w-full text-left bg-white/5 hover:bg-white/10 transition rounded-2xl p-4">
              <p className="text-sm font-medium">Робота на висоті</p>

              <span className="text-xs text-[#8FA5D2] mt-1 block">
                10 хв тому
              </span>
            </button>

            <button className="w-full text-left bg-white/5 hover:bg-white/10 transition rounded-2xl p-4">
              <p className="text-sm font-medium">Пожежна безпека</p>

              <span className="text-xs text-[#8FA5D2] mt-1 block">Вчора</span>
            </button>

            <button className="w-full text-left bg-white/5 hover:bg-white/10 transition rounded-2xl p-4">
              <p className="text-sm font-medium">DBN електромережі</p>

              <span className="text-xs text-[#8FA5D2] mt-1 block">
                2 дні тому
              </span>
            </button>
          </div>
        </div>

        {/* DOCUMENTS */}
        <div className="px-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#8FA5D2] mb-5">
            Документи
          </h3>

          <div className="space-y-3">
            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-[#4C6FFF]" />
              </div>

              <div>
                <p className="text-sm font-medium">DBN V.2.2-40:2018</p>

                <span className="text-xs text-[#8FA5D2]">PDF Документ</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-[#4C6FFF]" />
              </div>

              <div>
                <p className="text-sm font-medium">Електромережі</p>

                <span className="text-xs text-[#8FA5D2]">DOCX Документ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1" />
      </aside>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="flex-1 flex flex-col">
        {/* TOP HEADER */}
        <header className="h-20 bg-white border-b border-[#E6ECF5] px-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#0B1736]">
              AI Будівельний чат
            </h2>

            <p className="text-sm text-[#7C8AA5] mt-1">
              RAG System • GPT-4o-mini • PDF Knowledge Base
            </p>
          </div>

          {/* LOGOUT */}
          <Link
            href="/"
            className="text-sm text-[#7C8AA5] hover:text-black transition"
          >
            Вихід
          </Link>
        </header>

        {/* CENTER + RIGHT */}
        <div className="flex flex-1 overflow-hidden">
          {/* CHAT COLUMN */}
          <section className="flex-1 flex flex-col bg-[#F8FAFF]">
            {/* CHAT */}
            <div className="flex-1 overflow-y-auto px-10 py-8 space-y-6">
              {!answer && (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#0B1736]">
                      Sentinel AI
                    </h3>

                    <p className="text-[#7C8AA5] mt-3 max-w-xl">
                      Запитайте AI про DBN, стандарти, технічні вимоги або
                      документацію компанії.
                    </p>
                  </div>
                </div>
              )}

              {/* USER */}
              {question && (
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] text-white max-w-[700px] px-6 py-5 rounded-[28px] rounded-br-md shadow-xl">
                    {question}
                  </div>
                </div>
              )}

              {/* AI */}
              {answer && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#EEF2FF] max-w-[850px] p-8 rounded-[28px] rounded-bl-md shadow-sm">
                    <h3 className="text-[#0B1736] font-bold text-xl">
                      AI Відповідь
                    </h3>

                    <div className="mt-5 text-[#4B5565] leading-relaxed whitespace-pre-wrap">
                      {answer}
                    </div>

                    {sources.length > 0 && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {sources.map((_: any, i: number) => (
                          <div
                            key={i}
                            className="bg-[#EEF2FF] text-[#4C6FFF] px-4 py-2 rounded-xl text-sm font-medium"
                          >
                            Source {i + 1}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* LOADING */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#EEF2FF] px-6 py-5 rounded-2xl text-[#7C8AA5]">
                    AI аналізує документи...
                  </div>
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="bg-white border-t border-[#E6ECF5] p-6">
              <div className="flex items-center gap-4 bg-[#F8FAFF] border border-[#E6ECF5] rounded-2xl px-6 py-4 shadow-sm">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  type="text"
                  placeholder="Запитайте про DBN, стандарти або документацію..."
                  className="flex-1 bg-transparent outline-none text-[#0B1736]"
                />

                <button
                  onClick={askAI}
                  disabled={loading}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] flex items-center justify-center text-white shadow-xl hover:scale-[1.03] transition disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="w-[360px] bg-white border-l border-[#E6ECF5] overflow-y-auto">
            <div className="p-6 border-b border-[#EEF2FF]">
              <h2 className="text-lg font-bold text-[#0B1736]">
                Цитати з документів
              </h2>

              <p className="text-sm text-[#7C8AA5] mt-1">
                AI показує джерела з PDF
              </p>
            </div>

            <div className="p-5 space-y-4">
              {sources.length === 0 && (
                <div className="bg-[#F8FAFF] border border-dashed border-[#D7E2F2] rounded-2xl p-5 text-sm text-[#7C8AA5]">
                  Після запиту тут з’являться фрагменти документів, які AI
                  використав для відповіді.
                </div>
              )}

              {sources.map((source, i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFF] border border-[#EEF2FF] rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#4C6FFF]">
                      Source {i + 1}
                    </span>

                    <span className="text-xs text-[#94A3B8]">PDF</span>
                  </div>

                  <p className="text-sm leading-relaxed text-[#4B5565]">
                    {source.content}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
