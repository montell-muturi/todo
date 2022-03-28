import express from "express";
import { router } from "./routes";

const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(
  5000,
  async () =>
    await mongoose.connect(
      "mongodb://db:27017/todo",
      { useNewUrlParser: true },
      () => console.log("Connected to DB")
    )
);
