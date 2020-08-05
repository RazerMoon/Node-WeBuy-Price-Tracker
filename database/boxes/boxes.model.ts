import { model } from "mongoose";
import { BoxDocument } from "./boxes.types";
import BoxSchema from "./boxes.schema";

export const BoxModel = model<BoxDocument>("box", BoxSchema);

export function NamedBoxModel(collection: string) {
  return model<BoxDocument>("box", BoxSchema, collection);
}
