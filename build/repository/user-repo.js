"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var inversify_1 = require("inversify");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.getUserById = function (id) {
        var users = this.getUsers();
        var user;
        user = users.find(function (user) { return user.id === id; });
        return user;
    };
    UserService.prototype.createUser = function (user) {
        this.users.push(user);
        return user;
    };
    UserService.prototype.deleteUser = function (id) {
        return this.users.filter(function (user) { return user.id !== id; });
    };
    UserService.prototype.updateUser = function (id, updatedUser) {
        var user = this.getUserById(id);
        user.name = updatedUser.name;
        user.email = updatedUser.email;
        user.password = updatedUser.password;
        return user;
    };
    UserService = __decorate([
        inversify_1.injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
