import { BookService } from "./../services/bookService";
export const TYPE = {
  BookRepository: Symbol("BookRepository"),
  BookService: Symbol.for("BookService"),
};
