import { useState } from "react";

import AppLayout from "../components/layout/AppLayout";

import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";

import type { Message } from "../types/chat";
import { streamMessage } from "../services/chat.service";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };

    const assistantId = crypto.randomUUID();

    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      isThinking: true,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      assistantMessage,
    ]);

    setIsLoading(true);

    try {
      await streamMessage(content, (chunk) => {
        setMessages((prev) =>
          prev.map((message) => {
            if (message.id !== assistantId) {
              return message;
            }

            return {
              ...message,
              isThinking: false,
              content: message.content + chunk,
            };
          })
        );
      });
    } catch {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantId
            ? {
                ...message,
                isThinking: false,
                content: "Something went wrong.",
              }
            : message
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout
      input={
        <ChatInput
          onSend={handleSend}
          disabled={isLoading}
        />
      }
    >
      <ChatMessages messages={messages} />
    </AppLayout>
  );
}