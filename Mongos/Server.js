const express = require('express')
const db = require('./config/db')
const app = express()

const user = require('./userModel/usermodel')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

// Insert Data
app.post('/insertData', async (req, res) => {
    try {
        const data = await user.create(req.body)
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})

// Show Data on Home Page
app.get('/', async (req, res) => {
    try {
        const user1 = await user.find({})
        // Send data to EJS
        // res.render('home', { user1 })
    return res.send(user1)
    } catch (err) {
        res.send(err)
    }
})

app.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const data=await user.findByIdAndDelete(id)
    res.send("success")
})

app.patch("/:id", async (req, res) => {
    try {
       const id = req.params.id;
      const data= await user.findByIdAndUpdate(id, req.body);
       res.send(data);
    } catch (err) {
       res.send(err);
    }
 });

app.listen(3180, () => {
    console.log('Server Listening on 3180')
})