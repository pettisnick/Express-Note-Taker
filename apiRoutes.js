const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");




module.exports = (app) => {

    // Get Requests
    app.get("/api/notes", (req, res) => {
        // /api/notes reads db.json
        fs.readFile("db/db.json", "utf8", (err, data) => {
        //return the saved notes to JSON
        res.json(JSON.parse(data));
        });
    });

    // Post Requests
    app.post("/api/notes", (req, res) => {
        //Saving new note on request body
        const newNote = req.body;
            //Read db.json file
            fs.readFile("db/db.json", "utf8", (err, data) => {
                //Turning the data into an array object
                const data2 = db;
                //Grabbing the last item in the array
                var last_item = data2[data2.length -1];
                //Creating note with unique id
                var note1 = {title: newNote.title, text: newNote.text, id: last_item.id+1};
                //Adding note to the end of 'data2' 
                data2.push(note1);
                //Converting 'data' into a string and adding it to the db.json file
                fs.writeFile("db/db.json", JSON.stringify(data2), (err) => {
                    if (err) 
                    throw err;
                    //console.log("Success");
                })
            });
            //Return a newNote
            res.json(newNote);

    });
        
    // Delete Request
    app.delete("/api/notes/:id", (req, res) => {
        //Read the db.json file
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err)
            throw err;
            //noteId = query parameter containing the id
            let noteId = req.params.id;
            //noteData = data being changed from a string to an object
            let noteData = JSON.parse(data);
            console.log(noteData);
            noteData = noteData.filter(function(note) {
                //If the noteId's don't have the same value, return true
                if (noteId != note.id) {
                    return true;
                } else {
                    return false;
                };
            });
            //Rewriting db.json file after changing from object in array to a string
            fs.writeFile("db/db.json", JSON.stringify(noteData), function(error) {
                if (err) throw err;
                res.end(console.log("Deleted"));
            })
        });

    });
     
};