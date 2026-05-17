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
          <div className="max-w-[960px] min-h-[78vh] flex flex-col justify-center">
            {/* TITLE */}
            <h2
              className="
          text-[36px]
          md:text-[56px]
          xl:text-[68px]
          leading-[1.02]
          tracking-[-0.04em]
          font-semibold
          text-white/90
        "
            >
              Помічник у проєктуванні, будівництві та обслуговуванні електричних
              мереж
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
          mt-8
          text-[18px]
          xl:text-[20px]
          leading-[1.8]
          text-white/70
          max-w-[640px]
          text-white/70
        "
            >
              Миттєвий доступ до консультацій по ДБН, стандартам, внутрішнім
              регламентам компанії та технічній документації на базі штучного
              інтелекту.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-6 max-w-[560px]">
              {/* ITEM */}
              <div className="flex items-start gap-5">
                <div
                  className="
              w-12
              h-12
              rounded-2xl
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
              shrink-0
              backdrop-blur-xl
            "
                >
                  <Search className="w-6 h-6 text-[#76A5FF]" />
                </div>

                <div>
                  <h3 className="text-white/90 font-semibold text-lg">
                    Розумний пошук
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    Швидкий пошук норм, вимог та технічної інформації у великих
                    масивах документації.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-5">
                <div
                  className="
              w-12
              h-12
              rounded-2xl
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
              shrink-0
              backdrop-blur-xl
            "
                >
                  <ShieldCheck className="w-6 h-6 text-[#76A5FF]" />
                </div>

                <div>
                  <h3 className="text-white/90 font-semibold text-lg">
                    Точні відповіді
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    AI аналізує ДБН, ПУЕ та внутрішні регламенти для формування
                    релевантних відповідей.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-5">
                <div
                  className="
              w-12
              h-12
              rounded-2xl
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
              shrink-0
              backdrop-blur-xl
            "
                >
                  <FileText className="w-6 h-6 text-[#76A5FF]" />
                </div>

                <div>
                  <h3 className="text-white/90 font-semibold text-lg">
                    Документи компанії
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    Централізований доступ до нормативів, інструкцій та
                    технічної документації.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-5">
                <div
                  className="
              w-12
              h-12
              rounded-2xl
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
              shrink-0
              backdrop-blur-xl
            "
                >
                  <Zap className="w-6 h-6 text-[#76A5FF]" />
                </div>

                <div>
                  <h3 className="text-white/90 font-semibold text-lg">
                    Економія часу
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    Автоматизація перевірок та швидкий пошук потрібної
                    інформації для інженерів.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-wrap gap-5">
              <Link
                href="/demo"
                className="
            bg-gradient-to-r
            from-[#4C6FFF]
            to-[#7356FF]
            px-8
            py-4
            rounded-2xl
            text-white/90
            font-semibold
            shadow-[0_15px_40px_rgba(76,111,255,0.35)]
            hover:scale-[1.03]
            transition
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
            text-white/90
            hover:bg-white/20
            transition
          "
              >
                Дізнатися більше
              </button>
            </div>
          </div>

          {/* TRUST */}
          <div className="relative z-10 mt-16">
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
