/*
  Warnings:

  - You are about to drop the column `stuName` on the `student` table. All the data in the column will be lost.
  - Added the required column `stuCedula` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `stuName`,
    ADD COLUMN `stuCedula` VARCHAR(255) NOT NULL;
