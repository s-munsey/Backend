-- DropIndex
DROP INDEX "BookShelf_userId_idx";

-- CreateIndex
CREATE INDEX "BookShelf_userId_bookId_idx" ON "BookShelf"("userId", "bookId");
