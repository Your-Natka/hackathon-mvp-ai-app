"use client";

import { useChat } from "@/hooks/useChat";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";
import type { Message } from "@/hooks/useChat";

export default function ChatPage() {
  const { messages, sendMessage, loading } = useChat();

  return (
    <main className="flex flex-col h-screen bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-white/10 p-4">
          <h2 className="text-xl font-bold">Chats</h2>
        </aside>

        {/* Chat */}
        <section className="flex flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-6">
            <ChatWindow messages={messages} />
          </div>

          <ChatInput onSend={sendMessage} loading={loading} />
        </section>
      </div>
    </main>
  );
}
