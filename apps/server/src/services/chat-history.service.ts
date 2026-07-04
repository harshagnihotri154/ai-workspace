import { Types } from "mongoose";

import { Chat } from "../models/Chat.js";
import { Message } from "../models/Message.js";

class ChatHistoryService {
  async createChat(title: string) {
    return Chat.create({
      title,
      userId: null,
      lastMessage: "",
      messageCount: 0,
    });
  }

  async saveMessage(
    chatId: string,
    role: "user" | "assistant",
    content: string
  ) {
    const message = await Message.create({
      chatId: new Types.ObjectId(chatId),
      role,
      content,
    });

    await Chat.findByIdAndUpdate(chatId, {
      lastMessage: content,
      $inc: {
        messageCount: 1,
      },
    });

    return message;
  }

  async getChats() {
    return Chat.find().sort({
      updatedAt: -1,
    });
  }

  async getMessages(chatId: string) {
    const messages = await Message.find({
      chatId: new Types.ObjectId(chatId),
    }).sort({
      createdAt: 1,
    });

    return messages.map((message) => ({
      role: message.role,
      content: message.content,
    }));
  }
}

export const chatHistoryService =
  new ChatHistoryService();