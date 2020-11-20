import { BookService } from "./../services/bookService";
export const TYPE = {
  BookRepository: Symbol("BookRepository"),
  BookServiceRepository: Symbol.for("BookServiceRepository"),
};
