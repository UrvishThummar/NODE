const express = require('express')
const db = require('./config/db')
const user = require('./model/usermodel')
const app = express()

app.use(express.json())
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));


app.post('/register', async (req, res) => {
    try {
        const data = await user.create(req.body)
        return res.redirect('/login');

        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.send("Username and Password required");
        }

        const user1 = await user.findOne({ username });

        if (!user1) {
            return res.send("Invalid username");
        }

        if (user1.password !== password) {
            return res.send("Invalid password");
        }

        res.send("Login success!");

    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
});


app.get('/', async (req, res) => {
    try {
        const user1 = await user.find({})
        res.render('login', { user1 })
        // return res.send(user1)
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