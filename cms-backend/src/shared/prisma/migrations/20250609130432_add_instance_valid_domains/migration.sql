/*
  Warnings:

  - The primary key for the `Email` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Email` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Email" DROP CONSTRAINT "Email_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Email_pkey" PRIMARY KEY ("email");

-- AlterTable
ALTER TABLE "InstitutionInstance" ADD COLUMN     "validMailDomains" TEXT[];
