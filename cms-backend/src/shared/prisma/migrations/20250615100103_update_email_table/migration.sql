-- AlterTable
ALTER TABLE "Account" RENAME CONSTRAINT "Email_pkey" TO "Account_pkey";

-- RenameForeignKey
ALTER TABLE "Account" RENAME CONSTRAINT "Email_userId_fkey" TO "Account_userId_fkey";

-- RenameIndex
ALTER INDEX "Email_email_key" RENAME TO "Account_email_key";
