"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBook = void 0;
var validator_1 = require("validator");
var isempty_1 = require("./isempty");
exports.validateBook = function (data) {
    var errors = {};
    if (data.title) {
        data.title = !isempty_1.isEmpty(data.title) ? data.title : (errors.title = "Title is required");
        if (!validator_1.default.isLength(data.title, { min: 5, max: 50 })) {
            errors.name = "Name should be mimimum 5 characters";
        }
    }
    if (data.author) {
        data.author = !isempty_1.isEmpty(data.author) ? data.author : (errors.author = "author is required");
        if (!validator_1.default.isLength(data.author, { min: 5, max: 50 })) {
            errors.author = "Author should be mimimum 5 characters";
        }
    }
    if (data.description) {
        data.description = !isempty_1.isEmpty(data.description) ? data.description : (errors.description = "description is required");
        if (!validator_1.default.isLength(data.description, { min: 5, max: 256 })) {
            errors.description = "description should be mimimum 5 characters";
        }
    }
    if (data.genre) {
        data.genre = !isempty_1.isEmpty(data.genre) ? data.genre : (errors.genre = "genre is required");
        if (!validator_1.default.isLength(data.genre, { min: 5, max: 50 })) {
            errors.genre = "Name should be mimimum 5 characters";
        }
    }
    return {
        errors: errors,
        isValid: isempty_1.isEmpty(errors),
    };
};
