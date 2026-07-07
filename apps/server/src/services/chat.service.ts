import { AIManager } from "../providers/ai/AIManager.js";

import { chatRepository } from "../repositories/ChatRepository.js";
import { messageRepository } from "../repositories/MessageRepository.js";

class ChatService {
  async *streamReply(
    chatId: string | null,
    message: string
  ) {
    // Step 1 - Find or Create Chat
    let currentChatId = chatId;

    if (!currentChatId) {
      const chat = await chatRepository.create(message);
      currentChatId = String(chat._id);
    }
console.log("Current Chat ID:", currentChatId);
console.log("Type:", typeof currentChatId);
    // Step 2 - Save User Message
    await messageRepository.create(
      currentChatId,
      "user",
      message
    );

    // Step 3 - Load Conversation
    const history =
      await messageRepository.getConversation(
        currentChatId
      );

    // Step 4 - Convert to AI format
    const messages = history.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    // Step 5 - Ask AI
    const provider = AIManager.getProvider();

    let aiReply = "";

    for await (const chunk of provider.streamReply({
      messages,
    })) {
      aiReply += chunk;

      yield chunk;
    }

    // Step 6 - Save AI Message
    await messageRepository.create(
      currentChatId,
      "assistant",
      aiReply
    );

    // Step 7 - Update Chat
    await chatRepository.updateLastMessage(
      currentChatId,
      aiReply
    );
    
    
    
  }
    async getChats() {
    return chatRepository.findAll();
  }

async getConversation(chatId:string){

    return messageRepository.getConversation(chatId);

}
  
}

export const chatService = new ChatService();