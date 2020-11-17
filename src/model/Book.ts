import { IBook } from "./../domain/book/bookproperties";

export class Book implements IBook {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public description: string,
    public genre: string,
    public year: number
  ) {}
}
