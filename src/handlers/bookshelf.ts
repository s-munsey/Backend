import { Request, Response } from "express";
import prisma from "../db";

export const getBooks = async (req: Request, res: Response) => {
  const bookshelf = await prisma.bookShelf.findMany({
    where: {
      userId: req.user?.id,
    },
    include: {
      book: true,
    },
  });

  res.json({ data: bookshelf });
};

export const getBookById = async (req: Request, res: Response) => {
  const book = await prisma.bookShelf.findFirst({
    where: {
      userId: req.user?.id,
      bookId: req.body.bookId,
    },
    include: {
      book: true,
    },
  });

  res.json({ data: book });
};

export const addBooks = async (req: Request, res: Response) => {
  const book = await prisma.book.create({
    data: {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      coverUri: req.body.coverUri,
    },
  });

  // update bookshelf
  await prisma.bookShelf.create({
    data: {
      bookId: book.id,
      userId: req.user?.id,
      readingStatus: "TO_READ",
      startedDate: req.body.startedDate,
    },
  });

  res.status(201).json({ data: book });
};

export const updateBookById = async (req: Request, res: Response) => {
  const bookshelf = await prisma.bookShelf.findFirst({
    where: {
      bookId: req.params.id,
      userId: req.user?.id,
    },
  });

  if (!bookshelf) {
    return res.status(404);
  }

  const updated = await prisma.bookShelf.update({
    where: {
      id: bookshelf.id,
    },
    data: {
      bookId: req.body.bookId,
      readingStatus: req.body.readingStatus,
      startedDate: req.body.startedDate,
      finishedDate: req.body.finishedDate,
    },
  });

  res.status(204).json({ data: updated });
};

export const deleteBookById = async (req: Request, res: Response) => {
  const bookshelf = await prisma.bookShelf.findFirst({
    where: {
      bookId: req.params.id,
      userId: req.user?.id,
    },
  });

  const updated = await prisma.bookShelf.delete({
    where: {
      id: bookshelf?.id,
    },
  });

  res.status(204).json({ data: updated });
};
