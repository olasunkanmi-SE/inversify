import { IBook } from "./book-repo.interface";
import { TYPE } from "./../constants/types";
import { IBookRepository } from "./book-repo.interface";
import { createConnection, Repository, getConnection } from "typeorm";
import { Book } from "../entities/book.entity";
import { inject, injectable } from "inversify";

/**
 * BookRepository class *
 * @param bookRpo
 */

@injectable()
export class BookRepository implements IBookRepository {
  bookRepo = new Repository<Book>();

  /**
   * Search Book repository with filter *
   * @param searchoptions
   * @type Book[]
   */

  async getBooks(searchoptions?: IBook): Promise<Book[]> {
    searchoptions = { author: "Chinua Achebe" };
    let books: any;
    await createConnection().then((connection) => {
      books = connection.manager.find(Book, searchoptions).then((allbooks) => allbooks.sort());
    });
    return books;
  }

  /**
   * Create a new resource in the database *
   * @param book
   * @type Book
   */

  async createBook(book: Book): Promise<Book> {
    let newBook: any;
    await createConnection().then((connection) => {
      newBook = connection.manager.save(book);
    });
    return newBook;
  }
}

// import { TYPE } from "./../constants/types";
// import { IBookRepository } from "./book-repo.interface";
// import { Repository } from "typeorm";
// import { Book } from "../entities/book.entity";
// import { inject, injectable } from "inversify";

// export class BookRepository implements IBookRepository {
//   bookRepo = new Repository<Book>();
//   async getBooks(searchoptions?: any): Promise<Book[]> {
//     const bookRepository = this.bookRepo;
//     const books = await bookRepository.find(searchoptions);
//     return books;
//   }

//   async createBook(book: Book): Promise<Book> {
//     return await this.bookRepo.save(book);
//   }
// }
// ts-node node_modules/.bin/typeorm migration:generate -n v1
