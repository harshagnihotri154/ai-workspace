import { Request, Response } from "express";
import { generateReplyStream } from "../services/chat.service.js";

export async function chatController(
  req: Request,
  res: Response
) {
  const { message } = req.body;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  const stream = generateReplyStream(message);

  for await (const chunk of stream) {
    res.write(chunk);
  }

  res.end();
}