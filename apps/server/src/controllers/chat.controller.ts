import { Request, Response } from "express";
import { chatService } from "../services/chat.service.js";

export async function chatController(
  req: Request,
  res: Response
) {
  const { message } = req.body;

  if (!message?.trim()) {
    return res.status(400).json({
      error: "Message is required",
    });
  }

  res.setHeader(
    "Content-Type",
    "text/plain; charset=utf-8"
  );

  res.setHeader(
    "Transfer-Encoding",
    "chunked"
  );

  res.setHeader(
    "Cache-Control",
    "no-cache"
  );

  try {
    const stream = chatService.streamReply(
      null,
      message
    );

    for await (const chunk of stream) {
      res.write(chunk);
    }

    res.end();
  } catch (error) {
    console.error(error);

    if (!res.headersSent) {
      return res.status(500).json({
        error: "Failed to generate response.",
      });
    }

    res.end();
  }
}
export async function getChatsController(
  _req: Request,
  res: Response
) {
  try {
    const chats = await chatService.getChats();

    return res.json(chats);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to load chats.",
    });
  }
}

export async function getConversationController(
    req:Request,
    res:Response
){

  const id = req.params.id;

if (typeof id !== "string") {
  return res.status(400).json({
    error: "Invalid chat id",
  });
}

const messages = await chatService.getConversation(id);

return res.json(messages);

}