/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - Added the required column `body` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PostBodyType" AS ENUM ('HTML', 'MD');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "published",
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customOrder" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "keywords" TEXT[],
ADD COLUMN     "publishedAt" TIMESTAMP(3),
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "type" "PostBodyType" NOT NULL DEFAULT 'MD',
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
