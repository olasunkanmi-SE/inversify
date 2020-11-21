import "reflect-metadata";
import { AsyncContainerModule } from "inversify";
import { BookController } from "./controllers/BookController";

export const containerBidings = new AsyncContainerModule(async (bind) => {
  await BookController;
});
