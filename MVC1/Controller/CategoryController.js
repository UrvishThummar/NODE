const cetagoryModel = require("../model/categoryModel");

const addCategory = async (req, res) => {
    const data = await cetagoryModel.create(req.body);
    res.send(data);
};

const getCategory = async (req, res) => {
    const data = await cetagoryModel.find();
    res.send(data);
};

const deleteCategory = async (req, res) => {
    const data = await cetagoryModel.findByIdAndDelete(req.params.id);
    res.send("Product Deleted");
};

const editCategory = async (req, res) => {
    const id = req.params.id;
    const data = await cetagoryModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
};


module.exports = { addCategory, editCategory, deleteCategory,getCategory };