import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    lastMessage: {
      type: String,
      default: "",
    },

    messageCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model(
  "Chat",
  ChatSchema
);