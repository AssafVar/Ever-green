/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "photo" TEXT DEFAULT 'default.png',
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "verified" BOOLEAN DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
