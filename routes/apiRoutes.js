const fs = require("fs");
const path = require("path");
const notes = [];

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
app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", db)
    
    
});