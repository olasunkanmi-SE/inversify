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
const book_entity_1 = require("../entities/book.entity");
const typeorm_1 = require("typeorm");
const createtypeormconnection_1 = require("../utils/createtypeormconnection");
beforeEach(() => createtypeormconnection_1.createTypeOrmConnection());
afterEach(() => {
    let conn = typeorm_1.getConnection();
    return conn.close();
});
test("store created book and fetch it", () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.getRepository(book_entity_1.Book).insert({
        title: "Ralia the sugar girl",
        author: "Raymond",
        description: "I dont have des for now",
        genre: "fiction",
        year: 2002,
    });
    let newBook = yield typeorm_1.getRepository(book_entity_1.Book).find({
        where: { genre: "fiction" },
    });
    expect(newBook[0].author).toBe("Raymond");
}));
