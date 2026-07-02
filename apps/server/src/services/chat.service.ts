import { delay } from "../utils/delay.js";

export async function* generateReplyStream(message: string) {
  const reply = `You said: ${message}`;

  const words = reply.split(" ");

  for (const word of words) {
    await delay(300);

    yield word + " ";
  }
}