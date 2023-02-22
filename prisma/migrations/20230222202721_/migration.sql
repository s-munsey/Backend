-- DropIndex
DROP INDEX "BookShelf_id_userId_bookId_idx";

-- CreateIndex
CREATE INDEX "BookShelf_userId_bookId_idx" ON "BookShelf"("userId", "bookId");
