import { Connection, createConnection, getConnectionOptions } from "typeorm";

export const createTypeOrmConnection = async (): Promise<Connection> => {
  const connType: any = process.env.NODE_ENV;
  const connectionOptions = await getConnectionOptions(connType);
  return await createConnection({ ...connectionOptions, name: "default" });
};
