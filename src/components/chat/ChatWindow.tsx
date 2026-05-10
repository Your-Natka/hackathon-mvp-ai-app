"use client";

import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";

export function ChatWindow() {
  return (
    <div>
      <MessageBubble />
      <ChatInput />
    </div>
  );
}
