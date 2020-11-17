"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var bookService_1 = require("./services/bookService");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_config_1 = require("./inversify.config");
var book_repo_1 = require("./repository/book-repo");
var typeorm_1 = require("typeorm");
var types_1 = require("./constants/types");
var inversify_1 = require("inversify");
var bodyParser = require("body-parser");
var morgan = require("morgan");
//Create the IOC container
var container = new inversify_1.Container();
container.bind(types_1.TYPE.BookRepository).to(book_repo_1.BookRepository).inSingletonScope();
container.bind(types_1.TYPE.BookService).to(bookService_1.BookService).inSingletonScope();
container.loadAsync(inversify_config_1.containerBidings);
var server = new inversify_express_utils_1.InversifyExpressServer(container);
//Configure the Server
server.setConfig(function (app) {
    var logger = morgan("combined");
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
});
//Start the server
var app = server.build();
typeorm_1.createConnection();
app.listen(4000, function () {
    console.log("Server is listening on port 4000");
});
