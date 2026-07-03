import { chatController } from "../controllers/chat.controller.js";

import { Router, type Router as ExpressRouter } from "express";

const router: ExpressRouter = Router();

router.post("/", chatController);

export default router;