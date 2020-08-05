import { waitBeforeNextRequest } from "./util/waitBeforeNextRequest";
import { getCexBoxIDData } from "./cex/getCexBoxIDData";
import * as jsonfile from "jsonfile";
import {
  addCexBoxToDatabase,
  addIDToDatabase,
  addProductsToDatabase,
} from "./database/addToDatabase";
import { connect, disconnect } from "./database/database";
import { cexDataToJSON } from "./cex/cexDataToJSON";
import { getFilesInDir } from "./util/getFilesInDir";
import { addDaysToDate } from "./util/addDaysToDate";
import { BoxDocument } from "./database/boxes/boxes.types";
import { IDListModel, NamedIDListModel } from "./database/idlist/idlist.model";
import { NamedBoxModel } from "./database/boxes/boxes.model";

/*
(async () => {
  let connected: boolean = false;
  try {
    await connect();
    connected = true;

    await addProductsToDatabase("./data/products/", "2/9/2020 12:00");
  } catch (error) {
    console.error(error);
  }

  if (connected) {
    await disconnect();
  }
})();
*/

/*
(async () => {
  let connected: boolean = false;

  try {
    await connect();
    connected = true;

    const one = await NamedIDListModel.find({}).exec();
    const idlist = one.map((entry) => entry.boxId);

    for (let i: number = 0; i < idlist.length; i++) {
      await addCexBoxToDatabase(idlist[i].toUpperCase());

      await waitBeforeNextRequest(1);
    }
  } catch (error) {
    console.error(error);
  }

  if (connected) {
    await disconnect();
  }
})();
*/

/*
(async () => {
  let connected: boolean = false;

  try {
    await connect();
    connected = true;

    const list: string[] = await jsonfile.readFile(`./data/IDList.json`);

    for (let i: number = 0; i < list.length; i++) {
      await addIDToDatabase(list[i].toUpperCase());
      await waitBeforeNextRequest(1);
    }
  } catch (error) {
    console.error(error);
  }

  if (connected) {
    await disconnect();
  }
})();
*/

/*
(async () => {
  let connected: boolean = false;

  try {
    await connect();
    connected = true;

    //const one = await NamedIDListModel.findOne({
    //  boxId: "045496737955",
    //}).exec();

    const one = await NamedIDListModel.find({}).exec();
    const idlist = one.map((entry) => entry.boxId);

    // DO NOT SORT BY DATE IT DOES NOT RETURN CORRECT RESULTS
    for (let i: number = 0; i < idlist.length; i++) {
      //Get newest record
      //const entry = await NamedBoxModel(idlist[i])
      //.findOne()
      //.sort({ _id: -1 })
      //.limit(1)
      //.exec();
      //if (entry !== null) {
      //console.log(entry);
      //}

      await NamedBoxModel(idlist[i]).findOneAndDelete(
        {},
        { sort: { _id: -1 } }
      );

      console.log(`Deleted newest entry with ID: ${idlist[i]}`);
    }
  } catch (error) {
    console.error(error);
  }

  if (connected) {
    await disconnect();
  }
})();
*/
