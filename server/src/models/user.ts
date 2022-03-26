import { Schema, model, Types } from "mongoose";
import { IUser } from "./types";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
