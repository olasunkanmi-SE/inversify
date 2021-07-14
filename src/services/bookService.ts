/* eslint linebreak-style: ["error", "unix"] */
/* eslint no-param-reassign: "error" */
import { inject, injectable } from "inversify";
import { TYPE } from "../constants/types";
import { Book } from "../entities/book.entity";
import { IBookRepository } from "../repository/book-repo.interface";

@injectable()
// eslint-disable-next-line padded-blocks
export class BookService {
  private _bookRepository: IBookRepository;

  public constructor(
    @inject(TYPE.BookRepository) bookRepository: IBookRepository
  ) {
    this._bookRepository = bookRepository;
  }

  /**
   * call the bookrepository's getbooks method to retrieve books *
   * @type Book[]
   */

  async getBooks(searchoptions?: any): Promise<Book[]> {
    const books = await this._bookRepository.getBooks(searchoptions);
    return books;
  }

  /**
   * call the bookrepository's createBook method to create a new book*
   * @param book
   * @type Book
   */

  async createBook(book: Book): Promise<Book> {
    const newBook = await this._bookRepository.createBook(book);
    return newBook;
  }
}
