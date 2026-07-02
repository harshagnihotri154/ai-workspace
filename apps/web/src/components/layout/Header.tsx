import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-800 bg-[#09090B]/80 px-8 backdrop-blur-xl">

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500">

          <Sparkles
            size={20}
            className="text-white"
          />

        </div>

        <div>

          <h1 className="text-lg font-semibold text-white">
            AI Workspace
          </h1>

          <p className="text-xs text-zinc-500">
            Build • Learn • Ship
          </p>

        </div>

      </div>

      <div className="flex items-center gap-2">

        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

        <span className="text-sm text-zinc-400">
          Connected
        </span>

      </div>

    </header>
  );
}