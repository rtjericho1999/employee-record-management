/*
  Warnings:

  - You are about to alter the column `profilePicture` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `employees` MODIFY `profilePicture` VARCHAR(50) NOT NULL;
