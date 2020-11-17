import { Book } from "../model/Book";
import validator from "validator";
import { isEmpty } from "./isempty";

export const validateBook = (data: Book) => {
  let errors: any = {};

  if (data.title) {
    data.title = !isEmpty(data.title) ? data.title : (errors.title = "Title is required");
    if (!validator.isLength(data.title, { min: 5, max: 50 })) {
      errors.name = "Name should be mimimum 5 characters";
    }
  }

  if (data.author) {
    data.author = !isEmpty(data.author) ? data.author : (errors.author = "author is required");
    if (!validator.isLength(data.author, { min: 5, max: 50 })) {
      errors.author = "Author should be mimimum 5 characters";
    }
  }

  if (data.description) {
    data.description = !isEmpty(data.description) ? data.description : (errors.description = "description is required");
    if (!validator.isLength(data.description, { min: 5, max: 256 })) {
      errors.description = "description should be mimimum 5 characters";
    }
  }

  if (data.genre) {
    data.genre = !isEmpty(data.genre) ? data.genre : (errors.genre = "genre is required");
    if (!validator.isLength(data.genre, { min: 5, max: 50 })) {
      errors.genre = "Name should be mimimum 5 characters";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
