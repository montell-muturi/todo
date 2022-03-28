import { NextFunction, Request, Response } from "express";
import mongoose, { Document } from "mongoose";
import TodoModel from "../models/todo";
import { validateId, validatePassword } from "../utils";

const bcrypt = require("bcrypt");

import { IUser } from "../models/types";
import UserModel from "../models/user";
import { IErrorResponse } from "./types";

const userModel = UserModel;
const todoModel = TodoModel;

const authUser = async (req: Request, res: Response, nextFn: NextFunction) => {
  let authType = req.body["authType"];

  let userData: IUser = {
    email: req.body["email"] as string,
    password: req.body["password"] as string,
  };

  if (req.body["username"]) userData.username = req.body["username"] as string;

  if (userData.email == null || userData.password == null)
    return res.json(<IErrorResponse>{
      code: 1.0,
      message: "Missing required parameters.",
    });

  if (authType === "login") {
    let queryResult: Document = await checkUser(userData);

    if (queryResult == null)
      return res.json(<IErrorResponse>{
        code: 1.2,
        message: "No user found matching given parameters.",
      });

    if (
      validatePassword(
        req.body["password"] as string,
        queryResult.get("password")
      ) == false
    )
      return res.json(<IErrorResponse>{
        code: 1.4,
        message: "Wrong password.",
      });

    return res.json(queryResult);
  } else if (authType === "signup") {
    let queryResult: Document | any = await checkUser(userData);

    if (queryResult != null) {
      if (queryResult.get("username") === userData.username)
        return res.json(<IErrorResponse>{
          code: 1.3,
          message: "Another user already exists with given username.",
        });
      if (queryResult.get("email") === userData.email)
        return res.json(<IErrorResponse>{
          code: 1.3,
          message: "Another user already exists with given email.",
        });
    }

    queryResult = await createUser(userData);
    return res.json(queryResult);
  }

  return res.json(<IErrorResponse>{
    code: 1.1,
    message: "Invalid/Missing query parameters.",
  });
};

const checkUser = async (userData: IUser) => {
  return await userModel
    .findOne<IUser>({ email: userData.email })
    .then((doc) => doc)
    .catch((err) => err);
};

const createUser = async (userData: IUser) => {
  userData.password = bcrypt.hashSync(userData.password, 15);

  return await userModel
    .create<IUser>(userData)
    .then((doc: Document) => doc)
    .catch((err) => err);
};

const deleteUser = async (
  req: Request,
  res: Response,
  nextFn: NextFunction
) => {
  let userId = req.body["userId"] as any;

  if (validateId(userId) != true) return res.json(validateId(userId));

  let session = await mongoose.startSession();
  await session.withTransaction(async () => {
    let queryResult: IUser = await userModel
      .findById(userId)
      .then((doc) => doc)
      .catch((err) => err);

    if (queryResult == null) {
      res.json(<IErrorResponse>{
        code: 1.2,
        message: "No user found matching given parameters.",
      });
      await session.abortTransaction();
      return;
    }

    let deletedUserDoc = await userModel
      .findByIdAndDelete(userId)
      .then((doc) => doc)
      .catch((err) => err);
    let deletedUserTodos = await todoModel
      .deleteMany({ userId: userId })
      .then((doc) => doc)
      .catch((err) => err);

    res.json({ deletedUserDoc, deletedUserTodos });
  });

  await session.endSession();
};

export { authUser, deleteUser };
