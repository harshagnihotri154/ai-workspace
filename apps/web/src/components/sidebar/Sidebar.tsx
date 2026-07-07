import {
  Sparkles,
  Plus,
  Search,
  MessageSquare,
  Settings,
  User,
  ChevronRight,
} from "lucide-react";

import { useQuery } from "@tanstack/react-query";

import { getChats } from "../../services/chat-history.service";

export default function Sidebar() {
  const {
    data: chats = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chats"],
    queryFn: getChats,
  });

  return (
    <aside className="hidden w-80 shrink-0 flex-col border-r border-white/5 bg-[#08080A] lg:flex">
      {/* Header */}
      <div className="border-b border-zinc-800 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 shadow-lg shadow-violet-600/20">
            <Sparkles className="text-white" size={20} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              AI Workspace
            </h2>

            <p className="text-xs text-zinc-500">
              Production AI Platform
            </p>
          </div>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-600/20">
          <Plus size={18} />
          New Chat
        </button>
      </div>

      {/* Search */}
      <div className="px-6 py-5">
        <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 transition focus-within:border-violet-500">
          <Search size={18} className="text-zinc-500" />

          <input
            placeholder="Search conversations..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-4">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Conversations
        </p>

        {isLoading && (
          <div className="px-3 py-6 text-center text-sm text-zinc-500">
            Loading conversations...
          </div>
        )}

        {error && (
          <div className="px-3 py-6 text-center text-sm text-red-500">
            Failed to load conversations.
          </div>
        )}

        {!isLoading && !error && chats.length === 0 && (
          <div className="px-3 py-6 text-center text-sm text-zinc-500">
            No conversations yet.
          </div>
        )}

        <div className="space-y-1">
          {chats.map((chat, index) => (
            <button
              key={chat._id}
              className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 transition-all duration-200 ${
                index === 0
                  ? "bg-violet-500/10 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <MessageSquare
                  size={17}
                  className={
                    index === 0 ? "text-violet-400" : ""
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
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="px-5 pb-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white">
              AI Usage
            </p>

            <p className="text-xs text-violet-400">
              72%
            </p>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            36 / 50 prompts today
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-5">
        <button className="mb-3 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-white">
          <Settings size={18} />
          Settings
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-zinc-900 p-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600">
            <User
              size={18}
              className="text-white"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Harsh Agnihotri
            </p>

            <p className="text-xs text-green-400">
              ● Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}