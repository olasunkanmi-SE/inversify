import { IBookRepository } from "./book-repo.interface";
import { getConnection } from "typeorm";
import { Book } from "../entities/book.entity";

export class BookRepository implements IBookRepository {
  public getBooks(searchoptions?: any): Promise<Book[]> {
    const connection = getConnection();
    //return type should be a book
    const bookRepository = connection.getRepository(Book);
    const books = bookRepository.find(searchoptions);
    console.log(books);
    return books;
  }
}
