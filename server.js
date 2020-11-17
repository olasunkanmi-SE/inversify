"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_config_1 = require("./server/inversify.config");
var book_repo_1 = require("./server/repository/book-repo");
var types_1 = require("./server/constants/types");
var bookService_1 = require("./server/services/bookService");
var inversify_1 = require("inversify");
var bodyParser = require("body-parser");
var morgan = require("morgan");
//Start the server
var container = new inversify_1.Container();
container.bind(types_1.TYPE.BookInterface).to(bookService_1.BookService);
container
    .bind(types_1.TYPE.BookRepository)
    .toDynamicValue(function () {
    return book_repo_1.getRepository();
})
    .inRequestScope();
container.loadAsync(inversify_config_1.containerBidings);
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    var logger = morgan("combined");
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
});
var app = server.build();
app.listen(5000);
