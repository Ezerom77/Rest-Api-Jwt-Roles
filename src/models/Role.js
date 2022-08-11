import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "moderator"]

const roleSchema = new Schema(
  {
    name: "string",
  },
  {
    versionKey: "false",
  }
);

export default model("Role", roleSchema);
