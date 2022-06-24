//express set up
const express = require("express");
const app = express();
app.use(express.json());

//add model 
const Animal = require("./model");

//add config
const config = require("./config");

//add methods
const methods = require("./methods");

//add setup
const setup = require("./setup");

app.post("/animal", (res, req) => {
    const vAnimal = setupAnimal(req.body);
    Animal.create(vAnimal)
        .then((animal) => {
            res.json(Aodo);
            console.log("Post Triggered");
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

app.get("/animal", (res, req) => {
    console.log("Get Triggered");
});

app.put("/animal", (res, req) => {
    console.log("Put Triggered");
});

app.patch("/animal", (res, req) => {
    console.log("Patch Triggered");
});

module.exports = app;