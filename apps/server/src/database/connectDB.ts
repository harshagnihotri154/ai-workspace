import mongoose from "mongoose";

import { env } from "../config/env.js";

export async function connectDB() {
  try {
    await mongoose.connect(env.mongoUri);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");

    throw error;
  }
}