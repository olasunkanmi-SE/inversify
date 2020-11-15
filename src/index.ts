import { IBookRepository } from "./repository/book-repo.interface";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { containerBidings } from "./inversify.config";
import { BookRepository } from "./repository/book-repo";
import { Repository } from "typeorm";
import { Book } from "./entities/book.entity";
import { TYPE } from "./constants/types";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
//Start the server
const container = new Container();
container
  .bind<IBookRepository>(TYPE.BookRepository)
  .to(BookRepository)
  .inSingletonScope();
container.loadAsync(containerBidings);
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  let logger = morgan("combined");
  app.use(logger);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
