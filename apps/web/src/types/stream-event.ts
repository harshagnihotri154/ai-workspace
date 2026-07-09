export type StreamEvent =
  | {
      type: "chatCreated";
      chatId: string;
    }
  | {
      type: "chunk";
      content: string;
    }
  | {
      type: "end";
    }
  | {
      type: "error";
      message: string;
    };