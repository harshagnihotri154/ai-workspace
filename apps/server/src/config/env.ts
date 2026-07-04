import "dotenv/config";

export const env = {
  geminiApiKey: process.env.GEMINI_API_KEY ?? "",
  aiProvider: process.env.AI_PROVIDER ?? "mock",
  mongoUri:process.env.MONGODB_URI ?? "",
  port:process.env.PORT,
};

if (!env.geminiApiKey && env.aiProvider === "gemini") {
  throw new Error("GEMINI_API_KEY is missing");
}