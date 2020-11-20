// const Book = require("./src/entities/book.entity");
module.exports = [
  {
    name: "development",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "omowunmi@&8",
    database: "bookmanagement",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    migrations: ["./build/migrations/*{.js,.ts}"],
    cli: {
      migrationsDir: "./src/migrations/",
    },
  },
  {
    name: "test",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "omowunmi@&8",
    database: "testdb",
    synchronize: true,
    logging: false,
    dropSchema: true,
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    migrations: ["./build/migrations/*{.js,.ts}"],
    cli: {
      migrationsDir: "./src/migrations/",
    },
  },
];
