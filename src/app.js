import express from "express";
import config from "./config/config.js";
import cookieParser from "cookie-parser";
const app = express();

//*Middlewares
app.use(
  cors({
    origin: config.CORS_ORIGIN,
  }),
);
app.use(express.json({ limit: "16kb" })); //!Define the max incoming json size
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //!Define the max size of data from url
app.use(express.static("public"));
app.use(cookieParser());

export default app;
