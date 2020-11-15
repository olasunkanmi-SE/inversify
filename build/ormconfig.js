"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormconfig = void 0;
var Book_1 = require("./model/Book");
exports.ormconfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "omowunmi@&8",
    database: "bookmanagement",
    synchronize: true,
    logging: false,
    entities: [Book_1.Book],
    migrations: ["build/migrations/*{.js,.ts}"],
    cli: {
        migrationsDir: "build/migrations/",
    },
};
