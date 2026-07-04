import express, { type Express } from "express";
import cors from "cors";

import chatRoutes from "./routes/chat.routes.js";

const app: Express = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Health Check
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "AI Workspace API is running 🚀",
  });
});

// Routes
app.use("/api/chat", chatRoutes);

export default app;