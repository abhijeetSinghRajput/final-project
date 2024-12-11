<?php

    //CONNECTION TO DATABASE
    include './connectDB.php';

    try{
        if (isset($_POST["title"]) && isset($_POST["description"])) {
            $title =  addslashes($_POST["title"]);
            $description =  addslashes($_POST["description"]);
            
            // insert into the table
            $query = "INSERT INTO notes (title, description) VALUES ('$title', '$description')";
            $connection->query($query);
        }
        
        //redirection to the frontend
        header('location: http://localhost/final-project/frontend');
    }
    catch(PDOException $e){
        echo "Error: ", $e->getMessage();
    }
    finally{
        //close the connection
        $connection = null;
    }
    
?>