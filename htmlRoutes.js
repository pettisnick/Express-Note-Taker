const express = require("express");
const path = require("path");
const fs = require("fs");

module.exports = (app) => {

// Getting routes
app.get("/notes", (req, res) => {
    fs.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", (req, res) => {
    fs.sendFile(path.join(__dirname, "public/index.html"));
});

};