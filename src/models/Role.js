import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    name: "string",
  },
  {
    versionKey: "false",
  }
);

export default model("Role", roleSchema);
