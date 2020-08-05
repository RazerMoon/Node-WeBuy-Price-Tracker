import { CexBox } from "../typings/cex";
const jsonfile = require("jsonfile");

export async function cexDataToJSON(data: CexBox) {
  await jsonfile.writeFile(`./data/${data.boxId}.json`, data, {
    spaces: 2,
  });
}
