/* eslint linebreak-style: ["error", "unix"] */
/* eslint no-param-reassign: "error" */
import { Connection, createConnection, getConnectionOptions } from "typeorm";

export const createTypeOrmConnection = async (): Promise<Connection> => {
  const connType: any = process.env.NODE_ENV;
  const connectionOptions = await getConnectionOptions(connType);
  return createConnection({ ...connectionOptions, name: "default" });
};
