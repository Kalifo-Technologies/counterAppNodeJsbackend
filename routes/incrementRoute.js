import exppress from "express";
import { increment, getAllCounts, removeAllCounter } from "../controllers/counterAppCtrl.js";
import { extractUserId } from "../middlewares/extractUserId.js";

const incrementRouter = exppress.Router();

incrementRouter.get("/get-Counts",extractUserId, getAllCounts);
incrementRouter.delete("/remove-all",extractUserId,removeAllCounter)
incrementRouter.post("/", extractUserId,increment);

export default incrementRouter;
