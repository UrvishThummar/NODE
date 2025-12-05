const express = require('express')
const multer = require('multer')
const db = require('./config/db')
const path = require('path')
const app = express()
const user=require('./usermodel/usermodel')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/upload', express.static(path.join(__dirname, 'upload')))     

app.set('view engine', 'ejs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage }).single('image')

app.post('/insertData', upload, async (req, res) => {
    const { username, password } = req.body
    let image = ''
    if (req.file) {
        image = req.file.path
    } await user.create({
        username,
        password,
        image
    }).then((data) => {
        console.log(data)
         res.redirect('/')
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/',async(req,res)=>{
    await user.find({}).then((data)=>{
        res.render('home',{data})
        
       

    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(5000, (req, res) => {
    console.log('server start at 5000')
})