import { check } from "express-validator";

//Validate user input to create a new book
export const validateBookRequest = [
  check("title", "Book title must be at least 5 characters long")
    .isLength({
      min: 5,
    })
    .trim(),
  check("author", "Book author must be at least 5 characters long")
    .isLength({
      min: 5,
    })
    .trim(),
  check("genre", "Book genre must be at least 5 characters long")
    .isLength({
      min: 5,
    })
    .trim(),
  check("description", "Book description must be at least 5 characters long")
    .isLength({
      min: 5,
    })
    .trim(),
  check("year", "Book year must be a number").isInt(),
];
