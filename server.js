import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();

// ?Load env variables
dotenv.config();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// importar el puerto del archivo .env
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.listen(() => {
  connectDB(MONGO_URI);
  console.log(`MongoDB connected!!`);
  console.log(`Server running http://localhost:${PORT}`);
})
