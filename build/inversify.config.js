"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userContainer = void 0;
require("reflect-metadata");
var inversify_1 = require("inversify");
// import {
//   CreateUserHandler,
//   UpdateUserHandler,
//   DeleteUserHandler,
//   GetUserHandler,
// } from "./handlers/handler";
var types_1 = require("./types");
var user_repo_1 = require("./repository/user-repo");
//Create and configure container
var userContainer = new inversify_1.Container();
exports.userContainer = userContainer;
userContainer.bind(types_1.TYPES.UsersQuery).to(user_repo_1.UserService);
