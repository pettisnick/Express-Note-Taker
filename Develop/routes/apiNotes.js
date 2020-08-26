const fs = require("fs");
const path = require("path");

module.exports = (app) => {
    //Routes
    //Reading the 'db.json' file
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;

        let notes = JSON.parse(data);

        app.get("public/notes", (req, res) {
            res.JSON(notes);
        });

        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "/public/index.html"));
        });
    })
}

//Delete 
//receive a parameter containing the ID of a note to delete? Give each note a unique ID when it's saved.
//To delete a note, need to read all notes from db.json file, remove the note w/the given ID property, and rewrite the notes to db.json
app.delete("/api/notes/:id", (req, res) => {
    
    
});