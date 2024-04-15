import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DhikrSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    notes: {
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

const Dhikr = mongoose.model("Dhikr", DhikrSchema);

export default Dhikr;
