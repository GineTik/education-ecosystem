/*
  Warnings:

  - You are about to drop the column `institutionSlug` on the `InstitutionInstance` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "InstitutionInstance_institutionSlug_key";

-- AlterTable
ALTER TABLE "InstitutionInstance" DROP COLUMN "institutionSlug";
