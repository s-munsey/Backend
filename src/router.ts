import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();

/**
 * Book // may move get all outside as it doesn't need auth
 */
router.get("/books", (req: Request, res: Response) => {
  res.json({ message: "book" });
});

router.get("/books/:id", (req: Request, res: Response) => {});

router.post("/books", body("title"), (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});

router.put("/books/:id", body("title"), (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});

router.delete("/books/:id", (req: Request, res: Response) => {});

export default router;
