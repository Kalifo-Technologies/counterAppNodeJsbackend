import asyncHandler from "express-async-handler";
import Goal from "../model/Goal.js";
import Dhikr from "../model/Dhikr.js";
import Cart from "../model/Cart.js";
export const addNewGoal = asyncHandler(async (req, res) => {
  try {
    const { selectDhikr, setAmount, note } = req.body;
    const userId = req.userId;
    if (!selectDhikr || !setAmount || !note || !userId) {
      return res.status(400).json({
        status: "error",
        message:
          "Please provide all required fields: selectDhikr, setAmount, note, userId",
        code: "MISSING_FIELDS",
      });
    }

    const existingGoal = await Goal.findOne({ note });
    if (existingGoal) {
      return res.status(409).json({
        status: "error",
        message: "The provided note already exists",
        code: "DUPLICATE_GOAL",
      });
    }
    const goal = await Goal.create({
      selectDhikr,
      setAmount,
      note,
      userId,
    });
    // const goalsCount = await Goal.countDocuments();
    res.status(201).json({
      status: "success",
      message: "Goal created successfully",
      goal: {
        selectDhikr: goal.selectDhikr,
        setAmount: goal.setAmount,
        note: goal.note,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
export const addNewDhikr = asyncHandler(async (req, res) => {
  try {
    const {  title, notes } = req.body;
    const userId = req.userId;
    if (!title|| !notes || !userId) {
      return res.status(400).json({
        status: "error",
        message:
          "Please provide all required fields: title, notes, userId",
        code: "MISSING_FIELDS",
      });
    }

    const existingDhikr = await Dhikr.findOne({ title });
    if (existingDhikr) {
      return res.status(409).json({
        status: "error",
        message: "The provided title already exists",
        code: "DUPLICATE_DHIKR",
      });
    }
    const dhikr = await Dhikr.create({
      title,
      notes,
      userId,
    });
    res.status(201).json({
      status: "success",
      message: "Dhikr created successfully",
      dhikr: {
        dhikr: dhikr.title,
        notes: dhikr.notes,
        // note: dhikr.userId,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getAllCounts = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await Cart.find({ userId: userId });

    if (!cart || cart.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "List is empty",
      });
    }
    const latestQty = cart[cart.length - 1].quantity;
    res.status(200).json({
      status: "success",
      message: "Latest quantity retrieved successfully",
      quantity: latestQty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

export const increment = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;

    const quantity = req.body.quantity;
    await Cart.create({ userId, quantity });
    res.status(200).json({
      status: "success",
      message: "Item added to list successfully",
    });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    } else {
      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  }
});

export const removeAllCounter = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId; 
    await Cart.deleteMany({ userId });

    res.status(200).json({
      status: "success",
      message: "All items removed from the cart",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});