import {
  chatController,
  getChatsController,
  getConversationController
} from "../controllers/chat.controller.js";

import { Router, type Router as ExpressRouter } from "express";

const router: ExpressRouter = Router();

router.post("/", chatController);
router.get("/", getChatsController);
router.get(
    "/:id/messages",
    getConversationController
);

export default router;