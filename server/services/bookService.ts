import { IBookRepository } from "./../repository/book-repo.interface";
import { Repository } from "typeorm";
import { inject, injectable } from "inversify";
import { Book } from "../entities/book.entity";
import { TYPE } from "./../constants/types";
import {
  controller,
  httpGet,
  httpPost,
  response,
  requestParam,
  requestBody,
} from "inversify-express-utils";

@injectable()
export class BookService implements IBookRepository {
  public constructor(
    @inject(TYPE.BookRepository) private bookRepository: Repository<Book>
  ) {}
  public async getBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }
}
