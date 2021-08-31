/*
  Warnings:

  - You are about to drop the `SavedDrugs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavedDrugs" DROP CONSTRAINT "SavedDrugs_drugId_fkey";

-- DropTable
DROP TABLE "SavedDrugs";

-- CreateTable
CREATE TABLE "SavedDrug" (
    "id" TEXT NOT NULL,
    "drugId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavedDrug" ADD FOREIGN KEY ("drugId") REFERENCES "Drug"("id") ON DELETE CASCADE ON UPDATE CASCADE;
