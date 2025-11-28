const productModel = require("../model/productModel");
const usermodel = require("../model/productModel");

const addProduct = async (req, res) => {
    const data = await productModel.create(req.body);
    res.send(data);
};

const getProduct = async (req, res) => {
    const data = await productModel.find().populate('categoryId');
    res.send(data);
};

const deleteProduct = async (req, res) => {
    const data = await productModel.findByIdAndDelete(req.params.id);
    res.send("Product Deleted");
};

const editProduct = async (req, res) => {
    const id = req.params.id;
    const data = await productModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
};


module.exports = { addProduct, editProduct, deleteProduct,getProduct };