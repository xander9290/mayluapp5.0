import path from "path";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Settings
app.set("port", 3100);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

export default app;
