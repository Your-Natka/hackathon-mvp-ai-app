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
              <h1 className="font-bold text-lg">SENTINEL</h1>

              <p className="text-xs text-gray-400">Construction AI</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#">Product</a>
            <a href="#">Features</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
          </nav>

          <Link
            href="/chat"
            className="bg-violet-600 hover:bg-violet-500 transition px-5 py-2 rounded-xl font-medium"
          >
            Try Demo
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm mb-6">
            AI FOR CONSTRUCTION
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Your AI Assistant
            <br />
            for Construction
            <br />
            Documents &
            <br />
            Regulations
          </h2>

          <p className="text-gray-400 text-lg mt-8 max-w-xl">
            Instantly search construction standards, DBN regulations, company
            policies, safety instructions, and project documents using
            AI-powered enterprise search.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/chat"
              className="bg-violet-600 hover:bg-violet-500 transition px-7 py-4 rounded-2xl font-semibold"
            >
              Try Demo
            </Link>

            <button className="border border-white/10 hover:border-white/20 px-7 py-4 rounded-2xl">
              Learn More
            </button>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-4 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                🔎
              </div>

              <h3 className="font-semibold mb-2">Smart Search</h3>

              <p className="text-sm text-gray-400">
                Find answers across thousands of construction documents
                instantly.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                🛡
              </div>

              <h3 className="font-semibold mb-2">Accurate Answers</h3>

              <p className="text-sm text-gray-400">
                AI responses grounded in trusted company and regulatory sources.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                🏗
              </div>

              <h3 className="font-semibold mb-2">Built for Construction</h3>

              <p className="text-sm text-gray-400">
                Optimized for DBN standards, safety rules, and internal
                documents.
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
                <h3 className="font-semibold">AI Assistant</h3>

                <p className="text-sm text-gray-400">
                  Construction Knowledge Chat
                </p>
              </div>

              <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">
                Online
              </div>
            </div>

            {/* CHAT */}
            <div className="space-y-5 mt-6">
              {/* USER */}
              <div className="flex justify-end">
                <div className="bg-violet-600 px-5 py-4 rounded-2xl max-w-md">
                  What are the safety requirements for working at height?
                </div>
              </div>

              {/* AI */}
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-5 py-4 rounded-2xl max-w-md">
                  According to DBN standards, workers above 1.3m height must
                  use:
                  <ul className="list-disc ml-5 mt-3 text-sm text-gray-300 space-y-1">
                    <li>Personal fall protection</li>
                    <li>Safety harness</li>
                    <li>Guardrails</li>
                    <li>Certified equipment</li>
                  </ul>
                  <div className="mt-4 text-xs text-violet-300">
                    Source: DBN V.2.2-40:2018
                  </div>
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div className="mt-6 flex items-center gap-3">
              <input
                placeholder="Ask about construction documents..."
                className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <button className="bg-violet-600 hover:bg-violet-500 transition px-6 py-4 rounded-2xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
