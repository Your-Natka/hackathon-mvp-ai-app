import { useState, useEffect } from "react";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // LOAD SAVED MESSAGES
  // =========================
  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    try {
      if (window.electronAPI) {
        const saved = await window.electronAPI.loadData();

        if (saved && Array.isArray(saved)) {
          setMessages(saved);
        }
      }
    } catch (err) {
      console.error("Load error:", err);
    }
  }

  // =========================
  // SAVE MESSAGES
  // =========================
  async function saveMessages(updated: Message[]) {
    try {
      setMessages(updated);

      if (window.electronAPI) {
        await window.electronAPI.saveData(updated);
      }
    } catch (err) {
      console.error("Save error:", err);
    }
  }

  // =========================
  // SEND MESSAGE
  // =========================
  const sendMessage = async (content: string) => {
    const newMessages: Message[] = [...messages, { role: "user", content }];

    await saveMessages(newMessages);

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (!res.ok) {
        console.error("API ERROR");
        return;
      }

      const data = await res.json();

      const updatedMessages: Message[] = [
        ...newMessages,
        {
          role: "assistant",
          content: data.response || data.answer || "No response",
        },
      ];

      await saveMessages(updatedMessages);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    loading,
  };
}
