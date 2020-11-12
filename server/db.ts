import { createConnection } from "typeorm";
import { Book } from "./entities/book";

export async function getDbConnection() {
  const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
  const DATABASE_USER = process.env.DATABASE_USER || "postgres";
  const DATABASE_PORT = 5432;
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
  const DATABASE_DB = "bookmanagement";

  const entities = [Book];

  const dbConfig = await createConnection({
    type: "postgres",
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DB,
    entities: entities,
    synchronize: true,
  });

  return dbConfig;
}
