import "reflect-metadata";
import { AsyncContainerModule, Container } from "inversify";
import { Repository } from "typeorm";
import { Book } from "./entities/book.entity";
import { getDbConnection } from "./db";
import { getRepository } from "./repository/book-repo";
import { BookController } from "./controllers/BookController";
import { TYPE } from "./constants/types";

export const containerBidings = new AsyncContainerModule(async (bind) => {
  await getDbConnection();
  await BookController;
  bind<Repository<Book>>(TYPE.BookRepository)
    .toDynamicValue(() => {
      return getRepository();
    })
    .inRequestScope();
});

//Create and configure container

// const userContainer = new Container();
// userContainer.bind<UsersQuery>(TYPES.UsersQuery).to(UserService);
// // userContainer.bind<CreateUserHandler>(TYPES.CreateUser).to(CreateUserHandler);
// // userContainer.bind<DeleteUserHandler>(TYPES.DeleteUser).to(DeleteUserHandler);
// // userContainer.bind<GetUserHandler>(TYPES.GetUser).to(GetUserHandler);
// // userContainer.bind<UpdateUserHandler>(TYPES.UpdateUSer).to(UpdateUserHandler);

// export { userContainer };
