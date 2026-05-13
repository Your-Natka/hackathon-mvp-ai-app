"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);
    setResponse("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    let result = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      result += chunk;
      setResponse((prev) => prev + chunk);
    }

    setLoading(false);
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">AI Chat</h1>

      <textarea
        className="w-full border p-3 rounded"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Напиши питання..."
      />

      <button
        onClick={sendMessage}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Думає..." : "Надіслати"}
      </button>

      <div className="mt-6 whitespace-pre-wrap border-t pt-4">{response}</div>
    </div>
  );
}
