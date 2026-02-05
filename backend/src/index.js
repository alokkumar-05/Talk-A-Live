import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv"; 
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import {app,server} from "./lib/socket.js";


dotenv.config();
const PORT = process.env.PORT || 5001 ;


app.use(express.json({ limit: "3mb" }));
app.use(express.urlencoded({ limit: "3mb", extended: true }));
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
})
);

app.get("/", (req, res) => {
  res.send("Talk-A-Live Backend is running 🚀");
});


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)


server.listen(PORT,()=>{
  console.log("server is running on Port:"+ PORT);
  connectDB();
});