import { Router } from "express";

const router = Router();

/**
 * Book // may move get all outside as it doesn't need auth
 */
router.get("/books", (req, res) => {
  res.json({ message: "book" });
});

router.get("/books/:id", (req, res) => {});

router.post("/books", (req, res) => {});

router.put("/books/:id", (req, res) => {});

router.delete("/books/:id", (req, res) => {});

export default router;
