"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepository = void 0;
var typeorm_1 = require("typeorm");
var book_entity_1 = require("../entities/book.entity");
function getRepository() {
    var connection = typeorm_1.getConnection();
    var bookRepository = connection.getRepository(book_entity_1.Book);
    console.log(bookRepository);
    return bookRepository;
}
exports.getRepository = getRepository;
