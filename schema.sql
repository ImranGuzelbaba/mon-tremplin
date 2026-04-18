-- Script de création de la base de données
-- A exécuter dans votre interface MySQL (PhpMyAdmin ou autre)

CREATE DATABASE IF NOT EXISTS tremplin_db;
USE tremplin_db;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    civilite VARCHAR(3),
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    telephone VARCHAR(20),
    message_type VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
