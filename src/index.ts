import "reflect-metadata";
import { BookService } from "./services/BookService";
import { IBookRepository } from "./repository/book-repo.interface";
import { InversifyExpressServer } from "inversify-express-utils";
import { containerBidings } from "./inversify.config";
import { BookRepository } from "./repository/book-repo";
import { createTypeOrmConnection } from "./utils/createtypeormconnection";
import { TYPE } from "./constants/types";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";

//Create the IOC container
const container = new Container();
let bookRepo: any = container.bind<IBookRepository>(TYPE.BookRepository).to(BookRepository).inSingletonScope();
new BookService(bookRepo);
container.loadAsync(containerBidings);
let server = new InversifyExpressServer(container);

//Configure the Server
server.setConfig((app) => {
  let logger = morgan("combined");
  app.use(logger);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

//Start the server
let app = server.build();
// createConnection();
createTypeOrmConnection();
app.listen(5000, () => {
  console.log("Server is listening on port 3000");
});
