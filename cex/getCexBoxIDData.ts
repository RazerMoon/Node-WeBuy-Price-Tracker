import { CexResponse, ACK } from "../typings/cex";
import axios from "axios";

/**
 * Get CeX Box data about a passed BoxID.
 * @param boxid
 */
export async function getCexBoxIDData(boxid: string) {
  const { data: axResp } = await axios.get(
    `https://wss2.cex.ie.webuy.io/v3/boxes?q=${boxid}`
  );

  const cexResponse: CexResponse = axResp.response;

  const { ack: cexSuccess, data: cexData, error: cexError } = cexResponse;

  if (cexSuccess !== ACK.SUCCESS) {
    throw new Error(cexError.internal_message);
  }

  return cexData.boxes[0];
}
