const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'))

let student = [
    {
        id: 1,
        name: "sunaina"
    },
    {
        id: 2,
        name: "jyoti"
    }
];

const middleware = ((req, res, next) => {
    if (req.query.age >= 18) {
        next()
    }
})
app.get("/", (req, res) => {
    res.render("home", { student });
});

app.get("/index", middleware, (req, res) => {
    res.render("index");
});


app.post("/insertData", (req, res) => {
    const { id, name } = req.body;

    const obj = {
        id: Number(id),
        name
    };

    student.push(obj);
    res.redirect("/");
});

app.get("/delete", (req, res) => {
    const id = Number(req.query.id);

    student = student.filter((el) => el.id !== id);

    res.redirect("/");
});

app.get("/Edit", (req, res) => {
    const id = Number(req.query.id);

    const editdata = student.find((el) => el.id === id);

    res.render("edit", { editdata });
});

app.post("/editData", (req, res) => {
    const { id, name } = req.body;

    student = student.map((el) => {
        if (el.id == id) {
            el.name = name;
        }
        return el;
    });

    res.redirect("/");
});

app.use(middleware)

app.listen(3000, () => {
    console.log("server listen");
});
