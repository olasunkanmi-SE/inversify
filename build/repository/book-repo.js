"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
var typeorm_1 = require("typeorm");
var book_entity_1 = require("../entities/book.entity");
var BookRepository = /** @class */ (function () {
    function BookRepository() {
    }
    BookRepository.prototype.getBooks = function (searchoptions) {
        var connection = typeorm_1.getConnection();
        //return type should be a book
        var bookRepository = connection.getRepository(book_entity_1.Book);
        var books = bookRepository.find(searchoptions);
        console.log(books);
        return books;
    };
    return BookRepository;
}());
exports.BookRepository = BookRepository;
