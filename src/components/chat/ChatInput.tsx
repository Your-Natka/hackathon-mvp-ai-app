"use client";

import { useEffect, useRef, useState } from "react";

type ChatInputProps = {
  onSend: (content: string) => void | Promise<void>;
  loading?: boolean;
};

export default function ChatInput({ onSend, loading = false }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // auto resize like ChatGPT
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  }, [input]);

  const handleSubmit = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    await onSend(text);

    // reset height after send
    requestAnimationFrame(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "60px";
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter = send, Shift+Enter = new line
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-4">
      <div className="mx-auto flex max-w-3xl items-end gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-lg">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask AI about DBN, construction rules, or documents..."
          className="max-h-[160px] flex-1 resize-none bg-transparent px-2 py-2 text-white outline-none placeholder:text-zinc-500"
        />

        <button
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
          className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 font-medium text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
  );
}
