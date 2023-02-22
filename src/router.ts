import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Get all books on user's bookshelf
 */
router.get("/books", (req: Request, res: Response) => {
  res.json({ message: "book" });
});

/**
 * Get a specific book from a user's bookshelf
 */
router.get("/books/:id", (req: Request, res: Response) => {});

/**
 * add a book/books to a user's bookshelf
 */
router.post(
  "/books",
  body("title").isAlphanumeric(),
  body("author").isString(),
  handleInputErrors,
  (req: Request, res: Response) => {}
);

/**
 * Update a book on a user's bookshelf (ie set to 'finished')
 */
router.put(
  "/books/:id",
  body("title").isAlphanumeric(),
  body("author").isString(),
  body("readingStatus").isIn(["TO_READ", "READING", "FINISHED"]),
  handleInputErrors,
  (req: Request, res: Response) => {}
);

/**
 * Remove from a user's bookshelf
 */
router.delete("/books/:id", (req: Request, res: Response) => {});

export default router;
