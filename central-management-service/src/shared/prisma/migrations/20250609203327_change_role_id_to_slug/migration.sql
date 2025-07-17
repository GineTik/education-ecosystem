/*
  Warnings:

  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - Added the required column `roleSlug` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "_PermissionToRole" DROP CONSTRAINT "_PermissionToRole_B_fkey";

-- DropIndex
DROP INDEX "Role_slug_key";

-- Step 1: Add the roleSlug column as nullable first
ALTER TABLE "User" ADD COLUMN "roleSlug" TEXT;

-- Step 2: Add refreshToken column
ALTER TABLE "User" ADD COLUMN "refreshToken" TEXT;

-- Step 3: Populate roleSlug by mapping from existing roleId to role slug
UPDATE "User" 
SET "roleSlug" = (
    SELECT "Role"."slug" 
    FROM "Role" 
    WHERE "Role"."id" = "User"."roleId"
)
WHERE "roleId" IS NOT NULL;

-- Step 4: Make roleSlug required after populating data
ALTER TABLE "User" ALTER COLUMN "roleSlug" SET NOT NULL;

-- Step 5: Now drop the old roleId column
ALTER TABLE "User" DROP COLUMN "roleId";

-- Step 6: Modify the Role table structure
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("slug");

-- Step 7: Add the new foreign key constraints
ALTER TABLE "User" ADD CONSTRAINT "User_roleSlug_fkey" FOREIGN KEY ("roleSlug") REFERENCES "Role"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "_PermissionToRole" ADD CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
