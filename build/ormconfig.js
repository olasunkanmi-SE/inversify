"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
// const Book = require("./src/entities/book.entity");
exports.ormConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "omowunmi@&8",
    database: "bookmanagement",
    synchronize: true,
    logging: false,
    entities: ["./build/entities/**/*.entity.js"],
    migrations: ["./build/migrations/*{.js,.ts}"],
    cli: {
        migrationsDir: "./src/migrations/",
    },
};
