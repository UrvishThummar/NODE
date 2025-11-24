const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String

    },
    password: {
        type: String
       
    },
    image:{
        type:String
    }
})

const User = mongoose.model('Urvish123', userSchema)

module.exports = User
