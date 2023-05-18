import express from "express";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js"
import companyRouter from "./routes/company.js"
import pocRouter from "./routes/poc.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cors({credentials: true, origin: 'http://localhost:3000',methods: ["GET", "POST", "PUT", "DELETE"]}));

// Using routes
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/poc",pocRouter);



app.get("/", (req, res) => {
  res.send("Nice working"); jefknq;4ajejfjaeij ioejrofioi
});

// Using Error Middleware
app.use(errorMiddleware);