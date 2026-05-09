export default function Page() {
  return (
    <main className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-80 border-r border-white/10 p-4">
        <h2 className="text-xl font-bold">Chats</h2>
      </aside>

      {/* Chat Area */}
      <section className="flex flex-1 flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            <div className="max-w-[70%] rounded-2xl bg-zinc-800 p-4">
              Hello 👋
            </div>

            <div className="ml-auto max-w-[70%] rounded-2xl bg-white text-black p-4">
              Hi AI
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-4">
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-xl bg-zinc-900 p-4 outline-none"
              placeholder="Ask something..."
            />

            <button className="rounded-xl bg-white px-6 text-black">
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
