/*
  Warnings:

  - You are about to drop the column `isdefault` on the `accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "isdefault",
ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false;
