import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import {
  addBooks,
  deleteBookById,
  getBookById,
  getBooks,
  updateBookById,
} from "./handlers/bookshelf";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Get all books on user's bookshelf
 */
router.get("/books", getBooks);

/**
 * Get a specific book from a user's bookshelf
 */
router.get("/books/:id", getBookById);

/**
 * add a book/books to a user's bookshelf
 */
router.post(
  "/books",
  body("title").isString(),
  body("author").isString(),
  handleInputErrors,
  addBooks
);

/**
 * Update a book on a user's bookshelf (ie set to 'finished')
 */
router.put(
  "/books/:id",
  body("title").isString(),
  body("author").isString(),
  body("readingStatus").isIn(["TO_READ", "READING", "FINISHED"]),
  handleInputErrors,
  updateBookById
);

/**
 * Remove from a user's bookshelf
 */
router.delete("/books/:id", deleteBookById);

export default router;
