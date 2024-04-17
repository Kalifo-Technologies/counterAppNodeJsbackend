import exppress from "express";
import { addNewGoal, getAllGoals } from "../controllers/counterAppCtrl.js";
import { extractUserId } from "../middlewares/extractUserId.js";

const goalsRouter = exppress.Router();

goalsRouter.post("/", extractUserId, addNewGoal);
goalsRouter.get("/", extractUserId, getAllGoals);


export default goalsRouter;
