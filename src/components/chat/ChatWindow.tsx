type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatWindowProps = {
  messages: Message[];
};

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
            message.role === "user"
              ? "ml-auto bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-100"
          }`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
}
