import {
  ChevronRight,
  MessageSquare,
} from "lucide-react";

import type { ChatHistory } from "../../types/chat-history";

interface Props {
  chat: ChatHistory;
  active: boolean;
  onClick: () => void;
}

export default function SidebarItem({
  chat,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 transition-all duration-200 ${
        active
          ? "bg-violet-500/10 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <MessageSquare
          size={17}
          className={
            active ? "text-violet-400" : ""
          }
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            {chat.title}
          </p>

          <p className="truncate text-xs text-zinc-500">
            {chat.lastMessage || "No messages yet"}
          </p>
        </div>
      </div>

      <ChevronRight
        size={15}
        className="opacity-0 transition group-hover:opacity-100"
      />
    </button>
  );
}