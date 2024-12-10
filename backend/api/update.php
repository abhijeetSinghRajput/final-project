<?php
    include('../connectDB.php');
    if(isSet($_POST["title"]) && isSet($_POST["description"])){
        $id = $_POST["id"];
        $title = $_POST["title"];
        $description = $_POST["description"];
        $query = "UPDATE notes SET title = $title, description = $description WHERE id = $id";
        $connection->query($query);
    }
    header('location: http://localhost/final project/');
    $connection = null;
?>