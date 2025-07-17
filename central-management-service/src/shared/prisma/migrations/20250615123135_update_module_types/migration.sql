/*
  Warnings:

  - You are about to drop the column `typeId` on the `InstitutionInstanceModule` table. All the data in the column will be lost.
  - The primary key for the `InstitutionInstanceModuleType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `InstitutionInstanceModuleType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[instanceId,typeSlug]` on the table `InstitutionInstanceModule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeSlug` to the `InstitutionInstanceModule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InstitutionInstanceModule" DROP CONSTRAINT "InstitutionInstanceModule_typeId_fkey";

-- DropIndex
DROP INDEX "InstitutionInstanceModule_instanceId_typeId_key";

-- DropIndex
DROP INDEX "InstitutionInstanceModuleType_slug_key";

-- AlterTable
ALTER TABLE "InstitutionInstanceModule" DROP COLUMN "typeId",
ADD COLUMN     "typeSlug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InstitutionInstanceModuleType" DROP CONSTRAINT "InstitutionInstanceModuleType_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "InstitutionInstanceModuleType_pkey" PRIMARY KEY ("slug");

-- CreateIndex
CREATE UNIQUE INDEX "InstitutionInstanceModule_instanceId_typeSlug_key" ON "InstitutionInstanceModule"("instanceId", "typeSlug");

-- AddForeignKey
ALTER TABLE "InstitutionInstanceModule" ADD CONSTRAINT "InstitutionInstanceModule_typeSlug_fkey" FOREIGN KEY ("typeSlug") REFERENCES "InstitutionInstanceModuleType"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
