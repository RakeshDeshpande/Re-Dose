const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");
var path = require("path");
var app = express();
var firebase = require("firebase");

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {

    res.render("home.ejs");
});



app.get("/homepage", (req, res) => {
    res.sendFile(path.join(__dirname + '/views/homepage.html'));
});

app.get("/signin", (req, res) => {

    res.render("signin");
});

app.get("/signup", (req, res) => {

    res.render("signup");
});

// The project will run @ 3000. Check with other ports if you're unable to run at 3000 
app.listen(3000, () => {

    console.log("Server Started at port 3000. You can run at localhost:3000 ");

});