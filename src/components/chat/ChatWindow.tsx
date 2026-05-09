"use client";

import { useChat } from "@/hooks/useChat";
import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";

export function ChatWindow() {
  const { messages, sendMessage, loading } = useChat();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}
      </div>

      <ChatInput onSend={sendMessage} loading={loading} />
    </div>
  );
}
