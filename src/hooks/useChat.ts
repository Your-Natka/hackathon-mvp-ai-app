import { useState, useEffect } from "react";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("messages:", messages);
  }, [messages]);

  const sendMessage = async (content: string) => {
    console.log("SEND:", content);
    const newMessages: Message[] = [...messages, { role: "user", content }];

    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API error:", errorText);
        return;
      }

      const data = await res.json();

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.response || data.answer || "No response",
        },
      ]);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
}
