const mongoose = require("mongoose");

const animalSchema = mongoose.schema({
    species: { type: String, default: "" },
    location: { type: String, default: "" },
    color: { type: String, default: "" },
    index: { type: String, default: "" },
    date: { type: String, default: "" },
});

const animal = mongoose.model("Animal", animalSchema);

module.export = animal;