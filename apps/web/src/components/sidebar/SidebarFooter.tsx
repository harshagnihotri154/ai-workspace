import { Settings, User } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="border-t border-zinc-800 p-5">
      <button className="mb-3 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-white">
        <Settings size={18} />
        Settings
      </button>

      <div className="flex items-center gap-3 rounded-2xl bg-zinc-900 p-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600">
          <User size={18} className="text-white" />
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
  );
}