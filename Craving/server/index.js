import express from "express";
import cors from "cors";
import morgan from "morgan";
import cloudinary from "./src/config/Cloudinary.js";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/authRouter.js";
import PublicRouter from "./src/routers/publicRouter.js";
import UserRouter from "./src/routers/userRouter.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  console.log("server is working");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Servar Error";
  const StatusCode = err.statusCode || 500;

  res.status(StatusCode).json({ message: ErrorMessage });
  console.log(ErrorMessage, StatusCode);
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("server strated at port: ", port);
  connectDB();
  try {
    const res = await cloudinary.api.ping();
    console.log("cloudinary API is working :", res);
  } catch (error) {
    console.error("Error Connecting cloudinary API :", error);
  }
});
