<?php
    include('../connectDB.php');
    try{
        if(
            isset($_POST["id"]) &&
            isset($_POST["title"]) &&
            isset($_POST["description"])
            ){
                $id = $_POST["id"];
                $title = addslashes($_POST["title"]);
                $description = addslashes($_POST["description"]);
                
                $query = "UPDATE notes SET title = '$title', description = '$description' WHERE s_no = $id";
                $connection->query($query);
            }
            header('location: http://localhost/final project/frontend');
    }
    catch(PDOException $e){
        echo "Error: ", $e->getMessage();
    }
    finally{
        $connection = null;
    }
?>