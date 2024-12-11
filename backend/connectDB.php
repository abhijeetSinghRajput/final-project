<?php
    $username = "root";
    $password = "";
    $dbName = "mysql:host=localhost";

    try {
        // Connecting to the database server
        $connection = new PDO($dbName, $username, $password);

        // Create database if it doesn't exist
        $connection->exec("CREATE DATABASE IF NOT EXISTS final_project_db");
        $connection->exec("USE final_project_db");

        // Create table if it doesn't exist with charset and collation
        $createTableQuery = "
            CREATE TABLE IF NOT EXISTS notes (
                s_no INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL
            ) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
        ";
        $connection->exec($createTableQuery);
        
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>
