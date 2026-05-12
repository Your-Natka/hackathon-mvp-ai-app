"use client";
import Image from "next/image";
import Link from "next/link";

import {
  MessageSquare,
  LayoutDashboard,
  FileText,
  Settings,
  Search,
  Send,
} from "lucide-react";

export default function ChatPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#F4F7FB] flex">
      {/* SIDEBAR */}
      <aside className="w-[260px] bg-[#07152F] text-white flex flex-col border-r border-white/5">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 pt-2 pl-2">
          <Image
            src="/images/image_logo.png"
            alt="Sentinel AI"
            width={52}
            height={52}
            className="object-contain"
          />

          <div>
            <h1 className="text-xl font-bold tracking-wide">SENTINEL AI</h1>

            <p className="text-[#B7C4E0] text-xs">
              Construction Knowledge System
            </p>
          </div>
        </Link>

        {/* MENU */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {/* ACTIVE */}
          <button className="w-full flex items-center gap-4 bg-[#1B2A4B] text-white px-4 py-4 rounded-2xl">
            <MessageSquare className="w-5 h-5" />

            <span className="font-medium">Chat</span>
          </button>

          <button className="w-full flex items-center gap-4 text-[#A8B6D3] hover:bg-white/5 px-4 py-4 rounded-2xl transition">
            <LayoutDashboard className="w-5 h-5" />

            <span>Dashboard</span>
          </button>

          <button className="w-full flex items-center gap-4 text-[#A8B6D3] hover:bg-white/5 px-4 py-4 rounded-2xl transition">
            <FileText className="w-5 h-5" />

            <span>Documents</span>
          </button>

          <button className="w-full flex items-center gap-4 text-[#A8B6D3] hover:bg-white/5 px-4 py-4 rounded-2xl transition">
            <Settings className="w-5 h-5" />

            <span>Settings</span>
          </button>
        </nav>

        {/* USER */}
        <div className="p-4 border-t border-white/10">
          <div className="bg-[#101D38] rounded-2xl p-4">
            <p className="text-sm text-[#8FA2C7]">Enterprise AI Assistant</p>

            <p className="mt-2 font-medium">Sentinel Workspace</p>
          </div>
        </div>
      </aside>

      {/* CENTER CHAT */}
      <section className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-24 bg-white border-b border-[#E6ECF5] px-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#0B1736]">
              AI Construction Chat
            </h2>

            <p className="text-sm text-[#7C8AA5] mt-1">
              Аналіз DBN та нормативної документації
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#F4F7FB] border border-[#E2E8F2] rounded-2xl px-5 py-3 w-[320px]">
            <Search className="w-4 h-4 text-[#94A3B8]" />

            <input
              type="text"
              placeholder="Пошук..."
              className="bg-transparent outline-none text-sm flex-1 text-[#0B1736]"
            />
          </div>
        </header>

        {/* CHAT BODY */}
        <div className="flex-1 overflow-y-auto px-10 py-10 space-y-8">
          {/* USER MESSAGE */}
          <div className="flex justify-end">
            <div className="bg-[#4C6FFF] text-white max-w-[520px] px-6 py-5 rounded-[24px] shadow-lg">
              Які вимоги безпеки при роботі на висоті згідно DBN?
            </div>
          </div>

          {/* AI MESSAGE */}
          <div className="flex justify-start">
            <div className="bg-white border border-[#E6ECF5] max-w-[760px] rounded-[28px] p-7 shadow-sm">
              <h3 className="text-[#0B1736] font-bold text-lg">
                Вимоги безпеки
              </h3>

              <p className="mt-4 text-[#4B5565] leading-relaxed">
                Відповідно до DBN V.2.2-40:2018 працівники повинні
                використовувати страхувальні системи, сертифіковане обладнання
                та засоби індивідуального захисту.
              </p>

              <ul className="mt-5 space-y-3 text-[#4B5565]">
                <li>• Страхувальні пояси</li>
                <li>• Захисні каски</li>
                <li>• Огородження небезпечних зон</li>
                <li>• Сертифіковані риштування</li>
              </ul>

              {/* SOURCE */}
              <div className="mt-6 inline-flex items-center gap-2 bg-[#EEF2FF] text-[#4C6FFF] px-4 py-2 rounded-xl text-sm font-medium">
                DBN V.2.2-40:2018
              </div>
            </div>
          </div>
        </div>

        {/* INPUT */}
        <div className="bg-white border-t border-[#E6ECF5] p-6">
          <div className="max-w-5xl mx-auto flex items-center gap-4 bg-[#F4F7FB] border border-[#E2E8F2] rounded-[28px] px-6 py-4">
            <input
              type="text"
              placeholder="Запитайте про DBN, стандарти або документацію..."
              className="flex-1 bg-transparent outline-none text-[#0B1736]"
            />

            <button className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] flex items-center justify-center text-white shadow-xl hover:scale-[1.03] transition">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* RIGHT SOURCES PANEL */}
      <aside className="w-[340px] bg-white border-l border-[#E6ECF5] flex flex-col">
        {/* HEADER */}
        <div className="h-24 border-b border-[#E6ECF5] px-6 flex items-center">
          <div>
            <h3 className="text-xl font-bold text-[#0B1736]">Джерела</h3>

            <p className="text-sm text-[#7C8AA5] mt-1">
              Нормативна документація
            </p>
          </div>
        </div>

        {/* SOURCES */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* SOURCE CARD */}
          <div className="border border-[#E6ECF5] rounded-2xl p-5 hover:shadow-md transition cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#4C6FFF] bg-[#EEF2FF] px-3 py-1 rounded-full">
                DBN
              </span>

              <span className="text-xs text-[#94A3B8]">PDF</span>
            </div>

            <h4 className="mt-4 font-bold text-[#0B1736] leading-snug">
              DBN V.2.2-40:2018
            </h4>

            <p className="mt-3 text-sm text-[#667085] leading-relaxed">
              Правила безпеки під час виконання будівельних робіт на висоті.
            </p>
          </div>

          {/* SOURCE CARD */}
          <div className="border border-[#E6ECF5] rounded-2xl p-5 hover:shadow-md transition cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#4C6FFF] bg-[#EEF2FF] px-3 py-1 rounded-full">
                ISO
              </span>

              <span className="text-xs text-[#94A3B8]">DOC</span>
            </div>

            <h4 className="mt-4 font-bold text-[#0B1736] leading-snug">
              ISO 45001
            </h4>

            <p className="mt-3 text-sm text-[#667085] leading-relaxed">
              Система управління охороною праці та виробничою безпекою.
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
}
