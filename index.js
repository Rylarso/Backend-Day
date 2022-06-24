//get mongodb
const mongodb = require("./mongodb");

//get configuerations 
const config = require("./config");

//get server running
const app = require("./server-methods");

mongodb.setUpConnectionHandlers(() => {
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}`);
    });
});
mongodb.connect();