import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";



const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
dotenv.config();

export default app;