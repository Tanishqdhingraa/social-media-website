import express from "express";
import dotenv from "dotenv";
import connectdb from "./database/db.js";

dotenv.config();

const app = express();

// ✅ Correct port selection
const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("server is running perfectly");
});

// ✅ Connect DB before or during server start
connectdb();

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
