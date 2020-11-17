import { IBookRepository } from "../repository/book-repo.interface";
import { inject, injectable } from "inversify";
import { Book } from "../entities/book.entity";
import { TYPE } from "../constants/types";

@injectable()
export class BookService implements IBookRepository {
  public constructor(
    @inject(TYPE.BookRepository)
    private readonly bookRepository: IBookRepository
  ) {}

  /**
   * call the bookrepository's getbooks method to retrieve books *
   * @type Book[]
   */

  async getBooks(): Promise<Book[]> {
    const books = await this.bookRepository.getBooks();
    return books;
  }

  /**
   * call the bookrepository's createBook method to create a new book*
   * @param book
   * @type Book
   */

  async createBook(book: Book): Promise<Book> {
    const newBook = await this.bookRepository.createBook(book);
    return newBook;
  }
}
