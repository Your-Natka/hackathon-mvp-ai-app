import { useState } from "react";
import { Message } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    const newMessages = [...messages, { role: "user", content: text }];

    setMessages(newMessages);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
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
