"use client";

import { useChat } from "@/hooks/useChat";
import { useState } from "react";

export default function ChatPage() {
  const { messages, sendMessage, loading } = useChat();
  const [input, setInput] = useState("");

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1>Chat MVP</h1>

      <div style={{ marginTop: 20 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "10px 0" }}>
            <b>{m.role}:</b> {m.content}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "80%" }}
        />
        <button
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
        >
          Send
        </button>
      </div>

      {loading && <p>Loading...</p>}
    </div>
  );
}
