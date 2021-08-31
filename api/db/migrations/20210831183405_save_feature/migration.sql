-- CreateTable
CREATE TABLE "SavedDrugs" (
    "id" TEXT NOT NULL,
    "drugId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavedDrugs" ADD FOREIGN KEY ("drugId") REFERENCES "Drug"("id") ON DELETE CASCADE ON UPDATE CASCADE;
