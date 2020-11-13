import { BookService } from "./../services/bookService";
import * as express from "express";
import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  response,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import { Repository } from "typeorm";
import { TYPE } from "../constants/types";
import { Book } from "../entities/book.entity";

@controller("/api/books")
export class BookController {
  public constructor(
    @inject(TYPE.BookInterface) public bookService: BookService
  ) {}
  @httpGet("/")
  public async getBooks(@response() res: express.Response): Promise<Book[]> {
    let books = this.bookService.getBooks();
    if (!books) {
      res.status(404).json({ error: "books not found" });
    }
    return books;
  }
}
