import { Schema } from "mongoose";

const BoxSchema = new Schema({
  boxId: String,
  cannotBuy: Number,
  isNewBox: Number,
  sellPrice: Number,
  cashPrice: Number,
  exchangePrice: Number,
  boxRating: Number,
  outOfStock: Number,
  outOfEcomStock: Number,
  ecomQuantityOnHand: Number,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
});

export default BoxSchema;
