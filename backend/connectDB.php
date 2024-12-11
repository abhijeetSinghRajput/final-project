<?php
    $username = "root";
    $password = "";
    $dbName = "mysql:host=localhost;dbname=final_project_db";

    try{
        //CONNECTING TO DB AND FETCHING DATA
        $connection = new PDO($dbName, $username, $password);
    }
    catch(PDOException $e){
        echo "Connection failed: ", $e->getMessage();
    }
?>