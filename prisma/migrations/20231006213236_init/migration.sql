-- CreateTable
CREATE TABLE `Conseiller` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` CHAR(15) NOT NULL,
    `prenom` CHAR(15) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` CHAR(15) NOT NULL,
    `adresse` CHAR(20) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Conseiller_email_key`(`email`),
    UNIQUE INDEX `Conseiller_telephone_key`(`telephone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Eleve` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` CHAR(15) NOT NULL,
    `prenom` CHAR(15) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` CHAR(15) NOT NULL,
    `age` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Eleve_email_key`(`email`),
    UNIQUE INDEX `Eleve_telephone_key`(`telephone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test_Competence` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `domaine` CHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_test` INTEGER NOT NULL,
    `question1` CHAR(200) NOT NULL,
    `question2` CHAR(200) NOT NULL,
    `question3` CHAR(200) NOT NULL,
    `question4` CHAR(200) NOT NULL,
    `question5` CHAR(200) NOT NULL,
    `question6` CHAR(200) NOT NULL,
    `question7` CHAR(200) NOT NULL,
    `question8` CHAR(200) NOT NULL,
    `question9` CHAR(200) NOT NULL,
    `question10` CHAR(200) NOT NULL,

    UNIQUE INDEX `Question_id_test_key`(`id_test`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reponse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_question` INTEGER NOT NULL,
    `reponse1` CHAR(200) NOT NULL,
    `reponse2` CHAR(200) NOT NULL,
    `reponse3` CHAR(200) NOT NULL,
    `reponse4` CHAR(200) NOT NULL,
    `reponse5` CHAR(200) NOT NULL,
    `reponse6` CHAR(200) NOT NULL,
    `reponse7` CHAR(200) NOT NULL,
    `reponse8` CHAR(200) NOT NULL,
    `reponse9` CHAR(200) NOT NULL,
    `reponse10` CHAR(200) NOT NULL,

    UNIQUE INDEX `Reponse_id_question_key`(`id_question`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resultat_test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `domaine` CHAR(20) NOT NULL,
    `resultat` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Info_domaine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` CHAR(20) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `debouche` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Info_ecole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` CHAR(15) NOT NULL,
    `adresse` CHAR(15) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `filiere` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Questionnaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serie_bac` CHAR(10) NOT NULL,
    `mention` CHAR(10) NOT NULL,
    `nom_mat_meilleur` CHAR(15) NOT NULL,
    `note_mat_meilleur` INTEGER NOT NULL,
    `nom_mat_mauvaise` CHAR(15) NOT NULL,
    `note_mat_mauvaise` INTEGER NOT NULL,
    `passion` VARCHAR(191) NOT NULL,
    `carriere_futur` VARCHAR(191) NOT NULL,
    `objectif_vie` VARCHAR(191) NOT NULL,
    `hobby` VARCHAR(191) NOT NULL,
    `domaine_interesse` VARCHAR(191) NOT NULL,
    `soutien` VARCHAR(191) NOT NULL,
    `infos_sup` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_id_test_fkey` FOREIGN KEY (`id_test`) REFERENCES `Test_Competence`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reponse` ADD CONSTRAINT `Reponse_id_question_fkey` FOREIGN KEY (`id_question`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
