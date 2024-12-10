<?php
    // database configurations
    include '../connectDB.php';

    // fetching data
    $sql = $connection->query("SELECT * FROM notes");
    $data = $sql->fetchAll(PDO::FETCH_ASSOC);
    if(empty($data)){
        $data = [];
    }

    // notes api
    header('Content-type: application/json');
    echo json_encode($data);
?>