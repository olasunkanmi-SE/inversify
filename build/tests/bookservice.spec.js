"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Book_1 = require("../model/Book");
const BookService_1 = require("../services/BookService");
describe("BookService test", () => {
    //Mock Books
    let bookService;
    let mockBookRepo = new Array(new Book_1.Book(1, "Ralia the sugar girl", "Chinua Achebe", "decription", "folklure", 2000), new Book_1.Book(2, "there was a country", "Wole Soyinka", "another description", "history", 1950));
    //Test to get list of books
    it("should return list of books", () => __awaiter(void 0, void 0, void 0, function* () {
        const Mock = jest.fn(() => ({
            getBooks: jest.fn().mockReturnValue(mockBookRepo),
        }));
        const mock = new Mock();
        bookService = new BookService_1.BookService(mock);
        let result = bookService.getBooks();
        expect(mock.getBooks).toHaveBeenCalled();
        expect((yield result).length).toBe(2);
        //negative test
        // expect(await result).toBe(3);
    }));
    //Test to create a new book`
    it("should add Book", () => __awaiter(void 0, void 0, void 0, function* () {
        const Mock = jest.fn(() => ({
            createBook: jest.fn().mockImplementation((book) => {
                return mockBookRepo.push(book);
            }),
        }));
        const mock = new Mock();
        bookService = new BookService_1.BookService(mock);
        let result = bookService.createBook(new Book_1.Book(3, "tales by the moonlight", "Raymond", "description", "tales", 1997));
        expect(mock.createBook).toHaveBeenCalled();
        expect(yield result).toBe(3);
        //negative test
        // expect(await result).toBe(4);
    }));
});
