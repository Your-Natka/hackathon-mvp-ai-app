export function MessageBubble({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  return (
    <div
      className={
        role === "user"
          ? "ml-auto bg-white text-black p-3 rounded-xl max-w-[70%]"
          : "bg-zinc-800 text-white p-3 rounded-xl max-w-[70%]"
      }
    >
      {content}
    </div>
  );
}
