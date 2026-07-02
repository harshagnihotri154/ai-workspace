import { Bot, User } from "lucide-react";
import ThinkingIndicator from "./ThinkingIndicator";
import type { Message } from "../types/chat";

type Props = {
  message: Message;
};

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  if (!isUser && message.isThinking) {
    return (
      <div className="w-full border-b border-zinc-900 py-10">
        <ThinkingIndicator />
      </div>
    );
  }

  return (
    <section className="w-full border-b border-zinc-900 py-10">
      <div className="mx-auto flex max-w-4xl gap-5">

        {/* Avatar */}

        <div
          className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
            isUser
              ? "bg-zinc-800"
              : "bg-gradient-to-br from-violet-600 to-indigo-500"
          }`}
        >
          {isUser ? (
            <User size={18} className="text-white" />
          ) : (
            <Bot size={18} className="text-white" />
          )}
        </div>

        {/* Content */}

        <div className="flex-1">

          <h3 className="mb-4 text-sm font-semibold text-white">
            {isUser ? "You" : "AI Workspace"}
          </h3>

          <div className="text-[16px] leading-8 text-zinc-300 whitespace-pre-wrap break-words">
            {message.content}
          </div>

        </div>

      </div>
    </section>
  );
}