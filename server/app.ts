import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import tasksRoutes from "./routes";

const app = express();

dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", tasksRoutes);

// read static files
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

export default app;

