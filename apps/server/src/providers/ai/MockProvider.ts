import type {
  AIProvider,
  StreamOptions,
} from "./AIProvider.js";

import { delay } from "../../utils/delay.js";

export class MockProvider implements AIProvider {
  async *streamReply({
    messages,
  }: StreamOptions): AsyncGenerator<string> {
    const lastMessage = messages.at(-1);

    if (!lastMessage) {
      return;
    }

    const reply = `You said: ${lastMessage.content}`;

    const words = reply.split(" ");

    for (const word of words) {
      await delay(250);

      yield word + " ";
    }
  }
}