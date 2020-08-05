import { model } from "mongoose";
import IDListSchema from "./idlist.schema";
import { IDListDocument } from "./idlist.types";

export const IDListModel = model<IDListDocument>("idlist", IDListSchema); // Don't use this, creates "idlists" for some reason

export const NamedIDListModel = model<IDListDocument>(
  "idlist",
  IDListSchema,
  "idlist"
); // Use this
