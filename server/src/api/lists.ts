import { ObjectID } from "bson";
import { NextFunction, Request, Response } from "express";
import { Document } from "mongoose";
import TodoModel from "../models/todo";
import { ITodos } from "../models/types";
import { validateId } from "../utils";

const todoModel = TodoModel;

const getLists = async (req: Request, res: Response, nextFn: NextFunction) => {
  let userId = req.query["userId"] as string;

  if (validateId(userId) != true) return res.json(validateId(userId));

  let userTodo: Document = await todoModel
    .find<ITodos>({ userId: userId })
    .then((doc) => doc)
    .catch((err) => err);

  return res.json(userTodo);
};

const createList = async (
  req: Request,
  res: Response,
  nextFn: NextFunction
) => {
  let userId = req.body["userId"] as string;
  if (validateId(userId) != true) return res.json(validateId(userId));

  let todoList: ITodos = {
    userId: userId,
    title: req.body["title"] as string,
    dateCreated: Date().toString(),
  };

  let createdList = await todoModel
    .create<ITodos>(todoList)
    .then((doc) => doc)
    .catch((err) => err);

  return res.json(createdList);
};

const updateList = async (
  req: Request,
  res: Response,
  nextFn: NextFunction
) => {
  let listId = req.body["listId"] as string;
  let title = req.body["title"] as string;
  if (validateId(listId) != true) return res.json(validateId(listId));

  let updatedList = await todoModel
    .findOneAndUpdate<ITodos>(
      {
        _id: new ObjectID(listId),
      },
      { $set: { title: title } },
      { new: true }
    )
    .then((doc) => doc)
    .catch((err) => err);

  return res.json(updatedList);
};

const deleteList = async (
  req: Request,
  res: Response,
  nextFn: NextFunction
) => {
  let listId = req.body["listId"] as string;
  if (validateId(listId) != true) return res.json(validateId(listId));

  let deletedList = await todoModel
    .findByIdAndDelete(listId, { new: true })
    .then((doc) => doc)
    .catch((err) => err);

  return res.json(deletedList);
};

export { getLists, createList, updateList, deleteList };
