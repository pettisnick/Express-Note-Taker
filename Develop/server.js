//npm i
//npm install express

//Dependencies
const express = require("express");
//import path library
const path = require("path");

//call express and set to variable 'app'
const app = express();

const PORT = process.env.PORT || 8080;

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("./notes", (req, res) => {
    console.log(path.join(__dirname, "notes.html"));
    //path.join is joining them in one singualr path that express can read and locate in html, then send back to the browser
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("./*", (req, res) => {
    console.log(path.join(__dirname, "index.html"));
    res.sendFile(path.join(__dirname, "index.html"));
});