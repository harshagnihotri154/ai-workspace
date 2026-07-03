export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface StreamOptions {
  messages: ChatMessage[];
}

export interface AIProvider {
  streamReply(
    options: StreamOptions
  ): AsyncGenerator<string>;
}