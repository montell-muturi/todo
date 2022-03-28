import express from "express";

import { authUser, deleteUser } from "./api/auth";
import { createItem, deleteItem, updateItem } from "./api/items";
import { createList, updateList, deleteList, getLists } from "./api/lists";

const router = express.Router();

router.post("/auth", authUser);
router.delete("/auth", deleteUser);

router.get("/lists", getLists);
router.post("/lists", createList);
router.put("/lists", updateList);
router.delete("/lists", deleteList);

router.post("/lists/items", createItem);
router.put("/lists/items", updateItem);
router.delete("/lists/items", deleteItem);

export { router };
