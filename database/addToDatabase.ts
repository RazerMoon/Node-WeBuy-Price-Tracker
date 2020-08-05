import { BoxModel, NamedBoxModel } from "./boxes/boxes.model";
import { CexBox, CexProduct } from "../typings/cex";
import { connect, disconnect } from "./database";
import { IDListModel, NamedIDListModel } from "./idlist/idlist.model";
import { getCexBoxIDData } from "../cex/getCexBoxIDData";
import { getFilesInDir } from "../util/getFilesInDir";
import { addDaysToDate } from "../util/addDaysToDate";
import * as jsonfile from "jsonfile";
import { MBox, IDBox } from "./boxes/boxes.types";

/**
 * Add the box data to the database, CONNECT TO DB FIRST.
 * @param box
 */
export async function addCexBoxToDatabase(id: string) {
  const box = await getCexBoxIDData(id);

  const mBox: MBox = {
    boxId: box.boxId,
    cannotBuy: box.cannotBuy,
    isNewBox: box.isNewBox,
    sellPrice: box.sellPrice,
    cashPrice: box.cashPrice,
    exchangePrice: box.exchangePrice,
    boxRating: box.boxRating,
    outOfStock: box.outOfStock,
    outOfEcomStock: box.outOfEcomStock,
    ecomQuantityOnHand: box.ecomQuantityOnHand,
    dateOfEntry: new Date().toISOString(),
  };

  await NamedBoxModel(id).create(mBox);
  console.log(`Added prices: ${mBox.boxId}`);
}

/**
 * Convert json files with price data to database entries.
 * @param path path to the folder with json files.
 * @param genesis date of the first record.
 * @param maxProducts max amount of products to get.
 * @param maxPrices max amount of prices to get.
 */
export async function addProductsToDatabase(
  path: string,
  genesis: string,
  maxProducts: number | null = null,
  maxPrices: number | null = null
) {
  const files: string[] = await getFilesInDir(path);

  maxProducts = maxProducts === null ? files.length : maxProducts;

  for (let i: number = 0; i < maxProducts; i++) {
    const product: CexProduct = await jsonfile.readFile(`${path}${files[i]}`);

    maxPrices = maxPrices === null ? product.sells.length : maxPrices;

    let prices: MBox[] = [];

    for (let i: number = 0; i < maxPrices; i++) {
      prices.push({
        boxId: product.id,
        cannotBuy: undefined,
        isNewBox: undefined,
        sellPrice: product.sells[i],
        cashPrice: product.buycash[i],
        exchangePrice: product.buyvoucher[i],
        boxRating: undefined,
        outOfStock: undefined,
        outOfEcomStock: undefined,
        ecomQuantityOnHand: undefined,
        dateOfEntry: addDaysToDate(genesis, i).toISOString(),
      });
    }
    const model = NamedBoxModel(prices[0].boxId);

    await model.insertMany(prices);
    console.log(`Inserted many prices with ID: ${prices[0].boxId}`);
  }
}

/**
 * Add information about ID to database.
 * @param id
 */
export async function addIDToDatabase(id: string) {
  const exists = await NamedIDListModel.exists({ boxId: id });
  if (exists) {
    console.log(`${id} already exists!`);
  } else {
    const box = await getCexBoxIDData(id);

    const mBox: IDBox = {
      boxId: box.boxId,
      boxName: box.boxName,
      categoryId: box.categoryId,
      categoryName: box.categoryName,
      categoryFriendlyName: box.categoryFriendlyName,
      superCatId: box.superCatId,
      superCatName: box.superCatName,
      superCatFriendlyName: box.superCatFriendlyName,
      imageUrls: box.imageUrls,
      cannotBuy: box.cannotBuy,
      isNewBox: box.isNewBox,
      boxRating: box.boxRating,
      boxWebSaleAllowed: box.boxWebSaleAllowed,
      boxWebBuyAllowed: box.boxWebBuyAllowed,
      boxSaleAllowed: box.boxSaleAllowed,
      boxBuyAllowed: box.boxBuyAllowed,
    };

    await NamedIDListModel.create(mBox);
    console.log(`Created entry for: ${mBox.boxId} (${mBox.boxName})`);
  }
}
