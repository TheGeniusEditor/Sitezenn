const express = require("express");
const path = require("path");
const app = express();
const hbs= require("hbs");
require("./db/conn");
const User = require("./models/user");
const port = 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",templates_path);

app.get("/", (req, res) => {
    res.render("main")
});

app.get("/dev", (req,res) =>{
    res.render("dev");
})
app.get("/maint", (req,res) =>{
    res.render("maint");
})
app.get("/const", (req,res) =>{
    res.render("const");
})
app.get("/register", (req,res) =>{
    res.render("regist");
})

app.post("/register", async (req,res) =>{
    try {
        const registerUser = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            businessname: req.body.businessname,
            phone: req.body.phone,
            service: req.body.service
        })
        await registerUser.save();
        res.status(201).render("afreg");
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).render("fail");
    }
    
})









app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})