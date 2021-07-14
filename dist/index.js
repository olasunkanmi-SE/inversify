"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint linebreak-style: ["error", "unix"] */
/* eslint no-param-reassign: "error" */
require("reflect-metadata");
const inversify_1 = require("inversify");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const inversify_express_utils_1 = require("inversify-express-utils");
const BookService_1 = require("./services/BookService");
const inversify_config_1 = require("./inversify.config");
const book_repo_1 = require("./repository/book-repo");
const createtypeormconnection_1 = require("./utils/createtypeormconnection");
const types_1 = require("./constants/types");
// Create the IOC container
const container = new inversify_1.Container();
const bookRepo = container.bind(types_1.TYPE.BookRepository).to(book_repo_1.BookRepository).inSingletonScope();
// eslint-disable-next-line no-new
new BookService_1.BookService(bookRepo);
container.loadAsync(inversify_config_1.containerBidings);
const server = new inversify_express_utils_1.InversifyExpressServer(container);
// Configure the Server
server.setConfig((app) => {
    const logger = morgan("combined");
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
});
// Start the server
const app = server.build();
// createConnection();
createtypeormconnection_1.createTypeOrmConnection();
app.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log("Server is listening on port 3000");
});
//# sourceMappingURL=index.js.map