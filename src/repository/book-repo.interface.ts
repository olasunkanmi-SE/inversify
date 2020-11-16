import { Book } from "../entities/book.entity";

export interface IBook {
  id?: number;
  title?: string;
  author?: string;
  description?: string;
  genre?: string;
  year?: number;
}

export interface IBookRepository {
  getBooks(searchoptions?: any): Promise<Book[]>;
  createBook(book: Book): Promise<Book>;
}
