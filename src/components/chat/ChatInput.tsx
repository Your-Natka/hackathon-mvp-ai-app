"use client";

import { useState } from "react";

type ChatInputProps = {
  onSend: (content: string) => void | Promise<void>;
  loading?: boolean;
};

export default function ChatInput({ onSend, loading = false }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (!input.trim() || loading) return;

    await onSend(input);

    setInput("");
  };

  return (
    <div className="border-t border-zinc-800 p-4">
      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI about construction documents..."
          className="min-h-[60px] flex-1 resize-none rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-5 text-white transition hover:bg-blue-500 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
