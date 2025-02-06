const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("hello");
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
