const usermodel = require("../model/usermodel");

const Register = async (req, res) => {
    const data = await usermodel.create(req.body);
    res.send(data);
};

const GetUser = async (req, res) => {
    const data = await usermodel.find();
    res.send(data);
};

const DeleteUser = async (req, res) => {
    const data = await usermodel.findByIdAndDelete(req.params.id);
    res.send({ message: "User Deleted", data });
};

const EditUser = async (req, res) => {
    const id = req.params.id;
    const data = await usermodel.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);
};


module.exports = { Register, GetUser, DeleteUser, EditUser };