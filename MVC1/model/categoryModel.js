const mongoos = require('mongoose')

const categorySchema = mongoos.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    }
})

const categoryModel = mongoos.model('category', categorySchema)

module.exports = categoryModel