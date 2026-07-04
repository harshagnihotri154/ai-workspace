import app from "./app.js";

import { env } from "./config/env.js";
import { connectDB } from "./database/connectDB.js";

async function startServer() {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(
        `🚀 Server running at http://localhost:${env.port}`
      );
    });
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}

startServer();