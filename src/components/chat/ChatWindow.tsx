"use client";

import { useChat } from "@/hooks/useChat";
import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";

export function ChatWindow() {
  const { messages, sendMessage, loading } = useChat();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4 space-y-3">
        {messages.map((m, i) => (
          <MessageBubble key={i} {...m} />
        ))}
      </div>

      <ChatInput onSend={sendMessage} loading={loading} />
    </div>
  );
}
