"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBookRequest = void 0;
var express_validator_1 = require("express-validator");
//Validate user input to create a new book
exports.validateBookRequest = [
    express_validator_1.check("title", "Book title must be at least 5 characters long")
        .isLength({
        min: 5,
    })
        .trim(),
    express_validator_1.check("author", "Book author must be at least 5 characters long")
        .isLength({
        min: 5,
    })
        .trim(),
    express_validator_1.check("genre", "Book genre must be at least 5 characters long")
        .isLength({
        min: 5,
    })
        .trim(),
    express_validator_1.check("description", "Book description must be at least 5 characters long")
        .isLength({
        min: 5,
    })
        .trim(),
    express_validator_1.check("year", "Book year must be a number").isInt(),
];
