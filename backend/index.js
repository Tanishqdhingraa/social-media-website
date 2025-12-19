import express from "express";
import dotenv from "dotenv";
import connectdb from "./database/db.js";
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config();

const app = express();

// ✅ Correct port selection
const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.send("server is running perfectly");
});

//importing routes here
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/post',postRoutes)




// ✅ Connect DB before or during server start
connectdb();

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
