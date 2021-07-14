"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const isEmpty = (value) => {
    return (value === null ||
        value === undefined ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.length === 0));
};
exports.isEmpty = isEmpty;
