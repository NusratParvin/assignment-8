-- AlterTable
ALTER TABLE "books" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
