
import { IBookRepository } from "./../repository/book-repo.interface";
import { Search, Sort } from "./../model/search";
import { TYPE } from "./../constants/types";
import * as express from "express";
import {
  controller,
  httpGet,
  httpPost,
  response,
  request,
  requestParam,
  requestBody,
  queryParam,
} from "inversify-express-utils";
import { Book } from "../entities/book.entity";
import { inject } from "inversify";
import { validationResult } from "express-validator";
import { validateBookRequest } from "../middleware/books.validation";

@controller("/api/books")
export class BookController {
  private constructor(
    @inject(TYPE.BookRepository)
    private bookService: IBookRepository
  ) {}

  /**
   * create the API endpoint to retieve books *
   * @param res
   */

  @httpGet("/")
  async getBooks(
    @response() res: express.Response,
    @queryParam("sortOrder") sortOrder: Sort,
    @queryParam("author") author: string,
    @queryParam("genre") genre: string,
    @queryParam("title") title: string,
    @queryParam("year") year: number,
    @queryParam("skip") skip: number,
    @queryParam("take") take: number,
    @queryParam("id") id: number
  ) {
    //Create the search Algorithm
    let searchOptions: Search = {
      where: [{ title }, { author }, { genre }, { id }, { year }],
      order: {
        title: sortOrder,
      },
      skip: skip,
      take: take,
    };
    try {
      return await this.bookService.getBooks(searchOptions);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  /**
   * API call to create a book with a book validation middleware*
   * @param req
   * @param res
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
