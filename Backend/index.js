const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/orders", require("./routes/order"));

// Export as serverless function
module.exports = app;
module.exports.handler = serverless(app);
