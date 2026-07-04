import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        chatId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "assistant"],
            required: true,
        },
      content: {
    type: String,
    required: true,
    trim: true,
},


    },
    {
        timestamps: true,
    }
);

export const Message = mongoose.model(
    "Message",
    MessageSchema
);