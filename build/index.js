"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_config_1 = require("./inversify.config");
var book_repo_1 = require("./repository/book-repo");
var types_1 = require("./constants/types");
var inversify_1 = require("inversify");
var bodyParser = require("body-parser");
var morgan = require("morgan");
//Start the server
var container = new inversify_1.Container();
container
    .bind(types_1.TYPE.BookRepository)
    .to(book_repo_1.BookRepository)
    .inSingletonScope();
container.loadAsync(inversify_config_1.containerBidings);
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    var logger = morgan("combined");
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
});
var app = server.build();
app.listen(5000, function () {
    console.log("Server is listening on port 5000");
});
