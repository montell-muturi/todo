import { ObjectID } from "bson";
import { NextFunction, Request, Response } from "express";
import TodoModel from "../models/todo";
import { IItem, ITodos } from "../models/types";
import { validateId } from "../utils";
import { IErrorResponse } from "./types";

const todoModel = TodoModel;

const createItem = async (
  req: Request,
  res: Response,
  nextFn: NextFunction
) => {
  let listId = req.query["listId"] as string;
  if (validateId(listId) != true) return res.json(validateId(listId));

  if (req.body["title"] == null)
    return res.json(<IErrorResponse>{
      code: 1.0,
      message: "Missing title for item.",
    });

  let todoItem: IItem = {
    title: req.body["title"] as string,
    isChecked: false,
  };

  return res.json(
    await todoModel
      .findOneAndUpdate<ITodos>(
        {
          _id: new ObjectID(listId),
        },
        { $push: { items: todoItem } },
        { new: true }
      )
      .then((doc) => doc)
      .catch((err) => err)
  );
};

const updateItem = async (
  req: Request,
  res: Response,
  nextFn: NextFunction
) => {
  let listId = req.query["listId"] as string;
  let itemId = req.query["itemId"] as string;
  if (validateId(listId) != true) return res.json(validateId(listId));
  if (validateId(itemId) != true) return validateId(itemId);

  let todoItem: IItem = {
    title: req.body["title"] as string,
    isChecked: req.body["isChecked"] as boolean,
  };

  return res.json(
    await todoModel
      .findOneAndUpdate<ITodos>(
        {
          _id: new ObjectID(listId),
          "items._id": itemId,
        },
        { $set: { "items.$": todoItem } },
        { new: true }
      )
      .then((doc) => doc)
      .catch((err) => err)
  );
};

const deleteItem = async (
  req: Request,
  res: Response,
  nextFn: NextFunction
) => {
  let listId = req.query["listId"] as string;
  let itemId = req.query["itemId"] as string;
  if (validateId(listId) != true) return res.json(validateId(listId));
  if (validateId(itemId) != true) return validateId(itemId);

  return res.json(
    await todoModel
      .findOneAndUpdate<ITodos>(
        {
          _id: new ObjectID(listId),
          "items._id": itemId,
        },
        { $pull: { items: { _id: itemId } } },
        { new: true }
      )
      .then((doc) => doc)
      .catch((err) => err)
  );
};

export { createItem, updateItem, deleteItem };
