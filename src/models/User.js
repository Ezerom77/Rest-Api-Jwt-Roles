import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },
  ],
});

userSchema.statics.encryptPassword =  (password) => {
  // const salt = await bcrypt.genSalt(10);
  // return await bcrypt.hash(password, salt);
  return  bcrypt.hashSync(password, 10)
};

userSchema.statics.comparePassword = async (password, recivedPassword) => {
  return await bcrypt.compare(password, recivedPassword);
};

export default model("User", userSchema);
