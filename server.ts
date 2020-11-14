import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { containerBidings } from "./server/inversify.config";
import { BookRepository } from "./server/repository/book-repo";
import { Repository } from "typeorm";
import { Book } from "./server/entities/book.entity";
import { TYPE } from "./server/constants/types";
import { Container } from "inversify";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
//Start the server
const container = new Container();
container
  .bind<Repository<Book>>(TYPE.BookRepository)
  .toDynamicValue((): any => {
    const getRepository = new BookRepository();
    return getRepository.getBooks();
  })
  .inRequestScope();
container.loadAsync(containerBidings);
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  let logger = morgan("combined");
  app.use(logger);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(5000);
