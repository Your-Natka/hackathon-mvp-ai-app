import Image from "next/image";
import Link from "next/link";
import { Search, ShieldCheck, FileText, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07152F] text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#07152F]/95 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto h-24 px-8 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/sentinel_logo.png"
              alt="Sentinel AI"
              width={52}
              height={52}
              className="object-contain"
            />

            <div>
              <h1 className="text-xl font-bold tracking-wide">SENTINEL AI</h1>

              <p className="text-[#8CA0C7] text-xs">
                Construction Knowledge System
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden xl:flex items-center gap-10 text-[15px] font-medium text-[#D5DDF2]">
            <a href="#" className="hover:text-white transition">
              Про продукт
            </a>

            <a href="#" className="hover:text-white transition">
              AI-Можливості
            </a>

            <a href="#" className="hover:text-white transition">
              Контакти
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <Link
              href="/demo"
              className="bg-[#5F63FF] hover:bg-[#5257FF] px-5 py-3 rounded-xl font-medium transition"
            >
              Демо-версія
            </Link>

            <button className="border border-[#32476F] px-5 py-3 rounded-xl hover:bg-white/10 transition">
              Вхід
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen pt-32">
        {/* BG IMAGE */}
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/images/sentinel_2026.jpg"
            alt="Construction"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152F] via-[#07152F]/95 to-[#07152F]/80" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid xl:grid-cols-[1fr_420px] gap-16 items-start">
            {/* LEFT CONTENT */}
            <div className="max-w-3xl">
              {/* TITLE */}
              <h2 className="mt-8 text-6xl leading-[1.1] font-bold">
                Інтелектуальний помічник для інженерів та проєктувальників
              </h2>

              {/* DESC */}
              <p className="mt-8 text-[#B8C5E2] text-xl leading-relaxed max-w-2xl">
                Миттєвий доступ до консультацій по будівельним нормам, DBN,
                стандартам та внутрішнім регламентам компанії.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  href="/chat"
                  className="bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-[1.02] transition"
                >
                  Спробувати AI
                </Link>

                <button className="border border-[#41557E] px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                  Дізнатися більше
                </button>
              </div>

              {/* TRUST */}
              <div className="mt-20">
                <p className="text-[#8FA2C7] text-sm tracking-[0.25em] uppercase">
                  Нам довіряють будівельні компанії
                </p>

                <div className="flex flex-wrap gap-12 items-center mt-8 text-[#A9B5CF] font-bold text-2xl">
                  <span>SKANSKA</span>
                  <span>VINCI</span>
                  <span>AECOM</span>
                  <span>STRABAG</span>
                  <span>Turner</span>
                </div>
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="flex flex-col gap-4 max-w-[360px] ml-auto">
              {/* CARD 1 */}
              <div className="bg-white rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.18)] text-[#0B1736]">
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                  <Search className="w-5 h-5 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-2">Розумний пошук</h3>

                <p className="text-[#667085] text-sm leading-relaxed">
                  Швидкий пошук норм, правил та вимог у документах.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.18)] text-[#0B1736]">
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-2">Точні відповіді</h3>

                <p className="text-[#667085] text-sm leading-relaxed">
                  AI аналізує DBN та внутрішні регламенти.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.18)] text-[#0B1736]">
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-2">Документи компанії</h3>

                <p className="text-[#667085] text-sm leading-relaxed">
                  Єдиний центр інструкцій та документації.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.18)] text-[#0B1736]">
                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-2">Економія часу</h3>

                <p className="text-[#667085] text-sm leading-relaxed">
                  Автоматизація рутинних перевірок та пошуку.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
