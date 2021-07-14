"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, description, genre, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.genre = genre;
        this.year = year;
    }
}
exports.Book = Book;
