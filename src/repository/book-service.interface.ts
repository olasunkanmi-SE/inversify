import { Book } from "../entities/book.entity";

export interface BookServiceInterface {
  getBooks(searchoptions?: any): Promise<Book[]>;
  createBook(book: Book): Promise<Book>;
}
