import { createConnection } from "typeorm";
const ormConfig = require("../server/ormconfig");

export async function getDbConnection() {
  // const entities = [Book];
  const dbConfig = await createConnection(ormConfig);

  return dbConfig;
}
