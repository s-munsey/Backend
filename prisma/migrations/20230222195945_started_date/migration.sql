/*
  Warnings:

  - Made the column `startedDate` on table `BookShelf` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BookShelf" ALTER COLUMN "startedDate" SET NOT NULL,
ALTER COLUMN "startedDate" SET DEFAULT CURRENT_TIMESTAMP;
