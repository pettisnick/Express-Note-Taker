//npm i
//npm install express

//Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//call express and set to variable 'app'
const app = express();

const PORT = process.env.PORT || 8080;

//Set up Express app to handle data parsing
//app.us() acts as a middleware in express; don't have to specify the request URL
//middleware forms chain of functions
app.use(express.urlencoded({ extended: true }));
//taking that request body and parsing it's JSON into Javascript that we can work with and attaching it to req/body()
//by the time the function runs, express has done everything it needs to in order to let us treat this req.body() as a Javascript object and store it in a variable
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//returns a function
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


//Starts the server to begin listening
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});


let notes = [];

//Routes
app.get("/notes", (req, res) => {
    //console.log(path.join(__dirname, "notes.html"));
    //path.join is joining them in one singualr path that express can read and locate in html, then send back to the browser
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", (req, res) => {
    //console.log(path.join(__dirname, "index.html"));
    res.sendFile(path.join(__dirname, "index.html"));
});

//Delete 
//receive a parameter containing the ID of a note to delete? Give each note a unique ID when it's saved.
//To delete a note, need to read all notes from db.json file, remove the note w/the given ID property, and rewrite the notes to db.json
app.delete("/api/notes/:id", (req, res) => {
    
    for (var i = 0; i < notes.length; i++) {
        if 
        console.log(notes.length[i]);
    }

})