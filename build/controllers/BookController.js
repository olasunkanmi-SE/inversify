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
exports.BookController = void 0;
const search_1 = require("./../model/search");
const types_1 = require("./../constants/types");
const express = require("express");
const inversify_express_utils_1 = require("inversify-express-utils");
const book_entity_1 = require("../entities/book.entity");
const inversify_1 = require("inversify");
const express_validator_1 = require("express-validator");
const books_validation_1 = require("../middleware/books.validation");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    /**
     * create the API endpoint to retieve books *
     * @param res
     */
    getBooks(res, sortOrder, author, genre, title, year, skip, take, id) {
        return __awaiter(this, void 0, void 0, function* () {
            //Create the search Algorithm
            let searchOptions = {
                where: [{ title }, { author }, { genre }, { id }, { year }],
                order: {
                    title: sortOrder,
                },
                skip: skip,
                take: take,
            };
            try {
                return yield this.bookService.getBooks(searchOptions);
            }
            catch (error) {
                res.status(500);
                res.send(error.message);
            }
        });
    }
    /**
     * API call to create a book with a book validation middleware*
     * @param req
     * @param res
     */
    createBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).send(errors);
                }
                let newBook = yield new book_entity_1.Book();
                newBook.title = req.body.title;
                newBook.author = req.body.author;
                newBook.genre = req.body.genre;
                newBook.description = req.body.description;
                newBook.year = req.body.year;
                return yield this.bookService.createBook(newBook);
            }
            catch (error) {
                res.status(500);
                res.send(error.message);
            }
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __param(0, inversify_express_utils_1.response()),
    __param(1, inversify_express_utils_1.queryParam("sortOrder")),
    __param(2, inversify_express_utils_1.queryParam("author")),
    __param(3, inversify_express_utils_1.queryParam("genre")),
    __param(4, inversify_express_utils_1.queryParam("title")),
    __param(5, inversify_express_utils_1.queryParam("year")),
    __param(6, inversify_express_utils_1.queryParam("skip")),
    __param(7, inversify_express_utils_1.queryParam("take")),
    __param(8, inversify_express_utils_1.queryParam("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBooks", null);
__decorate([
    inversify_express_utils_1.httpPost("/create", ...books_validation_1.validateBookRequest),
    __param(0, inversify_express_utils_1.request()),
    __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
BookController = __decorate([
    inversify_express_utils_1.controller("/api/books"),
    __param(0, inversify_1.inject(types_1.TYPE.BookRepository)),
    __metadata("design:paramtypes", [Object])
], BookController);
exports.BookController = BookController;
