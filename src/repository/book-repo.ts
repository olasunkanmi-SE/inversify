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
import { TYPE } from "./../constants/types";
import { IBookRepository } from "./book-repo.interface";
import { createConnection, Repository, getConnection } from "typeorm";
import { Book } from "../entities/book.entity";
import { inject, injectable } from "inversify";

@injectable()
export class BookRepository implements IBookRepository {
  bookRepo = new Repository<Book>();
  async getBooks(searchoptions?: any): Promise<Book[]> {
    let books: any;
    await createConnection().then((connection) => {
      books = connection.manager.find(Book);
    });
    return books;
  }

  async createBook(book: Book): Promise<Book> {
    let bok: any;

    await createConnection().then((connection) => {
      bok = connection.manager.save(book);
    });
    return bok;
  }
}
