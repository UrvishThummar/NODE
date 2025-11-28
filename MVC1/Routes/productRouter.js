const express = require("express");
const { getProduct,editProduct, deleteProduct, addProduct } = require("../Controller/productController");

const p_router = express.Router();

p_router.post("/add", addProduct);
p_router.get("/all", getProduct);
p_router.patch("/:id", editProduct);   
p_router.delete("/:id", deleteProduct);

module.exports = p_router;