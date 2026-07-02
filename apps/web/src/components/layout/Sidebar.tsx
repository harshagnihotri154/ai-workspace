import {
  Sparkles,
  Plus,
  Search,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-r border-zinc-800 bg-[#070709] lg:flex">

      <div className="p-6">

        <div className="mb-8 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500">

            <Sparkles
              className="text-white"
              size={18}
            />

          </div>

          <div>

            <h2 className="font-semibold text-white">
              AI Workspace
            </h2>

            <p className="text-xs text-zinc-500">
              v1.0
            </p>

          </div>

        </div>

        <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-medium text-white transition hover:bg-violet-500">

          <Plus size={18} />

          New Chat

        </button>

        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-3">

          <Search
            size={18}
            className="text-zinc-500"
          />

          <input
            placeholder="Search"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />

        </div>

      </div>

      <div className="flex-1" />

      <div className="border-t border-zinc-800 p-6">

        <button className="flex items-center gap-3 text-zinc-400 hover:text-white">

          <Settings size={18} />

          Settings

        </button>

      </div>

    </aside>
  );
}