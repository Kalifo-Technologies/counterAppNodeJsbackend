import exppress from "express";
import { addNewGoal } from "../controllers/counterAppCtrl.js";
import { extractUserId } from "../middlewares/extractUserId.js";

const goalsRouter = exppress.Router();

goalsRouter.post("/", extractUserId, addNewGoal);

export default goalsRouter;
