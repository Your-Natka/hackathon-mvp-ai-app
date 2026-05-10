import { useState } from "react";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (content: string) => {
    const newMessages: Message[] = [...messages, { role: "user", content }];

    setMessages(newMessages);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.response },
    ]);

    setLoading(false);
  };

  return { messages, sendMessage, loading };
}
