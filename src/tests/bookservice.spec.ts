import "reflect-metadata";
import { IBookRepository } from "../repository/book-repo.interface";
import { Book } from "../model/Book";
import { BookService } from "../services/BookService";
describe("BookService test", () => {
  //Mock Books
  let bookService: BookService;
  let mockBookRepo: Book[] = new Array(
    new Book(1, "Ralia the sugar girl", "Chinua Achebe", "decription", "folklure", 2000),
    new Book(2, "there was a country", "Wole Soyinka", "another description", "history", 1950)
  );

  //Test to get list of books
  it("should return list of books", async () => {
    const Mock = jest.fn<IBookRepository, Book[]>(
      () =>
        <any>{
          getBooks: jest.fn().mockReturnValue(mockBookRepo),
        }
    );
    const mock = new Mock();
    bookService = new BookService(mock);
    let result = bookService.getBooks();
    expect(mock.getBooks).toHaveBeenCalled();
    expect((await result).length).toBe(2);
    //negative test
    // expect(await result).toBe(3);
  });

  //Test to create a new book`

  it("should add Book", async () => {
    const Mock = jest.fn<IBookRepository, Book[]>(
      () =>
        <any>{
          createBook: jest.fn().mockImplementation((book: Book) => {
            return mockBookRepo.push(book);
          }),
        }
    );
    const mock = new Mock();
    bookService = new BookService(mock);
    let result = bookService.createBook(new Book(3, "tales by the moonlight", "Raymond", "description", "tales", 1997));
    expect(mock.createBook).toHaveBeenCalled();
    expect(await result).toBe(3);
    //negative test
    // expect(await result).toBe(4);
  });
});
