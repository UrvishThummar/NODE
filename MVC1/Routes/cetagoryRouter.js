const express = require("express");
const { getCategory,editCategory, deleteCategory, addCategory } = require("../Controller/CategoryController");

const c_router = express.Router();

c_router.post("/add", addCategory);
c_router.get("/all", getCategory);
c_router.patch("/:id", editCategory);   
c_router.delete("/:id", deleteCategory);

module.exports = c_router;