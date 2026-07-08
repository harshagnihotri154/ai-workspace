import type { Message } from "../types/chat";

const API_URL = "http://localhost:4000/api/chat";

export async function getConversation(
  chatId: string
): Promise<Message[]> {
  const response = await fetch(
    `${API_URL}/${chatId}/messages`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load conversation"
    );
  }

  return response.json();
}