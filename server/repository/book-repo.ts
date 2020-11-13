import { getConnection } from "typeorm";
import { Book } from "../entities/book.entity";

export function getRepository() {
  const connection = getConnection();
  const bookRepository = connection.getRepository(Book);
  console.log(bookRepository);
  return bookRepository;
}
