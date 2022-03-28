import { ObjectID } from "bson";
import { IErrorResponse } from "./api/types";

const bcrypt = require("bcrypt");

export const validateId = (id: string) => {
  if (id == null)
    return <IErrorResponse>{
      code: 1.0,
      message: "Missing required parameters",
    };

  if (!ObjectID.isValid(id))
    return <IErrorResponse>{
      code: 1.1,
      message: "Invalid User ID format.",
    };

  if (id != new ObjectID(id).toString())
    return <IErrorResponse>{
      code: 1.1,
      message: "Invalid User ID format.",
    };
  return true;
};

export const validatePassword = (password: string, passwordHash: string) =>
  bcrypt.compare(password, passwordHash, (err: any, result: boolean) => result);
