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

// Start server ONLY if not running tests
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`${APP_NAME} running on port ${PORT} (${NODE_ENV})`);
  });
}

module.exports = app;
