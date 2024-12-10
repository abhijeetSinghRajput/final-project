<?php

    //CONNECTION TO DATABASE
    include './connectDB.php';

    if (isset($_POST["title"]) && isset($_POST["description"])) {
        $title =  $_POST["title"];
        $description =  $_POST["description"];

        // insert into the table
        $query = "INSERT INTO notes (title, description) VALUES ('$title', '$description')";
        $connection->query($query);
    }

    //redirection to the frontend
    header('location: http://localhost/final%20project/');
    
    //close the connection
    $connection = null;
?>