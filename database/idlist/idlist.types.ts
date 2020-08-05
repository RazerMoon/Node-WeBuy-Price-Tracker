import { Document, Model } from "mongoose";

export interface IDList {
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
  dateOfEntry?: Date;
}

export interface ImageUrls {
  large: string;
  medium: string;
  small: string;
  masterBoxLarge: string;
  masterBoxMedium: string;
  masterBoxSmall: string;
}

export interface IDListDocument extends IDList, Document {}
export interface IDListModel extends Model<IDListDocument> {}
