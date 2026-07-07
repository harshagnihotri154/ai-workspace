import { Chat } from "../models/Chat.js";

class ChatRepository {
  async create(title: string) {
    return Chat.create({
      title,
      userId: null,
      lastMessage: "",
      messageCount: 0,
    });
  }

  async findById(chatId: string) {
    return Chat.findById(chatId);
  }

  async getAll() {
    return Chat.find().sort({
      updatedAt: -1,
    });
  }

  async findAll() {
  return Chat.find().sort({
    updatedAt: -1,
  });
}
  async updateLastMessage(
    chatId: string,
    message: string
  ) {
    return Chat.findByIdAndUpdate(
      chatId,
      {
        lastMessage: message,
        $inc: {
          messageCount: 1,
        },
      },
      {
        new: true,
      }
    );
  }
}

export const chatRepository =
  new ChatRepository();