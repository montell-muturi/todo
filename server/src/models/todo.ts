import { Schema, model } from "mongoose";
import { IItem, ITodos } from "./types";

const itemSchema = new Schema<IItem>({
  title: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
});

const todoSchema = new Schema<ITodos>(
  {
    userId: String,
    dateCreated: String,
    title: String,
    items: [itemSchema],
  },
  { collection: "todos" }
);

const TodoModel = model<ITodos>("Todo", todoSchema);

export default TodoModel;
