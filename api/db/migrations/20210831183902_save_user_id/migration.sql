/*
  Warnings:

  - The primary key for the `SavedDrug` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `SavedDrug` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userId` to the `SavedDrug` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SavedDrug" DROP CONSTRAINT "SavedDrug_pkey",
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");
