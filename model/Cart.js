import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const Cart = mongoose.model("Cart", CartItemSchema);

export default Cart;
