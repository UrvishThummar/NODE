const mongoos = require('mongoose')

const userSchema = mongoos.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

const userModel = mongoos.model('user', userSchema)

module.exports = userModel