import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  username: {
    type: "string",
    unique: true,
  },
  email: {
    type: "string",
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  roles: [
    {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },
  ],
});

userSchema.statics.encryptPassword = async (password) =>{
  const salt = bcrypt.genSalt(10);
  return await bcrypr.hash(password, salt)
}

userSchema.statics.comparePassword = async (password,recibedPassword) =>{
  return bcrypt.compare(password,recibedPassword)
}

export default model('User', userSchema)