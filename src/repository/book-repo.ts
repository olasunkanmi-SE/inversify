import { IBook } from "./book-repo.interface";
import { IBookRepository } from "./book-repo.interface";
import { getConnection, Repository } from "typeorm";
import { Book } from "../entities/book.entity";
import { injectable } from "inversify";

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

  async getBooks(searchoptions?: IBook): Promise<Book[]> {
    searchoptions = { author: "Chinua Achebe" };
    const books = await this.getBookRepository().then((bookRepository) => bookRepository.find(searchoptions));
    return books;
  }

  /**
   * Create a new resource in the database *
   * @param book
   * @type Book
   */

  async createBook(book: Book): Promise<Book> {
    let newBook = await this.getBookRepository().then((bookRepository) => bookRepository.save(book));
    return newBook;
  }
}
