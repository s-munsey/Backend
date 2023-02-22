/*
  Warnings:

  - You are about to drop the column `finishedDate` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `startedDate` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "finishedDate",
DROP COLUMN "startedDate";

-- AlterTable
ALTER TABLE "BookShelf" ADD COLUMN     "finishedDate" TIMESTAMP(3),
ADD COLUMN     "startedDate" TIMESTAMP(3);
