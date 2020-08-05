import { Document, Model } from "mongoose";

export interface Box {
  boxId: string;
  cannotBuy?: number;
  isNewBox?: number;
  sellPrice: number;
  cashPrice: number;
  exchangePrice: number;
  boxRating?: number;
  outOfStock?: number;
  outOfEcomStock?: number;
  ecomQuantityOnHand?: number;
  dateOfEntry?: Date;
}

export interface MBox {
  boxId: string;
  cannotBuy?: number;
  isNewBox?: number;
  sellPrice: number;
  cashPrice: number;
  exchangePrice: number;
  boxRating?: number;
  outOfStock?: number;
  outOfEcomStock?: number;
  ecomQuantityOnHand?: number;
  dateOfEntry: string;
}

export interface IDBox {
  boxId: string;
  boxName: string;
  categoryId: number;
  categoryName: string;
  categoryFriendlyName: string;
  superCatId: number;
  superCatName: string;
  superCatFriendlyName: string;
  imageUrls: object;
  cannotBuy: number;
  isNewBox: number;
  boxRating: number;
  boxWebSaleAllowed: number;
  boxWebBuyAllowed: number;
  boxSaleAllowed: number;
  boxBuyAllowed: number;
}

export interface BoxDocument extends Box, Document {}
export interface BoxModel extends Model<BoxDocument> {}
