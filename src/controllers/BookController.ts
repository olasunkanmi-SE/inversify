import { TYPE } from "./../constants/types";
import { BookService } from "./../services/bookService";
import * as express from "express";
import { controller, httpGet, httpPost, response, request, requestParam, requestBody } from "inversify-express-utils";
import { Book } from "../entities/book.entity";
import { inject } from "inversify";
import { validationResult } from "express-validator";
import { validateBookRequest } from "../middleware/books.validation";

/**
 * make API calls with this function *
 * @param method
 * @param api
 * @param payLoad
 */

@controller("/api/books")
export class BookController {
  private constructor(
    @inject(TYPE.BookService)
    private bookService: BookService
  ) {}

  /**
   * make API calls with this function *
   * @param method
   * @param api
   * @param payLoad
   */

  @httpGet("/")
  async getBooks(@response() res: express.Response) {
    try {
      return await this.bookService.getBooks();
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  /**
   * make API calls with this function *
   * @param method
   * @param api
   * @param payLoad
   */

  @httpPost("/create", ...validateBookRequest)
  async createBook(@request() req: express.Request, @response() res: express.Response) {
    try {
      const errors: any = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send(errors);
      }
      let newBook = await new Book();
      newBook.title = req.body.title;
      newBook.author = req.body.author;
      newBook.genre = req.body.genre;
      newBook.description = req.body.description;
      newBook.year = req.body.year;
      return await this.bookService.createBook(newBook);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
}
