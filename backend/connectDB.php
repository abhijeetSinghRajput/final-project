<?php
    $username = "root";
    $password = "";
    $dbName = "mysql:host=localhost;dbname=final_project_db";

    //CONNECTING TO DB AND FETCHING DATA
    $connection = new PDO($dbName, $username, $password);
?>