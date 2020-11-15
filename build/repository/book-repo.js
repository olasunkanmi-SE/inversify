"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
var typeorm_1 = require("typeorm");
var inversify_1 = require("inversify");
var BookRepository = /** @class */ (function () {
    function BookRepository() {
    }
    BookRepository.prototype.getBooks = function (searchoptions) {
        var repo = new typeorm_1.Repository();
        var books = repo.find(searchoptions);
        console.log(books);
        return books;
    };
    BookRepository = __decorate([
        inversify_1.injectable()
    ], BookRepository);
    return BookRepository;
}());
exports.BookRepository = BookRepository;
// ts-node node_modules/.bin/typeorm migration:generate -n v1
