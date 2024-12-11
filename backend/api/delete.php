<?php
    include '../connectDB.php';


    try{
        if (isset($_POST["id"])) {
            $id = $_POST["id"];
            $connection->query("DELETE FROM notes WHERE s_no = $id");
            echo json_encode(["status" => "success", "id" => $id]);
        } else {
            echo json_encode(["status" => "error", "message" => "ID not set"]);
        }
    }
    catch(PDOException $e){
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
    finally{
        $connection = null;
    }
?>
