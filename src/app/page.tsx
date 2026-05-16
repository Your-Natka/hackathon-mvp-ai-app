import Link from "next/link";
import { Search, ShieldCheck, FileText, Zap } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07152F] text-white overflow-hidden">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#07152F]/85 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-[1440px] mx-auto h-20 px-4 lg:px-8 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                font-bold
                text-xl
              "
            >
              <Image
                src="/images/image_logo_white.png"
                alt="Sentinel AI"
                width={54}
                height={54}
                className="object-contain"
                style={{ width: "52px", height: "52px" }}
              />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide text-white/90">
                SENTINEL AI
              </h1>

              <p className="text-white/60 text-xs">ELECTRONORM AI</p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden xl:flex items-center gap-10 text-[15px] text-white/75 font-medium">
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
          <div className="flex items-center gap-3 text-white/90">
            <Link
              href="/demo"
              className="
                bg-[#5F63FF]
                hover:bg-[#4B52FF]
                px-5
                py-3
                rounded-xl
                font-medium
                transition
                text-sm
              "
            >
              Демо-версія
            </Link>

            <button
              className="
                border
                border-white/20
                px-5
                py-3
                rounded-xl
                hover:bg-white/10
                transition
                text-sm
              "
            >
              Вхід
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        className="
          relative
          min-h-screen
          bg-cover
          bg-center
          bg-no-repeat
          overflow-hidden
          pt-[120px]
          pb-[80px]
        "
        style={{
          backgroundImage: "url('/images/sentinel.jpeg')",
        }}
      >
        {/* CONTENT */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-8">
          <div
            className="
              grid
              lg:grid-cols-[940px_1fr]
              items-center
              gap-10
              min-h-[78vh]
            "
          >
            {/* ================= LEFT SIDE ================= */}
            <div className="max-w-[940px]">
              {/* TITLE */}
              <h2
                className="
                  text-[37px]
                  md:text-[56px]
                  xl:text-[64px]
                  leading-[1.05]
                  font-bold
                  tracking-[-0.03em]
                  text-white/90
                "
              >
                Інтелектуальний помічник
                <br />
                для інженерів та проєктувальників
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-7
                  text-[18px]
                  xl:text-[20px]
                  leading-[1.7]
                  text-white/75
                  max-w-[560px]
                  text-white/70
                "
              >
                Миттєвий доступ до консультацій по DBN, ПУЕ, ДСТУ,
                електробезпеці та внутрішнім регламентам компанії.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-5 max-w-[500px]">
                {/* ITEM */}
                <div className="flex items-start gap-6">
                  <div
                    className="
                      w-5
                      h-5
                      mt-1
                      text-[#5EA2FF]
                      drop-shadow-[0_0_12px_rgba(94,162,255,0.45)]
                      shrink-0
                     
                    "
                  >
                    <Search className="w-8 h-8 text-[#76A5FF]" />
                  </div>

                  <div>
                    <h3 className="text-white/90 font-semibold text-lg">
                      Розумний пошук
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mt-1">
                      Швидкий пошук норм та вимог у документах.
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex items-start gap-6">
                  <div
                    className="
                      w-5
                      h-5
                      mt-1
                      text-[#5EA2FF]
                      drop-shadow-[0_0_12px_rgba(94,162,255,0.45)]
                      shrink-0
                    "
                  >
                    <ShieldCheck className="w-8 h-8 text-[#76A5FF]" />
                  </div>

                  <div>
                    <h3 className="text-white/90 font-semibold text-lg">
                      Точні відповіді
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mt-1">
                      AI аналізує DBN, ПУЕ та внутрішні регламенти.
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex items-start gap-6">
                  <div
                    className="
                      w-5
                      h-5
                      mt-1
                      text-[#5EA2FF]
                      drop-shadow-[0_0_12px_rgba(94,162,255,0.45)]
                      shrink-0
                    "
                  >
                    <FileText className="w-8 h-8 text-[#76A5FF]" />
                  </div>

                  <div>
                    <h3 className="text-white/90 font-semibold text-lg">
                      Документи компанії
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mt-1">
                      Єдиний центр інструкцій та нормативної документації.
                    </p>
                  </div>
                </div>

                {/* ITEM */}
                <div className="flex items-start gap-6">
                  <div
                    className="
                      w-5
                      h-5
                      mt-1
                      text-[#5EA2FF]
                      drop-shadow-[0_0_12px_rgba(94,162,255,0.45)]
                      shrink-0
                    "
                  >
                    <Zap className="w-8 h-8 text-[#76A5FF]" />
                  </div>

                  <div>
                    <h3 className="text-white/90 font-semibold text-lg">
                      Економія часу
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mt-1">
                      Автоматизація перевірок та пошуку інформації.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="hidden lg:flex justify-end items-end h-full">
              {/* BUTTONS */}
              <div className="pb-8 flex gap-5">
                <Link
                  href="/demo"
                  className="
                    bg-gradient-to-r
                    from-[#4C6FFF]
                    to-[#7356FF]
                    px-8
                    py-4
                    rounded-2xl
                    text-white
                    font-semibold
                    shadow-[0_15px_40px_rgba(76,111,255,0.35)]
                    hover:scale-[1.03]
                    transition
                    text-white/90
                  "
                >
                  Спробувати AI
                </Link>

                <button
                  className="
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    px-8
                    py-4
                    rounded-2xl
                    text-white
                    hover:bg-white/20
                    transition
                    text-white/90

                  "
                >
                  Дізнатися більше
                </button>
              </div>
            </div>
          </div>

          {/* TRUST */}
          <div className="relative z-10 mt-10">
            <p className="text-[#C0CAE0] text-sm tracking-[0.22em] uppercase">
              Нам довіряють будівельні компанії
            </p>

            <div className="flex flex-wrap gap-10 items-center mt-6 text-white/70 font-bold text-xl">
              <span>SKANSKA</span>
              <span>VINCI</span>
              <span>AECOM</span>
              <span>STRABAG</span>
              <span>Turner</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
