const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");


module.exports = (app) => {
    //Routes
    //--------------------------------------------
    //Get
    //Reading the 'db.json' file
    app.get("/api/notes", (req, res) => {
        fs.readFile("db/db.json", "utf8", (err, data) => {
        res.json.parse(data);
        });
    });

    //Post
    //Saving new note on request body and adding it to db.json,
    //then returning new note to client
    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        newNote.id = uuidv4();
    })
        let notes = JSON.parse(data);

        app.get("/notes", (req, res) {
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