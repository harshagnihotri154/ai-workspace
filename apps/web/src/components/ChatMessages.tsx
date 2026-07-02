import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import type { Message } from "../types/chat";

type Props = {
  messages: Message[];
};

export default function ChatMessages({
  messages,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center overflow-y-auto">
        <div className="mx-auto max-w-3xl px-8 text-center">

          <div className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            ✦ AI Workspace
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white">
            Build Something Amazing.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Your personal AI engineer for coding,
            debugging, architecture, learning and
            building production-ready software.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2">

            <button className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800">

              <div className="text-4xl">🚀</div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Build AI Agent
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Create autonomous AI agents with tools,
                memory and reasoning.
              </p>

            </button>

            <button className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800">

              <div className="text-4xl">📄</div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Summarize Documents
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Upload PDFs and chat with your files.
              </p>

            </button>

            <button className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800">

              <div className="text-4xl">💻</div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                Generate Code
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                React, Node.js, Express, Python,
                Java and much more.
              </p>

            </button>

            <button className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-zinc-800">

              <div className="text-4xl">🧠</div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                System Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Learn scalable backend architecture
                and crack interviews.
              </p>

            </button>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">

      <div className="mx-auto w-full max-w-5xl">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        <div
          ref={bottomRef}
          className="h-10"
        />

      </div>

    </div>
  );
}