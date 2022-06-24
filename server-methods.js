//express set up
const express = require("express");
const app = express();
app.use(express.json());

//add model 
const animal = require("./model");

//add config
const config = require("./config");

app.post("/animal", (res, req) => {
    console.log("Post Triggered");
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