<?php
    include '../connectDB.php';

    if (isset($_POST["id"])) {
        $id = $_POST["id"];
        $connection->query("DELETE FROM notes WHERE s_no = $id");
        echo json_encode(["status" => "success", "id" => $id]);
    } else {
        echo json_encode(["status" => "error", "message" => "ID not set"]);
    }

    $connection = null;
?>
