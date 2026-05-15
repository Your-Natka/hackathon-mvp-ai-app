"use client";

import { useState, useEffect, useRef } from "react";
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
} from "lucide-react";

type Source = {
  content: string;
};

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function DemoPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function askAI() {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    // USER MESSAGE
    setMessages((prev) => [...prev, userMessage]);

    // CLEAR INPUT
    setInput("");

    // RESET SOURCES
    setSources([]);

    // LOADING
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      });

      const data = await res.json();

      // AI MESSAGE
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "Немає відповіді",
        },
      ]);

      // SOURCES
      setSources(data.sources || []);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Помилка запиту до AI",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="h-screen flex overflow-hidden bg-[#F4F7FB]">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[300px] bg-[#07152F] text-white flex flex-col border-r border-white/5">
        {/* LOGO */}
        <div className="px-6 py-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/image_logo.png"
              alt="Sentinel AI"
              width={48}
              height={48}
              className="object-contain"
            />

            <div>
              <h1 className="text-lg font-bold tracking-wide">SENTINEL AI</h1>

              <p className="text-xs text-[#94A3B8]">ELECTRONORMS AI</p>
            </div>
          </Link>
        </div>

        {/* MENU */}
        <div className="px-4 py-6 space-y-2">
          <button
            className="
              w-full
              flex
              items-center
              gap-4
              bg-[#1B2A4B]
              text-white
              px-4
              py-4
              rounded-xl
            "
          >
            <MessageSquare className="w-5 h-5" />

            <span className="font-medium">AI Chat</span>
          </button>

          <button
            className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-4
              rounded-xl
              text-[#A8B6D3]
              hover:bg-white/5
              hover:text-white
              transition
            "
          >
            <LayoutDashboard className="w-5 h-5" />

            <span>Інфо панель</span>
          </button>

          <Link
            href="/upload"
            className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-4
              rounded-xl
              text-[#A8B6D3]
              hover:bg-white/5
              hover:text-white
              transition
            "
          >
            <FileText className="w-5 h-5" />

            <span>Документи</span>
          </Link>

          <button
            className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-4
              rounded-xl
              text-[#A8B6D3]
              hover:bg-white/5
              hover:text-white
              transition
            "
          >
            <ShieldCheck className="w-5 h-5" />

            <span>DBN Перевірити</span>
          </button>

          <button
            className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-4
              rounded-xl
              text-[#A8B6D3]
              hover:bg-white/5
              hover:text-white
              transition
            "
          >
            <Settings className="w-5 h-5" />

            <span>Налаштування</span>
          </button>
        </div>

        {/* HISTORY */}
        <div className="px-4 mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock3 className="w-4 h-4 text-[#94A3B8]" />

            <h3 className="text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
              Історія чатів
            </h3>
          </div>

          <div className="space-y-2">
            <button className="w-full text-left bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-3 text-sm text-[#D8E1F5]">
              Робота на висоті
            </button>

            <button className="w-full text-left bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-3 text-sm text-[#D8E1F5]">
              Пожежна безпека
            </button>

            <button className="w-full text-left bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-3 text-sm text-[#D8E1F5]">
              DBN електрика
            </button>
          </div>
        </div>

        <div className="flex-1" />

        {/* FOOTER */}
        <div className="p-4 border-t border-white/5">
          <Link
            href="/"
            className="
              w-full
              flex
              items-center
              justify-center
              bg-white/5
              hover:bg-white/10
              transition
              rounded-xl
              py-3
              text-sm
              text-[#D8E1F5]
            "
          >
            Вийти
          </Link>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-[#E6ECF5] flex items-center justify-between px-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0B1736]">
              ШІ Асістент з Електричних Норм
            </h2>

            <p className="text-sm text-[#667085] mt-1">
              Аналіз DBN, ПУЕ та нормативної документації
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <span className="text-sm text-[#667085]">AI Online</span>
          </div>
        </header>

        {/* CONTENT */}
        <div className="flex flex-1 overflow-hidden">
          {/* CHAT */}
          <section className="flex-1 flex flex-col">
            {/* BODY */}
            <div className="flex-1 overflow-y-auto px-10 py-8 space-y-6">
              {/* EMPTY STATE */}
              {messages.length === 0 && !loading && (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] flex items-center justify-center mb-6 shadow-2xl">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-[#0B1736]">
                    Sentinel ШІ Асистент
                  </h3>

                  <p className="mt-4 max-w-xl text-[#667085] leading-relaxed">
                    Запитайте про DBN, ПУЕ, електробезпеку, технічні стандарти
                    або внутрішню документацію.
                  </p>
                </div>
              )}

              {/* CHAT MESSAGES */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[850px] rounded-3xl px-6 py-5 shadow-sm ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] text-white"
                        : "bg-white border border-[#E6ECF5]"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-2xl bg-[#EEF2FF] flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-[#4C6FFF]" />
                        </div>

                        <div>
                          <h3 className="font-bold text-[#0B1736]">
                            AI Відповідь
                          </h3>

                          <p className="text-xs text-[#94A3B8]">
                            Sentinel Knowledge Engine
                          </p>
                        </div>
                      </div>
                    )}

                    <div
                      className={`leading-relaxed whitespace-pre-wrap ${
                        message.role === "assistant"
                          ? "text-[#475467]"
                          : "text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* LOADING */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#E6ECF5] rounded-3xl px-6 py-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#4C6FFF] animate-pulse" />

                      <span className="text-[#667085]">
                        AI аналізує документацію...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* AUTO SCROLL TARGET */}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="bg-white border-t border-[#E6ECF5] p-6">
              <div className="max-w-5xl mx-auto flex items-center gap-4 bg-[#F4F7FB] border border-[#E6ECF5] rounded-2xl px-6 py-4">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Запитайте про DBN, ПУЕ або електробезпеку..."
                  className="
                    flex-1
                    bg-transparent
                    outline-none
                    text-[#0B1736]
                    placeholder:text-[#98A2B3]
                  "
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      askAI();
                    }
                  }}
                />

                <button
                  onClick={askAI}
                  disabled={loading}
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#4C6FFF]
                    to-[#7356FF]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-2xl
                    hover:scale-[1.03]
                    transition
                    disabled:opacity-50
                  "
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

          {/* SOURCES */}
          <aside className="w-[340px] bg-white border-l border-[#E6ECF5] overflow-y-auto p-5">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#0B1736]">Джерела</h3>

              <p className="text-sm text-[#667085] mt-1">
                AI використовує нормативну документацію
              </p>
            </div>

            {sources.length === 0 ? (
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#EEF2F6]">
                <p className="text-sm text-[#98A2B3] leading-relaxed">
                  Джерела для цієї відповіді не знайдені.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {sources.map((source, index) => (
                  <div
                    key={index}
                    className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#EEF2F6]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-[#4C6FFF] bg-[#EEF2FF] px-3 py-1 rounded-full">
                        Джерело {index + 1}
                      </span>

                      <span className="text-xs text-[#98A2B3]">DBN / PDF</span>
                    </div>

                    <p className="text-sm text-[#475467] leading-relaxed">
                      {source.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
