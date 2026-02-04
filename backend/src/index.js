import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv"; 
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";


dotenv.config()
const app = express();

app.use(express.json({ limit: "3mb" }));
app.use(express.urlencoded({ limit: "3mb", extended: true }));
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
})
);

app.get("/", (req, res) => {
  res.send("Talk-A-Live Backend is running 🚀");
});


const PORT = process.env.PORT || 5001 ;
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)


app.listen(PORT,()=>{
  console.log("server is running on Port:"+ PORT);
  connectDB();
});