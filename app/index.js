const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "dev";
const APP_NAME = process.env.APP_NAME || "nodeapp";

app.get("/", (req, res) => {
  res.json({
    message: `Hello from ${APP_NAME}`,
    environment: NODE_ENV
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Graceful shutdown (important for DevOps)
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} running on port ${PORT} (${NODE_ENV})`);
});

module.exports = app;
