const express = require('express')
const db = require('./config/db')
const user = require('./model/usermodel')
const app = express()

app.use(express.json())
app.set('view engine', 'ejs')

app.post('/insertData', async (req, res) => {
    try {
        const data = await user.create(req.body)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.get('/', async (req, res) => {
    try {
        const user1 = await user.find({})
        // res.render('home', { user1 })
        return res.send(user1)
    } catch (error) {
        res.send(err)
    }
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id
    const data = await user.findByIdAndDelete(id)
    res.send('success')
})

app.patch('/:id', async (req, res) => {
    const id = req.params.id
    const data = await user.findByIdAndUpdate(id, req.body);
    res.send("success")
})

app.listen(3500, () => {
    console.log('Server listen')
})