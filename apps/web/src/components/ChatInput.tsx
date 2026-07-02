import { useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled: boolean;
};

export default function ChatInput({
  onSend,
  disabled,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = () => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "48px";

    const newHeight = Math.min(
      textareaRef.current.scrollHeight,
      180
    );

    textareaRef.current.style.height = `${newHeight}px`;
  };

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "48px";
    }
  };

  return (
    <div className="border-t border-zinc-800 bg-[#09090B]">

      <div className="mx-auto w-full max-w-4xl px-6 py-6">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 transition-all duration-300 focus-within:border-violet-500/40 focus-within:ring-4 focus-within:ring-violet-500/10">

          <div className="flex items-end gap-3 p-3">

            <textarea
              ref={textareaRef}
              rows={1}
              value={message}
              disabled={disabled}
              placeholder={
                disabled
                  ? "AI Workspace is thinking..."
                  : "Message AI Workspace..."
              }
              onChange={(e) => {
                setMessage(e.target.value);
                resizeTextarea();
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="min-h-[48px] max-h-40 flex-1 resize-none overflow-y-auto bg-transparent px-3 py-3 text-[15px] leading-7 text-white placeholder:text-zinc-500 outline-none"
            />

            <button
              onClick={handleSend}
              disabled={!message.trim() || disabled}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            >
              <SendHorizontal size={18} />
            </button>

          </div>

        </div>

        <div className="mt-3 flex items-center justify-between px-2 text-xs text-zinc-500">

          <span>
            AI can make mistakes. Verify important responses.
          </span>

          <span>
            Enter ↵ • Shift + Enter for new line
          </span>

        </div>

      </div>

    </div>
  );
}