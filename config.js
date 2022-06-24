//flag configuration
const flags = require("flags");
flags.defineNumber("port", 8080, "Ports for the http server to listen on");
flags.parse();

//enviroment configuration
const dotenv = require("dotenv");

//configure port number
const port = flags.get("port");

module.exports = {
    flags,
    dotenv,
    port
}