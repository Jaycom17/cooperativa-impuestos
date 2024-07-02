-- CreateTable
CREATE TABLE `formactivosfijos` (
    `actID` VARCHAR(255) NOT NULL,
    `actContent` JSON NOT NULL,

    PRIMARY KEY (`actID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formcaratula` (
    `carID` VARCHAR(255) NOT NULL,
    `carContent` JSON NOT NULL,

    PRIMARY KEY (`carID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formdetallerenglones` (
    `detID` VARCHAR(255) NOT NULL,
    `detContent` JSON NOT NULL,

    PRIMARY KEY (`detID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formesfpatrimonio` (
    `esfID` VARCHAR(255) NOT NULL,
    `esfContent` JSON NOT NULL,

    PRIMARY KEY (`esfID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formimpuestodiferido` (
    `impID` VARCHAR(255) NOT NULL,
    `impContent` JSON NOT NULL,

    PRIMARY KEY (`impID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formingresosfancturacion` (
    `ingID` VARCHAR(255) NOT NULL,
    `ingContent` JSON NOT NULL,

    PRIMARY KEY (`ingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formr110` (
    `r110ID` VARCHAR(255) NOT NULL,
    `r110Content` JSON NOT NULL,

    PRIMARY KEY (`r110ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formrentaliquida` (
    `renID` VARCHAR(255) NOT NULL,
    `renContent` JSON NOT NULL,

    PRIMARY KEY (`renID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formresumenesferi` (
    `resID` VARCHAR(255) NOT NULL,
    `resContent` JSON NOT NULL,

    PRIMARY KEY (`resID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report` (
    `repID` VARCHAR(255) NOT NULL,
    `stuID` VARCHAR(255) NOT NULL,
    `roomID` VARCHAR(255) NOT NULL,
    `carID` VARCHAR(255) NOT NULL,
    `detID` VARCHAR(255) NOT NULL,
    `esfID` VARCHAR(255) NOT NULL,
    `renID` VARCHAR(255) NOT NULL,
    `impID` VARCHAR(255) NOT NULL,
    `ingID` VARCHAR(255) NOT NULL,
    `actID` VARCHAR(255) NOT NULL,
    `resID` VARCHAR(255) NOT NULL,
    `r110ID` VARCHAR(255) NOT NULL,

    INDEX `report_actID_fkey`(`actID`),
    INDEX `report_carID_fkey`(`carID`),
    INDEX `report_detID_fkey`(`detID`),
    INDEX `report_esfID_fkey`(`esfID`),
    INDEX `report_impID_fkey`(`impID`),
    INDEX `report_ingID_fkey`(`ingID`),
    INDEX `report_r110ID_fkey`(`r110ID`),
    INDEX `report_renID_fkey`(`renID`),
    INDEX `report_resID_fkey`(`resID`),
    INDEX `report_roomID_fkey`(`roomID`),
    INDEX `report_stuID_fkey`(`stuID`),
    PRIMARY KEY (`repID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room` (
    `roomID` VARCHAR(255) NOT NULL,
    `roomName` VARCHAR(255) NOT NULL,
    `roomPassword` VARCHAR(255) NOT NULL,
    `roomDate` DATE NOT NULL,
    `roomStatus` ENUM('open', 'closed') NOT NULL,
    `roomAnswer` JSON NOT NULL,
    `usuID` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `room_roomPassword_key`(`roomPassword`),
    INDEX `room_usuID_fkey`(`usuID`),
    PRIMARY KEY (`roomID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `stuID` VARCHAR(255) NOT NULL,
    `stuName` VARCHAR(128) NOT NULL,
    `roomID` VARCHAR(191) NOT NULL,

    INDEX `student_roomID_fkey`(`roomID`),
    PRIMARY KEY (`stuID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `usuID` VARCHAR(255) NOT NULL,
    `usuName` VARCHAR(128) NOT NULL,
    `usuEmail` VARCHAR(128) NOT NULL,
    `usuPassword` VARCHAR(255) NOT NULL,
    `usuRole` ENUM('admin', 'profesor') NOT NULL,

    UNIQUE INDEX `user_usuEmail_key`(`usuEmail`),
    PRIMARY KEY (`usuID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_actID_fkey` FOREIGN KEY (`actID`) REFERENCES `formactivosfijos`(`actID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_carID_fkey` FOREIGN KEY (`carID`) REFERENCES `formcaratula`(`carID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_detID_fkey` FOREIGN KEY (`detID`) REFERENCES `formdetallerenglones`(`detID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_esfID_fkey` FOREIGN KEY (`esfID`) REFERENCES `formesfpatrimonio`(`esfID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_impID_fkey` FOREIGN KEY (`impID`) REFERENCES `formimpuestodiferido`(`impID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_ingID_fkey` FOREIGN KEY (`ingID`) REFERENCES `formingresosfancturacion`(`ingID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_r110ID_fkey` FOREIGN KEY (`r110ID`) REFERENCES `formr110`(`r110ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_renID_fkey` FOREIGN KEY (`renID`) REFERENCES `formrentaliquida`(`renID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_resID_fkey` FOREIGN KEY (`resID`) REFERENCES `formresumenesferi`(`resID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_roomID_fkey` FOREIGN KEY (`roomID`) REFERENCES `room`(`roomID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `report` ADD CONSTRAINT `report_stuID_fkey` FOREIGN KEY (`stuID`) REFERENCES `student`(`stuID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `room` ADD CONSTRAINT `room_usuID_fkey` FOREIGN KEY (`usuID`) REFERENCES `user`(`usuID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_roomID_fkey` FOREIGN KEY (`roomID`) REFERENCES `room`(`roomID`) ON DELETE RESTRICT ON UPDATE CASCADE;
