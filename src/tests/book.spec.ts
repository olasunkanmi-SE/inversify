import { Book } from "../entities/book.entity";
import { getConnection, getRepository } from "typeorm";
import { createTypeOrmConnection } from "../utils/createtypeormconnection";
beforeEach(() => createTypeOrmConnection());
afterEach(() => {
  let conn = getConnection();
  return conn.close();
});

test("store created book and fetch it", async () => {
  await getRepository(Book).insert({
    title: "Ralia the sugar girl",
    author: "Raymond",
    description: "I dont have des for now",
    genre: "fiction",
    year: 2002,
  });
  let newBook = await getRepository(Book).find({
    where: { genre: "fiction" },
  });
  expect(newBook[0].author).toBe("Raymond");
});
