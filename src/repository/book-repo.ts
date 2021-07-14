/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable lines-between-class-members */
/* eslint linebreak-style: ["error", "unix"] */
/* eslint no-param-reassign: "error" */

import { injectable } from "inversify";
import { getConnection } from "typeorm";
import { IBookRepository } from "./book-repo.interface";
import { Book } from "../entities/book.entity";

@injectable()
export class BookRepository implements IBookRepository {
  /**
   * Create the connection to fetch books*
   * @type Repository<Book>
   *
   */
  bookRepository: any;
  private async getBookRepository() {
    this.bookRepository = await getConnection().getRepository(Book);
    return this.bookRepository;
  }

  /**
   * Search Book repository with filter *
   * @param searchoptions
   * @type Book[]
   */

  async getBooks(searchoptions?: any): Promise<Book[]> {
    const books = await this.getBookRepository().then((bookRepository) =>
      bookRepository.find(searchoptions)
    );
    return books;
  }

  /**
   * Create a new resource in the database *
   * @param book
   * @type Book
   */

  async createBook(book: Book): Promise<Book> {
    const newBook = await this.getBookRepository().then((bookRepository) =>
      bookRepository.save(book)
    );
    return newBook;
  }
}
