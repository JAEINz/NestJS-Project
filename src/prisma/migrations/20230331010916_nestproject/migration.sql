/*
  Warnings:

  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `content` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropIndex
DROP INDEX "Post_userId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "userId",
ALTER COLUMN "content" SET NOT NULL;

-- DropTable
DROP TABLE "User";
