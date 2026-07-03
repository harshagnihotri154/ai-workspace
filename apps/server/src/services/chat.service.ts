import { AIManager } from "../providers/ai/AIManager.js";
import type {
  ChatMessage,
  StreamOptions,
} from "../providers/ai/AIProvider.js";

class ChatService {
  streamReply(messages: ChatMessage[]) {
    const provider = AIManager.getProvider();

    const options: StreamOptions = {
      messages,
    };

    return provider.streamReply(options);
  }
}

export const chatService = new ChatService();