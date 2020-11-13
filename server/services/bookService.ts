import { Repository } from "typeorm";
import { inject, injectable } from "inversify";
import { Book } from "../entities/book.entity";
import { BookInterface } from "./../repository/book-repo.interface";
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
export class BookService implements BookInterface {
  private readonly _bookRepository: Repository<Book>;
  public constructor(
    @inject(TYPE.BookRepository) bookRepository: Repository<Book>
  ) {
    this._bookRepository = bookRepository;
  }
  public async getBooks(): Promise<Book[]> {
    return await this._bookRepository.find();
  }
}
