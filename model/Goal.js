import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SetGoalSchema = new Schema(
  {
    selectDhikr: {
      type: String,
      required: true,
    },
    setAmount: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    userId: {
     type:String,
      required: true,
    },
  },
  { timestamps: true }
);

const GoalSet = mongoose.model("GoalSet", SetGoalSchema);

export default GoalSet;
