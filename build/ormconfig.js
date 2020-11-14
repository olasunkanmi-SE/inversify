"use strict";
module.exports.ormConfig = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "omowunmi@&8",
    database: process.env.DB_NAME || "bookmanagement",
    synchronize: true,
    logging: false,
    options: { encrypt: true },
    entities: ["build/**/*.entity{.js,.ts}"],
    migrations: ["build/migrations/*{.js,.ts}"],
    cli: {
        migrationsDir: "build/migrations/",
    },
};
