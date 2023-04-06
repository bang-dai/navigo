<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230406130356 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE forfait (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, price_by_month DOUBLE PRECISION NOT NULL, price_by_year DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE payer (id INT AUTO_INCREMENT NOT NULL, is_man TINYINT(1) NOT NULL, name VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, birthday DATE NOT NULL, phone VARCHAR(30) DEFAULT NULL, mobile VARCHAR(30) NOT NULL, address VARCHAR(255) NOT NULL, address1 VARCHAR(255) DEFAULT NULL, zipcode VARCHAR(20) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE payment (id INT AUTO_INCREMENT NOT NULL, payer_id INT DEFAULT NULL, bic VARCHAR(255) NOT NULL, iban VARCHAR(255) NOT NULL, INDEX IDX_6D28840DC17AD9A9 (payer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, payment_id INT NOT NULL, forfait_id INT NOT NULL, is_man TINYINT(1) NOT NULL, name VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, birthday DATE NOT NULL, phone VARCHAR(30) DEFAULT NULL, address VARCHAR(255) NOT NULL, address1 VARCHAR(255) DEFAULT NULL, zipcode VARCHAR(20) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, optin TINYINT(1) NOT NULL, receive_at_home TINYINT(1) NOT NULL, picture VARCHAR(255) NOT NULL, mobile VARCHAR(30) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D6494C3A3BB (payment_id), INDEX IDX_8D93D649906D5F2C (forfait_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE payment ADD CONSTRAINT FK_6D28840DC17AD9A9 FOREIGN KEY (payer_id) REFERENCES payer (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6494C3A3BB FOREIGN KEY (payment_id) REFERENCES payment (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649906D5F2C FOREIGN KEY (forfait_id) REFERENCES forfait (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE payment DROP FOREIGN KEY FK_6D28840DC17AD9A9');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6494C3A3BB');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649906D5F2C');
        $this->addSql('DROP TABLE forfait');
        $this->addSql('DROP TABLE payer');
        $this->addSql('DROP TABLE payment');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
