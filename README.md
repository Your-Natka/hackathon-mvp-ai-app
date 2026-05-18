## Deploy on Vercel

tree
.
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── profile.txt
├── public
│ └── images
│ ├── hero.jpg
│ └── image_logo.png
| ├──docs
│ | ├── dbn_electric.pdf
| | ├── pbees.pdf
| | └── pue.pdf
├── src
│ ├── app
│ │ ├── api
│ │ ├── chat
| | | └── route.ts
│ │ ├── search
│ │ | └── route.ts
│ │ ├── upload
│ │ ├── dashboard
│ │ ├── demo
│ │ ├── folder
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── chat
| | └──page.tsx
│ ├── components
│ │ ├── chat
│ │ └── layout
│ ├── hooks
│ │ └── useChat.ts
│ ├── lib
│ │ ├── docs.ts
│ │ ├── openai.ts
│ │ ├── search.ts
│ │ └── utils.ts
│ ├── services
│ │ └── ai.service.ts
│ ├── types
│ │ └── chat.ts
│ └── utils
│ ├── helpers.ts
│ └── prompts.ts
└── tsconfig.json

Запускається командою npm run dev

⚙️ РИТМ ПРОЄКТУ (SENTINEL AI)

1. 🧠 Загальна ідея продукту

Ви будуєте:

AI-платформу для роботи з електронормами (DBN / ПУЕ / ДСТУ / ПБЕЕС)

Це не просто чат — це:

чат + база знань
пошук по документах
аналіз нормативів
відповідь AI з прив’язкою до джерел 2. 🧱 ТЕХНІЧНА АРХІТЕКТУРА
FRONTEND (те що ти зараз пишеш)
⚙️ Бібліотеки:
Next.js (App Router) → основа сайту
React → UI логіка
TypeScript → типізація
Tailwind CSS → стилі
Lucide React → іконки
📌 Що робить фронтенд:
чат інтерфейс
відправка запитів в AI API
показ відповідей
показ “джерел” (sources)
sidebar + навігація
upload сторінка (документи)
BACKEND (серце системи)
⚙️ Бібліотеки (типовий стек для тебе):
Next.js API Routes / Route Handlers
або Node.js (Express/NestJS — якщо винесемо окремо)
OpenAI API / LLM (або інша модель)
MongoDB (через Mongoose / MongoEngine якщо Python частина)
📌 Що робить backend:
приймає /api/chat
передає текст в AI модель
підтягує релевантні документи
повертає:
{
"answer": "...",
"sources": [...]
} 3. 📚 БАЗА ЗНАНЬ (ВАШ ГОЛОВНИЙ МОДУЛЬ)

Це ключова частина системи.

📥 Як ви "загружаєте документи"
Варіант, який у вас логічний зараз:

1. Upload сторінка (/upload)
   користувач завантажує PDF / DOC
   файл відправляється на backend
2. Обробка документів:
   PDF → текст
   DOC → текст
   розбиття на chunks (chunks = шматки тексту 300–1000 слів)
   ⚙️ Технології для цього:
   pdf-parse (PDF)
   langchain (дуже бажано)
   або custom chunking
   mongoose / mongoengine для збереження
   📦 Як зберігається база знань

MongoDB структура:

documents

- id
- title
- content_chunks[]
- embeddings[]
- source_type (DBN / PUE / etc)

4. 🧠 AI ЛОГІКА (RAG система)

Ви робите:

🔎 Retrieval Augmented Generation (RAG)
Як це працює:
користувач пише:
Що таке PE провідник?
backend:
шукає в базі знань релевантні chunks
через embeddings (vector search)
додає це в prompt:
Context:
[витяги з ПУЕ]

Question:
Що таке PE провідник?
AI дає відповідь
⚙️ Технології:
OpenAI embeddings / або open-source
vector DB:
Pinecone
Weaviate
або MongoDB Atlas Vector Search 5. 💬 CHAT СИСТЕМА
Frontend логіка:
messages state
loading state
sources state
Backend:
/api/chat
flow:
UI → API → DB search → AI → response → UI 6. 📂 ДОКУМЕНТИ (UPLOAD SYSTEM)
Як працює:

1. Upload
   користувач кидає PDF
2. Backend:
   читає файл
   розбиває на chunks
   створює embeddings
3. Save:
   MongoDB
4. 🧩 UI КОНЦЕПЦІЯ (ВАШ ПРОЕКТ)
   Layout:
   Sidebar (історія + меню)
   Main chat
   Right panel (sources)
   Top header (controls)
   Header (як ти зробив зараз):
   База знань (відкриває документи)
   Очистка чату
   AI Online status
5. 🚀 РОБОЧИЙ РИТМ РОЗРОБКИ
   Етап 1:
   UI чат
   sidebar
   header
   Етап 2:
   /api/chat
   mock AI відповіді
   Етап 3:
   upload PDF
   збереження в MongoDB
   Етап 4:
   chunking документів
   Етап 5:
   embeddings + search
   Етап 6:
   RAG (AI + контекст)
   Етап 7:
   polish UI + UX
