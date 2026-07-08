export default function SidebarUsage() {
  return (
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
  );
}