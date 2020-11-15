import { IBookRepository } from "./book-repo.interface";
import { Repository } from "typeorm";
import { Book } from "../entities/book.entity";
import { injectable } from "inversify";

@injectable()
export class BookRepository implements IBookRepository {
  public getBooks(searchoptions?: any): Promise<Book[]> {
    const repo = new Repository<Book>();
    const books = repo.find(searchoptions);
    console.log(books);
    return books;
  }
}
// ts-node node_modules/.bin/typeorm migration:generate -n v1
