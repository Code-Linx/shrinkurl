import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import rootRouter from "./routes";
import morgan from "morgan";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

// Use Morgan for logging
app.use(morgan("dev")); // 'dev' format gives concise logs

app.use("/api/v1/", rootRouter);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
