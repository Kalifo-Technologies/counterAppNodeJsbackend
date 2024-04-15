import exppress from "express";
import { addNewDhikr } from "../controllers/counterAppCtrl.js";
import { extractUserId } from "../middlewares/extractUserId.js";

const dhikrRouter = exppress.Router();

dhikrRouter.post("/",extractUserId, addNewDhikr);

export default dhikrRouter;
