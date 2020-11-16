"use strict";
// export const validateBookRequest = (data: any) => {
//   let errors: any = {};
//   if (!(typeof data === "string") || data.length == 0) {
//     return (errors.title = "book title is required");
//   }
//   if (typeof data === "string" && data.length < 2) {
//     return (errors.something = "book title should be more than two characters");
//   }
//   return errors;
//   //   if (typeof req.body.title === "string" && req.body.title.length < 2) {
//   //     return res
//   //       .status(400)
//   //       .send("book title should be more than two characters");
//   //   }
//   //   if (!(typeof req.body.author === "string") || req.body.author.length == 0) {
//   //     return res.status(400).send("book author is required");
//   //   }
//   //   if (typeof req.body.author === "string" && req.body.author.length < 2) {
//   //     return res
//   //       .status(400)
//   //       .send("book author should be more than two characters");
//   //   }
//   //   if (
//   //     !(typeof req.body.description === "string") ||
//   //     req.body.decription.length == 0
//   //   ) {
//   //     return res.status(400).send("book decription is required");
//   //   }
//   //   if (
//   //     typeof req.body.description === "string" &&
//   //     req.body.description.length < 2
//   //   ) {
//   //     return res
//   //       .status(400)
//   //       .send("book description should be more than two characters");
//   //   }
//   //   if (!(typeof req.body.genre === "string") || req.body.genre.length == 0) {
//   //     return res.status(400).send("book genre is required");
//   //   }
//   //   if (typeof req.body.genre === "string" && req.body.genre.length < 2) {
//   //     return res
//   //       .status(400)
//   //       .send("book genre should be more than two characters");
//   //   }
//   //   if (!(typeof req.body.year === "number") || req.body.year.length == 0) {
//   //     return res.status(400).send("book year is required");
//   //   }
//   //   if (typeof req.body.year === "number" && req.body.year.length < 2) {
//   //     return res.status(400).send("book year should be more than two characters");
//   //   }
// };
// import Joi = require("Joi");
// export const validateBook = (book: any) => {
//   const Schema = Joi.object().keys({
//     title: Joi.string().required().min(5).max(256),
//     author: Joi.string().required().min(5).max(256),
//     description: Joi.string().required().min(5).max(256),
//     genre: Joi.string().required().min(5).max(256),
//     year: Joi.string().required().min(5).max(256),
//   });
//   return Schema.validate(book);
// };
