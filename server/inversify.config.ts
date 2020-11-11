import "reflect-metadata";
import { Container } from "inversify";
// import {
//   CreateUserHandler,
//   UpdateUserHandler,
//   DeleteUserHandler,
//   GetUserHandler,
// } from "./handlers/handler";
import { TYPES } from "./types";
import { UserService } from "./repository/user-repo";

//Create and configure container

const userContainer = new Container();
userContainer.bind<UserService>(TYPES.UserService).to(UserService);
// userContainer.bind<CreateUserHandler>(TYPES.CreateUser).to(CreateUserHandler);
// userContainer.bind<DeleteUserHandler>(TYPES.DeleteUser).to(DeleteUserHandler);
// userContainer.bind<GetUserHandler>(TYPES.GetUser).to(GetUserHandler);
// userContainer.bind<UpdateUserHandler>(TYPES.UpdateUSer).to(UpdateUserHandler);

export { userContainer };
