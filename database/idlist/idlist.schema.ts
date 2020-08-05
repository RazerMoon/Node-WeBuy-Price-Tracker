import { Schema } from "mongoose";

const IDListSchema = new Schema({
  boxId: String,
  boxName: String,
  categoryId: Number,
  categoryName: String,
  categoryFriendlyName: String,
  superCatId: Number,
  superCatName: String,
  superCatFriendlyName: String,
  imageUrls: Object,
  cannotBuy: Number,
  isNewBox: Number,
  boxRating: Number,
  boxWebSaleAllowed: Number,
  boxWebBuyAllowed: Number,
  boxSaleAllowed: Number,
  boxBuyAllowed: Number,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
});

export default IDListSchema;
