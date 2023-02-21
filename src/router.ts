import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Book // may move get all outside as it doesn't need auth
 */
router.get("/books", (req: Request, res: Response) => {
  res.json({ message: "book" });
});

router.get("/books/:id", (req: Request, res: Response) => {});

router.post(
  "/books",
  body("title").isAlphanumeric(),
  body("author").isString(),
  handleInputErrors,
  (req: Request, res: Response) => {}
);

router.put(
  "/books/:id",
  body("title").isAlphanumeric(),
  body("author").isString(),
  handleInputErrors,
  (req: Request, res: Response) => {}
);

router.delete("/books/:id", (req: Request, res: Response) => {});

export default router;
