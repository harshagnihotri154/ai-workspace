import { Request, Response } from "express";
// import { generateReplyStream } from "../services/chat.service.js";
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

//   const stream = generateReplyStream(message);
  const stream = chatService.streamReply([
  {
    role: "user",
    content: message,
  },
]);

  try {
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