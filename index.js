//express set up
const express = require("express");
const app = express();
app.use(express.json());

//get configuerations 
const config = require("./config");

//get mongodb
const mongodb = require("./mongodb")

mongodb.setUpConnectionHandlers(() => {
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
});
mongodb.connect();