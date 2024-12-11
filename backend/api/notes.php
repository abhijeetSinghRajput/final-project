<?php
    // database configurations
    include '../connectDB.php';

    try{
        // fetching data
        $sql = $connection->query("SELECT * FROM notes");
        $data = $sql->fetchAll(PDO::FETCH_ASSOC);
        if(empty($data)){
            $data = [];
        }

        // notes api
        header('Content-type: application/json');
        echo json_encode($data);
    }
    catch(PDOException $e){
        header('Content-type: application/json');
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
    finally{
        $connection = null;
    }
?>