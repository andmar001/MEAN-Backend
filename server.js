import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();

// ?Habilitar cors
app.use(cors());

// ?Load env variables
dotenv.config();

// ?Middleware para poder leer los datos del body (importante para poder leer los datos del body)
app.use(express.json());

// ?ruta principal para endpoints
app.use("/api/products", router);

// ?Middleware de prueba- se ejecuta en cada request
// app.use((req, res, next) =>{
//   console.log("Middleware de prueba")
//   next()
// })

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// importar el puerto del archivo .env
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log(`MongoDB connected!!`);
    app.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();