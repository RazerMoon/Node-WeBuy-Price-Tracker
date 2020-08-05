interface CexResponse {
  ack: ACK;
  data: CexData;
  error: CexError;
}

export const enum ACK {
  SUCCESS = "Success",
  FAILURE = "Failure",
}

interface CexData {
  boxes: CexBox[];
  totalRecords: number;
  minPrice: number;
  maxPrice: number;
}

interface CexError {
  code: string;
  internal_message: string;
  moreInfo: string[];
}

interface CexBox {
  boxId: string;
  masterBoxId: string;
  boxName: string;
  isMasterBox: number;
  categoryId: number;
  categoryName: string;
  categoryFriendlyName: string;
  superCatId: number;
  superCatName: string;
  superCatFriendlyName: string;
  imageUrls: object;
  cannotBuy: number;
  isNewBox: number;
  sellPrice: number;
  cashPrice: number;
  exchangePrice: number;
  boxRating: number;
  outOfStock: number;
  outOfEcomStock: number;
  ecomQuantityOnHand: number;
  firstPrice: number;
  previousPrice: number;
  lastPriceUpdatedDate: any;
  displayableBoxAttribute: any;
  boxWebSaleAllowed: number;
  boxWebBuyAllowed: number;
  boxSaleAllowed: number;
  boxBuyAllowed: number;
}

export interface CexProduct {
  name: string;
  id: string;
  type: string;
  sells: number[];
  buycash: number[];
  buyvoucher: number[];
}
