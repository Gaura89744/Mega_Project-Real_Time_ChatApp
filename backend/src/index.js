import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieparser from "cookie-parser"
import messageRoutes from "./routes/message.route.js";
import cors from "cors"
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieparser())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes)

app.listen(PORT, () => {
  console.log("Server is listening at port" + PORT);

  connectDB();
});
