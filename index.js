//express set up
const express = require("express");
const app = express();
app.use(express.json());

//get configuerations 
const config = require("./config");

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});