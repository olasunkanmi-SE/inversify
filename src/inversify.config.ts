import { Book } from "./model/Book";
import "reflect-metadata";
import { AsyncContainerModule } from "inversify";
import { BookController } from "./controllers/BookController";

export const containerBidings = new AsyncContainerModule(async (bind) => {
  await BookController;
});

//Create and configure container

// const userContainer = new Container();
// userContainer.bind<UsersQuery>(TYPES.UsersQuery).to(UserService);
// // userContainer.bind<CreateUserHandler>(TYPES.CreateUser).to(CreateUserHandler);
// // userContainer.bind<DeleteUserHandler>(TYPES.DeleteUser).to(DeleteUserHandler);
// // userContainer.bind<GetUserHandler>(TYPES.GetUser).to(GetUserHandler);
// // userContainer.bind<UpdateUserHandler>(TYPES.UpdateUSer).to(UpdateUserHandler);

// export { userContainer };
