import type { ChatHistory } from "../types/chat-history";

const API_URL = "http://localhost:4000/api/chat";

export async function getChats(): Promise<ChatHistory[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to load chats");
  }

  return response.json();
}