import Image from "next/image";
import Link from "next/link";
import { Search, ShieldCheck, FileText, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07152F] text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#07152F]/90 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-[1440px] mx-auto h-24 px-8 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/image_logo.png"
              alt="Sentinel AI"
              width={54}
              height={54}
              className="object-contain"
              style={{ width: "52px", height: "52px" }}
            />

            <div>
              <h1 className="text-xl font-bold tracking-wide">SENTINEL AI</h1>

              <p className="text-[#B7C4E0] text-xs">
                Construction Knowledge System
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden xl:flex items-center gap-10 text-[15px] font-medium text-[#E3E9F8]">
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

            <button className="border border-white/20 px-5 py-3 rounded-xl hover:bg-white/10 transition">
              Вхід
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-16">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Construction"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07152F]/95 via-[#07152F]/75 to-[#07152F]/40" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8">
          <div className="grid xl:grid-cols-[1fr_360px] gap-12 items-start">
            {/* LEFT SIDE */}
            <div className="max-w-3xl pt-16">
              {/* BADGE */}

              {/* TITLE */}
              <h2 className="mt-8 text-5xl xl:text-6xl leading-[1.08] font-bold max-w-4xl">
                Інтелектуальний помічник
                <br />
                для інженерів та
                <br />
                проєктувальників
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 text-[#D8E1F5] text-xl leading-relaxed max-w-2xl">
                Миттєвий доступ до консультацій по будівельним нормам, DBN,
                стандартам та внутрішнім регламентам компанії.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-50">
                <Link
                  href="/chat"
                  className="bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-[1.02] transition"
                >
                  Спробувати AI
                </Link>

                <button className="border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl hover:bg-white/20 transition">
                  Дізнатися більше
                </button>
              </div>

              {/* TRUST */}
              <div className="mt-24">
                <p className="text-[#C0CAE0] text-sm tracking-[0.22em] uppercase">
                  Нам довіряють будівельні компанії
                </p>

                <div className="flex flex-wrap gap-10 items-center mt-8 text-white/80 font-bold text-2xl">
                  <span>SKANSKA</span>
                  <span>VINCI</span>
                  <span>AECOM</span>
                  <span>STRABAG</span>
                  <span>Turner</span>
                </div>
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="flex flex-col gap-5 w-full max-w-[340px] ml-auto pt-10">
              {/* CARD 1 */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-[#0B1736] border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                  <Search className="w-6 h-6 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-3">Розумний пошук</h3>

                <p className="text-[#667085] text-sm leading-relaxed">
                  Швидкий пошук норм, правил та вимог у документах.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-[#0B1736] border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-3">Точні відповіді</h3>

                <p className="text-[#667085] text-sm leading-relaxed">
                  AI аналізує DBN та внутрішні регламенти.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-[#0B1736] border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                  <FileText className="w-6 h-6 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-3">Документи компанії</h3>

                <p className="text-[#667085] text-sm leading-relaxed">
                  Єдиний центр інструкцій та документації.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-[#0B1736] border border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-[#4C6FFF]" />
                </div>

                <h3 className="font-bold text-lg mb-3">Економія часу</h3>

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
