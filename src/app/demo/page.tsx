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
  Plus,
  Trash2,
  Paperclip,
  Database,
  CircleDot,
} from "lucide-react";

export interface Source {
  content: string;
  page?: number;
  similarity?: number;

  title?: string;
  point?: string;
  relevance?: string;
}

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
  const isRequesting = useRef(false);

  // AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function clearChat() {
    setMessages([]);
    setSources([]);
  }

  async function askAI() {
    const text = input.trim();
    if (!text || isRequesting.current) return;

    isRequesting.current = true;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSources([]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "Немає відповіді",
        },
      ]);

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
      isRequesting.current = false;
    }
  }

  return (
    <main className="min-h-screen bg-[#EEF3FA]">
      <div className="max-w-[1440px] mx-auto flex min-h-screen">
        {/* SIDEBAR */}
        <aside className="w-[310px] bg-[#07152F] text-white flex flex-col border-r border-white/5">
          {/* LOGO */}
          <div className="px-6 py-6 border-b border-white/5">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/image_logo_white.png"
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

          {/* NEW CHAT */}
          <div className="px-4 pt-5">
            <button
              className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              bg-gradient-to-r
              from-[#4C6FFF]
              to-[#7356FF]
              rounded-2xl
              py-4
              font-medium
              shadow-xl
              hover:scale-[1.01]
              transition
            "
            >
              <Plus className="w-5 h-5" />
              Новий чат
            </button>
          </div>

          {/* MENU */}
          <div className="px-4 py-5 space-y-2">
            {/* ACTIVE */}
            <button
              className="
              w-full
              flex
              items-center
              gap-4
              bg-[#132447]
              border
              border-[#335CFF]/30
              text-white
              px-4
              py-4
              rounded-2xl
              shadow-[0_0_25px_rgba(76,111,255,0.15)]
            "
            >
              <div
                className="
                w-11
                h-11
                rounded-xl
                bg-[#2563EB]/20
                border
                border-[#3B82F6]/40
                flex
                items-center
                justify-center
              "
              >
                <MessageSquare className="w-5 h-5 text-[#60A5FA]" />
              </div>

              <div className="text-left">
                <p className="font-medium">ШІ Чат</p>
              </div>
            </button>

            {/* ITEM */}
            <button
              className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-4
              rounded-2xl
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
              href="/documents"
              className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-4
              rounded-2xl
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
              rounded-2xl
              text-[#A8B6D3]
              hover:bg-white/5
              hover:text-white
              transition
            "
            >
              <ShieldCheck className="w-5 h-5" />

              <span>ДБН Перевірити</span>
            </button>

            <button
              className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-4
              rounded-2xl
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
          <div className="px-4 mt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4 text-[#94A3B8]" />

                <h3 className="text-xs uppercase tracking-[0.18em] text-[#94A3B8]">
                  Історія чатів
                </h3>
              </div>

              <button
                onClick={clearChat}
                className="
                text-[#94A3B8]
                hover:text-white
                transition
              "
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {[
                "Робота під напругою",
                "Пожежна безпека",
                "Заземлення PE/PEN",
              ].map((item, i) => (
                <button
                  key={i}
                  className="
                  w-full
                  text-left
                  bg-white/[0.03]
                  hover:bg-white/[0.06]
                  border
                  border-white/[0.04]
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  text-[#D8E1F5]
                  transition
                "
                >
                  {item}
                </button>
              ))}
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
              rounded-2xl
              bg-white/[0.05]
              hover:bg-white/[0.08]
              py-3
              text-sm
              text-[#D8E1F5]
              transition
            "
            >
              Вийти
            </Link>
          </div>
        </aside>

        {/* MAIN */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* HEADER */}
          <header className="h-20 bg-white border-b border-[#E7ECF5] px-8 flex items-center justify-between">
            <div>
              <h2 className="text-[26px] font-bold text-[#0B1736]">
                ШІ Асистент з Електричних Норм
              </h2>
            </div>
            {/* RIGHT PANEL (3 IN 1) */}
            <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E7ECF5] px-4 py-2 rounded-2xl">
              {/* 1 - KNOWLEDGE BASE */}
              <Link
                href="/upload"
                className="
                flex
                items-center
                gap-2
                px-4
                py-3
                rounded-2xl
                border
                border-[#E2E8F0]
                text-[#475467]
                hover:bg-[#F8FAFC]
                transition
              "
              >
                <Database className="w-4 h-4" />

                <span className="font-medium">База знань</span>
              </Link>

              <div className="w-px h-6 bg-[#E7ECF5]" />

              {/* 2 - CLEAR CHAT */}
              <button
                onClick={clearChat}
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-[#E2E8F0]
                  text-[#475467]
                  hover:bg-[#F8FAFC]
                  transition
                "
              >
                <Trash2 className="w-4 h-4" />
                Очистити чат
              </button>

              {/* 3 - ONLINE STATUS */}
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="relative flex items-center justify-center">
                  <CircleDot className="w-4 h-4 text-green-500" />

                  <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75 animate-ping" />
                </div>

                <span className="text-sm font-medium text-[#475467]">
                  ШІ на зв'язку
                </span>
              </div>
            </div>
          </header>

          {/* CHAT + SOURCES LAYOUT */}
          <section className="flex h-[calc(100vh-80px)] overflow-hidden">
            {/* LEFT COLUMN - CHAT */}
            <div className="flex flex-col flex-1 bg-[#F8FAFC]">
              {/* CHAT BODY */}
              <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">
                {messages.length === 0 && !loading && (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div
                      className="
                      w-24
                      h-24
                      rounded-[28px]
                      bg-gradient-to-r
                      from-[#4C6FFF]
                      to-[#7356FF]
                      flex
                      items-center
                      justify-center
                      shadow-[0_20px_60px_rgba(76,111,255,0.35)]
                      mb-8
                    "
                    >
                      <MessageSquare className="w-11 h-11 text-white " />
                    </div>

                    <h3 className="text-4xl font-bold text-[#0B1736]">
                      Sentinel ШІ помічник
                    </h3>

                    <p className="mt-5 max-w-2xl text-[#667085] leading-relaxed text-lg">
                      Запитайте про ПУЕ, ДБН, групи допуску, електробезпеку,
                      заземлення або нормативи.
                    </p>
                  </div>
                )}

                {/* MESSAGES */}
                {messages.map((message, index) => {
                  const isUser = message.role === "user";

                  return (
                    <div
                      key={index}
                      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex items-start gap-4 max-w-[900px]">
                        {/* AVATAR */}

                        {/* MESSAGE BUBBLE */}
                        <div
                          className={`
                          rounded-[28px]
                          px-6
                          py-5
                          shadow-sm
                          max-w-[800px]
                          ${
                            isUser
                              ? "bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] text-white order-1"
                              : "bg-white border border-[#E7ECF5]"
                          }
                        `}
                        >
                          {/* AI HEADER */}
                          {!isUser && (
                            <div className="mb-4 flex items-center gap-3 ">
                              <div className="flex items-center gap-3">
                                {!isUser && (
                                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] flex items-center justify-center shadow-lg">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                  </div>
                                )}

                                {isUser && (
                                  <div className="w-12 h-12 rounded-2xl bg-[#0B1736] text-white flex items-center justify-center font-semibold">
                                    U
                                  </div>
                                )}
                              </div>
                              <div className="mb-4 ">
                                <h4 className="font-semibold text-[#0B1736]">
                                  ШI Відповідь
                                </h4>
                                <p className="text-xs text-[#98A2B3]">
                                  Knowledge Engine
                                </p>
                              </div>
                            </div>
                          )}

                          {/* TEXT */}
                          <div
                            className={`whitespace-pre-wrap leading-relaxed ${
                              isUser ? "text-white" : "text-[#475467]"
                            }`}
                          >
                            {message.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* LOADING */}
                {loading && (
                  <div className="flex items-center gap-4">
                    <div
                      className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-r
              from-[#4C6FFF]
              to-[#7356FF]
              flex
              items-center
              justify-center
            "
                    >
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>

                    <div className="bg-white border border-[#E7ECF5] rounded-[28px] px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#4C6FFF] animate-bounce" />
                        <div className="w-2 h-2 rounded-full bg-[#7356FF] animate-bounce delay-100" />
                        <div className="w-2 h-2 rounded-full bg-[#4C6FFF] animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* INPUT - FIXED BOTTOM */}
              <div className="bg-white border-t border-[#E7ECF5] px-8 py-5 shrink-0">
                <div
                  className="
          max-w-4xl
          mx-auto
          bg-[#F8FAFC]
          border
          border-[#E7ECF5]
          rounded-[28px]
          px-5
          py-4
          flex
          items-center
          gap-4
        "
                >
                  {/* ATTACH */}
                  <button
                    className="
            w-11
            h-11
            rounded-xl
            bg-white
            border
            border-[#E2E8F0]
            flex
            items-center
            justify-center
            text-[#667085]
            hover:bg-[#F8FAFC]
            transition
            shrink-0
          "
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>

                  {/* INPUT */}
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
            text-[15px]
          "
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        askAI();
                      }
                    }}
                  />

                  {/* SEND */}
                  <button
                    onClick={askAI}
                    disabled={loading}
                    className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-r
            from-[#4C6FFF]
            to-[#7356FF]
            flex
            items-center
            justify-center
            text-white
            shadow-xl
            hover:scale-[1.03]
            transition
            disabled:opacity-50
            shrink-0
          "
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - SOURCES */}
            <aside className="w-[360px] bg-white border-l border-[#E7ECF5] overflow-y-auto p-5 shrink-0">
              {/* HEADER */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0B1736]">Джерела</h3>

                <p className="text-sm text-[#667085] mt-1">
                  ШІ використовує нормативну документацію
                </p>
              </div>

              {/* EMPTY STATE */}
              {sources.length === 0 ? (
                <div className="rounded-3xl border border-[#E7ECF5] bg-[#F8FAFC] p-5">
                  <p className="text-sm text-[#98A2B3] leading-relaxed">
                    Тут з’являться релевантні фрагменти документів.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {sources.map((source, index) => (
                    <div
                      key={index}
                      className="
            bg-[#F8FAFC]
            rounded-3xl
            p-5
            border
            border-[#E7ECF5]
          "
                    >
                      {/* TOP ROW: ICON + DOC NAME */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white border border-[#E7ECF5] flex items-center justify-center">
                          <FileText className="w-4 h-4 text-[#4C6FFF]" />
                        </div>

                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#0B1736]">
                            {source.title || "Нормативний документ"}
                          </span>

                          <span className="text-xs text-[#98A2B3]">
                            PDF документ
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <p className="text-sm text-[#475467] leading-relaxed mb-4">
                        {source.content}
                      </p>

                      {/* FOOTER */}
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-[#667085]">
                          <span className="font-medium">Параграф:</span>{" "}
                          {source.point || "—"} ·{" "}
                          <span className="font-medium">Стор.:</span>{" "}
                          {source.page || "—"}
                        </div>

                        <span
                          className="
                          text-xs
                          font-semibold
                          text-[#067647]
                          bg-[#ECFDF3]
                          border
                          border-[#ABEFC6]
                          px-3
                          py-1.5
                          rounded-full
                        "
                        >
                          {source.relevance || "відповідність"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}
