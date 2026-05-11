// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      {/* NAVBAR */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold">
              S
            </div>

            <div>
              <h1 className="font-bold text-lg">Вартовий</h1>

              <p className="text-xs text-gray-400">Будівництво AI</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#">Продукт</a>
            <a href="#">Особливості</a>
            <a href="#">Випадки використання</a>
            <a href="#">Цінування</a>
          </nav>

          <Link
            href="/chat"
            className="bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-xl font-medium"
          >
            Спробуйте демо-версію
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm mb-6">
            AI ДЛЯ БУДІВНИЦТВА
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Ваш AI-помічник
            <br />
            для будівництва
            <br />
            документів &
            <br />
            Регламентів
          </h2>

          <p className="text-gray-400 text-lg mt-8 max-w-xl">
            ДЛЯ БУДІВНИЦТВА - це AI-помічник, який допомагає будівельним
            компаніям швидко знаходити відповіді на основі їхніх документів та
            регламентів. Замість перегляду сотень сторінок, просто запитайте і
            отримайте точну відповідь, засновану на ваших власних даних.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/chat"
              className="bg-violet-600 hover:bg-violet-500 transition px-7 py-4 rounded-2xl font-semibold"
            >
              Спробуйте демо-версію
            </Link>

            <button className="border border-white/10 hover:border-white/20 px-7 py-4 rounded-2xl">
              Дізнатися більше
            </button>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-4 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                🔎
              </div>

              <h3 className="font-semibold mb-2">Розумний пошук</h3>

              <p className="text-sm text-gray-400">
                Знаходьте відповіді на тисячі питань у будівельній документації
                миттєво.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                🛡
              </div>

              <h3 className="font-semibold mb-2">Точні відповіді</h3>

              <p className="text-sm text-gray-400">
                Відповіді AI, засновані на надійних джерелах компанії та
                регулятивних актах.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                🏗
              </div>

              <h3 className="font-semibold mb-2">Створено для будівництва</h3>

              <p className="text-sm text-gray-400">
                Оптимізовано для стандартів DBN, правил безпеки та внутрішніх
                документів.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-20 rounded-full" />

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="font-semibold">AI Помічник</h3>

                <p className="text-sm text-gray-400">
                  Чат знань про будівництво
                </p>
              </div>

              <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                Онлайн
              </div>
            </div>

            {/* CHAT */}
            <div className="space-y-5 mt-6">
              {/* USER */}
              <div className="flex justify-end">
                <div className="bg-violet-600 px-5 py-4 rounded-2xl max-w-md">
                  Які вимоги безпеки є для роботи на висоті?
                </div>
              </div>

              {/* AI */}
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-5 py-4 rounded-2xl max-w-md">
                  Згідно зі стандартами DBN, працівники зростом вище 1,3 м
                  повинні використовувати:
                  <ul className="list-disc ml-5 mt-3 text-sm text-gray-300 space-y-1">
                    <li>Індивідуальний захист від падіння</li>
                    <li>Ремень безпеки</li>
                    <li>Огородження</li>
                    <li>Сертифіковане обладнання</li>
                  </ul>
                  <div className="mt-4 text-xs text-violet-300">
                    Джерело: DBN V.2.2-40:2018
                  </div>
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div className="mt-6 flex items-center gap-3">
              <input
                placeholder="Питання про будівельні документи..."
                className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <button className="bg-violet-600 hover:bg-violet-500 transition px-6 py-4 rounded-2xl">
                Надіслати
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
