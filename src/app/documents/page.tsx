import Link from "next/link";
import {
  MessageSquare,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Settings,
  Plus,
  Search,
  ChevronDown,
} from "lucide-react";

export default function DocumentsPage() {
  const documents = [
    {
      name: "ДБН В.2.2-40:2018.pdf",
      type: "Норма (DBN)",
      date: "20 трав. 2024",
      size: "1.2 MB",
      status: "Опрацьовано",
    },
    {
      name: "Правила охорони праці в будівництві.pdf",
      type: "Регламент",
      date: "19 трав. 2024",
      size: "856 KB",
      status: "Опрацьовано",
    },
    {
      name: "ДСТУ Б В.2.6-189:2013.pdf",
      type: "Стандарт",
      date: "18 трав. 2024",
      size: "1.5 MB",
      status: "Опрацьовано",
    },
    {
      name: "Пожежна безпека в будівництві.pdf",
      type: "Регламент",
      date: "17 трав. 2024",
      size: "652 KB",
      status: "Опрацьовано",
    },
    {
      name: "Внутрішній регламент компанії.pdf",
      type: "Внутрішній",
      date: "16 трав. 2024",
      size: "1.1 MB",
      status: "Опрацьовано",
    },
  ];

  return (
    <div className="h-screen w-full bg-[#f5f7fb] flex overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="w-[280px] bg-[#07152f] text-white flex flex-col px-5 py-6">
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <img
              src="/images/sentinel-logo_white.png"
              alt="Sentinel AI"
              className="w-8 h-8 object-contain"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">SENTINEL AI</h1>

            <p className="text-xs text-slate-300">ELECTRONORMS AI</p>
          </div>
        </div>

        {/* NEW CHAT BUTTON */}
        <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#4f6bff] to-[#6c63ff] flex items-center justify-center gap-2 text-base font-medium shadow-lg hover:opacity-95 transition mb-8">
          <Plus size={20} />
          Новий чат
        </button>

        {/* MENU */}
        <div className="flex flex-col gap-3">
          {/* ШІ ЧАТ */}
          <button className="flex items-center gap-4 h-14 px-4 rounded-xl hover:bg-white/5 text-white transition">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
              <MessageSquare size={20} />
            </div>

            <span className="font-medium text-[15px]">ШІ Чат</span>
          </button>

          {/* DASHBOARD */}
          <button className="flex items-center gap-4 h-14 px-4 rounded-xl hover:bg-white/5 text-white transition">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
              <LayoutDashboard size={20} />
            </div>

            <span className="font-medium text-[15px]">Інфо панель</span>
          </button>

          {/* DOCUMENTS ACTIVE */}
          <button className="flex items-center gap-4 h-14 px-4 rounded-xl bg-[#2453ff] text-white transition">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>

            <span className="font-medium text-[15px]">Документи</span>
          </button>

          {/* DBN */}
          <button className="flex items-center gap-4 h-14 px-4 rounded-xl hover:bg-white/5 text-white transition">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>

            <span className="font-medium text-[15px]">ДБН Перевірити</span>
          </button>
        </div>
        {/* DBN */}
        {/* SETTINGS */}
        <button className="flex items-center gap-4 h-14 px-4 rounded-xl hover:bg-white/5 text-white transition">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
            <Settings size={20} />
          </div>

          <span className="font-medium text-[15px]">Налаштування</span>
        </button>

        {/* SPACER */}
        <div className="flex-1" />

        {/* USER */}
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

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="bg-white rounded-[28px] shadow-sm border border-slate-200 min-h-full p-8">
          {/* TOP */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-[#0f172a]">Документи</h1>
            </div>

            <button className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#4f6bff] to-[#6c63ff] text-white font-medium shadow-md hover:opacity-95 transition">
              Завантажити документ
            </button>
          </div>

          {/* TABS */}
          <div className="flex gap-8 border-b border-slate-200 mb-6">
            <button className="pb-4 border-b-2 border-[#4f6bff] text-[#4f6bff] font-medium">
              Всі документи
            </button>

            <button className="pb-4 text-slate-500">Норми (DBN)</button>

            <button className="pb-4 text-slate-500">
              Внутрішні регламенти
            </button>

            <button className="pb-4 text-slate-500">Інструкції</button>

            <button className="pb-4 text-slate-500">Шаблони</button>
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Пошук документів..."
                className="w-full h-12 rounded-xl border border-slate-200 pl-11 pr-4 outline-none focus:ring-2 focus:ring-[#4f6bff]/20"
              />
            </div>

            <button className="h-12 px-5 rounded-xl border border-slate-200 bg-white flex items-center gap-2">
              Всі типи
              <ChevronDown size={18} />
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            {/* HEADER */}
            <div className="grid grid-cols-[3fr_1.5fr_1.5fr_1fr_1.5fr] bg-[#f8fafc] px-6 py-4 text-sm font-semibold text-slate-600">
              <div>Назва документа</div>
              <div>Тип</div>
              <div>Дата завантаження</div>
              <div>Розмір</div>
              <div>Статус</div>
            </div>

            {/* ROWS */}
            {documents.map((doc, index) => (
              <div
                key={index}
                className="grid grid-cols-[3fr_1.5fr_1.5fr_1fr_1.5fr] px-6 py-5 border-t border-slate-100 items-center hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                    <FileText size={18} className="text-red-500" />
                  </div>

                  <span className="font-medium text-slate-700">{doc.name}</span>
                </div>

                <div className="text-slate-600">{doc.type}</div>

                <div className="text-slate-600">{doc.date}</div>

                <div className="text-slate-600">{doc.size}</div>

                <div>
                  <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-end items-center gap-3 mt-8">
            <button className="w-10 h-10 rounded-xl border border-slate-200 bg-white">
              1
            </button>

            <button className="w-10 h-10 rounded-xl hover:bg-slate-100">
              2
            </button>

            <button className="w-10 h-10 rounded-xl hover:bg-slate-100">
              3
            </button>

            <span className="text-slate-400 px-2">...</span>

            <button className="w-10 h-10 rounded-xl hover:bg-slate-100">
              12
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
