import { cn } from "@/lib/utils";

export function MessageBubble({
  role,
  content,
  sources,
}: {
  role: "user" | "assistant";
  content: string;
  sources?: { content: string }[];
}) {
  return (
    <div
      className={cn(
        "w-full flex",
        role === "user" ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-sm whitespace-pre-wrap",
          role === "user"
            ? "bg-gradient-to-r from-[#4C6FFF] to-[#7356FF] text-white max-w-[70%]"
            : "bg-white border border-[#E6ECF5] text-[#0B1736] max-w-[80%]",
        )}
      >
        {/* CONTENT */}
        <div>{content}</div>

        {/* SOURCES (RAG citations) */}
        {role === "assistant" && sources && sources.length > 0 && (
          <div className="mt-4 border-t border-[#E6ECF5] pt-3">
            <p className="text-xs font-semibold text-[#7C8AA5] mb-2">Sources</p>

            <div className="space-y-2">
              {sources.slice(0, 3).map((s, i) => (
                <div
                  key={i}
                  className="text-xs text-[#5B6B86] bg-[#F4F7FB] p-2 rounded-lg"
                >
                  Source {i + 1}: {s.content.slice(0, 120)}...
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
