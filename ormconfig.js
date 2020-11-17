// const Book = require("./src/entities/book.entity");
module.exports = {
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
};
