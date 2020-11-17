"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var inversify_express_utils_1 = require("inversify-express-utils");
require("./server/controllers/Usercontroller");
var inversify_config_1 = require("./server/inversify.config");
//Start the server
var server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.userContainer);
server.setConfig(function (app) {
    var logger = morgan("combined");
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
});
var app = server.build();
app.listen(5000);
