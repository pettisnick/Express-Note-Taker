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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Require router file
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


   
//Starts the server to begin listening
    app.listen(PORT, () => {
        console.log("Server listening on: http://localhost:" + PORT);
    })
    