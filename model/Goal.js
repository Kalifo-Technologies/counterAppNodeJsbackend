import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GoalSchema = new Schema(
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
      type: String,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Goal = mongoose.model("Goal", GoalSchema);

export default Goal;
