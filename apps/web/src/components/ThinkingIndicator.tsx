import { Bot } from "lucide-react";

export default function ThinkingIndicator() {
  return (
    <div className="mx-auto flex max-w-4xl gap-5">

      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500">
        <Bot size={18} className="text-white" />
      </div>

      <div>

        <p className="mb-4 text-sm font-semibold text-white">
          AI Workspace
        </p>

        <div className="flex gap-2">

          <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-violet-400" />

          <div
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-violet-400"
            style={{ animationDelay: "150ms" }}
          />

          <div
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-violet-400"
            style={{ animationDelay: "300ms" }}
          />

        </div>

      </div>

    </div>
  );
}