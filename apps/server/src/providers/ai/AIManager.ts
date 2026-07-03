import type { AIProvider } from "./AIProvider.js";

import { MockProvider } from "./MockProvider.js";
import { GeminiProvider } from "./GeminiProvider.js";

import { env } from "../../config/env.js";

export class AIManager {
  private static provider: AIProvider =
    env.aiProvider === "gemini"
      ? new GeminiProvider()
      : new MockProvider();

  static getProvider() {
    return this.provider;
  }
}