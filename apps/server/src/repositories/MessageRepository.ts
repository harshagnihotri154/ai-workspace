import { Types } from "mongoose";

import { Message } from "../models/Message.js";

class MessageRepository {
  async create(
    chatId: string,
    role: "user" | "assistant",
    content: string
  ) {
    return Message.create({
      chatId: new Types.ObjectId(chatId),
      role,
      content,
    });
  }

  async getByChatId(chatId: string) {
    return Message.find({
      chatId: new Types.ObjectId(chatId),
    }).sort({
      createdAt: 1,
    });
  }
}

export const messageRepository =
  new MessageRepository();