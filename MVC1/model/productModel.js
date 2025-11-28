const mongoos = require('mongoose')
const categoryModel = require('./categoryModel')

const ProductSchema = mongoos.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    },
    categoryId:{
        type:mongoos.Schema.Types.String,
        ref:'category',
    }
})

const productModel = mongoos.model('product', ProductSchema)

module.exports = productModel