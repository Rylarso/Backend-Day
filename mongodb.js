//set up mongoose
const mongoose = require("mongoose");
const db = mongoose.connection;

//connects to mongodb
function connect(user, password, host, port, db) {
    const connectionString = 'mongodb+srv://Rylarso:codeschool@cluster0.er7oi.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

function setUpConnectionHandlers(callback) {
    //connecting
    db.once("connecting", () => {
        console.log("Connecting to Mongodb");
    });

    //connected
    db.once("connected", () => {
        console.log("Connected to Mongodb");
    });

    //open
    db.once("open", () => {
        console.log("Opened Mongodb");
        callback();
    });

    //error
    db.once("error", () => {
        console.log("Error Connecting to Mongodb");
    });
}

module.exports = {
    setUpConnectionHandlers,
    connect
};