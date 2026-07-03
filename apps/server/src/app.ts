import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";

import express, { type Express } from "express";

const app: Express = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "AI Workspace API",
  });
});

export default app;