"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.BookService = void 0;
/* eslint linebreak-style: ["error", "unix"] */
/* eslint no-param-reassign: "error" */
const inversify_1 = require("inversify");
const types_1 = require("../constants/types");
let BookService = 
// eslint-disable-next-line padded-blocks
class BookService {
    constructor(bookRepository) {
        this._bookRepository = bookRepository;
    }
    /**
     * call the bookrepository's getbooks method to retrieve books *
     * @type Book[]
     */
    getBooks(searchoptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this._bookRepository.getBooks(searchoptions);
            return books;
        });
    }
    /**
     * call the bookrepository's createBook method to create a new book*
     * @param book
     * @type Book
     */
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = yield this._bookRepository.createBook(book);
            return newBook;
        });
    }
};
BookService = __decorate([
    inversify_1.injectable()
    // eslint-disable-next-line padded-blocks
    ,
    __param(0, inversify_1.inject(types_1.TYPE.BookRepository)),
    __metadata("design:paramtypes", [Object])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=BookService.js.map