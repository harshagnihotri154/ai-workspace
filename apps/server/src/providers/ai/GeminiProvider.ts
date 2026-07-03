import { GoogleGenAI } from "@google/genai";

import { env } from "../../config/env.js";
import type {
  AIProvider,
  StreamOptions,
} from "./AIProvider.js";

export class GeminiProvider implements AIProvider {
  private ai = new GoogleGenAI({
    apiKey: env.geminiApiKey,
  });

  async *streamReply({
    messages,
  }: StreamOptions): AsyncGenerator<string> {
    const prompt = messages
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    const response = await this.ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    for await (const chunk of response) {
      yield chunk.text ?? "";
    }
  }
}