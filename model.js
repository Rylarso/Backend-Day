const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
    species: { type: String, default: "" },
    location: { type: String, default: "" },
    description: { type: String, default: "" },
    index: { type: String, default: "" },
    date: { type: Date, default: new Date() },
});

const animal = mongoose.model("Animal", animalSchema);

module.export = animal;