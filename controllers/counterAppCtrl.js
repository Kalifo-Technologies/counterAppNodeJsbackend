import asyncHandler from "express-async-handler";
import Dhikr from "../model/Dhikr.js";
import Cart from "../model/Cart.js";
import GoalSet from "../model/Goal.js";
import mongoose from "mongoose";

export const addNewGoal = asyncHandler(async (req, res) => {
  try {
    const { selectDhikr, setAmount, note } = req.body;
    const userId = req.userId;
    if (!selectDhikr || !note || !setAmount) {
      return res.status(400).json({
        status: "error",
        message:
          "Please provide all required fields: selectDhikr, setAmount,note,userId",
        code: "MISSING_FIELDS",
      });
    }
    const existingDhikr = await GoalSet.findOne({ note, userId });

    if (existingDhikr) {
      return res.status(409).json({
        status: "error",
        message: "The provided note already exists",
        code: "DUPLICATE_DHIKR",
      });
    }
    const goal = await GoalSet.create({
      selectDhikr,
      setAmount,
      note,
      userId,
    });
    res.status(201).json({
      status: "success",
      message: "goal created successfully",
      goal: {
        goal: goal.selectDhikr,
        note: goal.note,
        setAmount: goal.setAmount,

        // note: dhikr.userId,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
export const getAllGoals = asyncHandler(async (req, res) => {
  try {
    const userId = req.userId;

    const goals = await GoalSet.find({ userId });
    console.log('====================================');
    console.log(goals);
    console.log('====================================');
    const formattedGoals = goals.map(goal => ({
      selectDhikr: goal.selectDhikr,
      note: goal.note,
      setAmount:goal.setAmount
    }));

    res.status(201).json({
      status: "success",
      message: "Goals retrieved successfully",
      goals: formattedGoals,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const addNewDhikr = asyncHandler(async (req, res) => {
  try {
    const { title, notes } = req.body;
    const userId = req.userId;
    if (!title || !notes || !userId) {
      return res.status(400).json({
        status: "error",
        message: "Please provide all required fields: title, notes, userId",
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
