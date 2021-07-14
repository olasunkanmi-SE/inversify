/* eslint linebreak-style: ["error", "unix"] */
/* eslint no-param-reassign: "error" */
import "reflect-metadata";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import { InversifyExpressServer } from "inversify-express-utils";
import { BookService } from "./services/BookService";
import { IBookRepository } from "./repository/book-repo.interface";
import { containerBidings } from "./inversify.config";
import { BookRepository } from "./repository/book-repo";
import { createTypeOrmConnection } from "./utils/createtypeormconnection";
import { TYPE } from "./constants/types";

// Create the IOC container
const container = new Container();
const bookRepo: any = container
  .bind<IBookRepository>(TYPE.BookRepository)
  .to(BookRepository)
  .inSingletonScope();
// eslint-disable-next-line no-new
new BookService(bookRepo);
container.loadAsync(containerBidings);
const server = new InversifyExpressServer(container);

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
createTypeOrmConnection();
app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log("Server is listening on port 3000");
});
