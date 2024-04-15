import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import express from "express";
import path from "path";
import dbConnect from "../config/dbConnect.js";
import { globalErrhandler, notFound } from "../middlewares/globalErrHandler.js";
import goalsRouter from "../routes/goalsRouter.js";
import dhikrRouter from "../routes/dhikrRouter.js";
import incrementRouter from "../routes/incrementRoute.js";

dbConnect();
const app = express();
app.use(cors());

const endpointSecret = "";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join("public", "index.html"));
});

app.use("/api/v1/addGoal/", goalsRouter);
app.use("/api/v1/addDhikr/", dhikrRouter);
app.use("/api/v1/increment/", incrementRouter);


//err middleware
app.use(notFound);
app.use(globalErrhandler);

export default app;
