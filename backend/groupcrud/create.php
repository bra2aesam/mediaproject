<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type: application/json;");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './groups.php';

    $database = new DB();
    $db = $database->getConnection();

    $group = new Group($db);
    if(count($_FILES) > 0) {
        if($_FILES["group_img"]){
            $group->group_img=$_FILES["group_img"]["name"];
            move_uploaded_file($_FILES["group_img"]["tmp_name"], "../upload/" . $_FILES["group_img"]["name"]);
        }
       
    }

    $group->group_name=$_POST["group_name"];
  
    

    if($group->createGroup()){
        echo json_encode("Group created.");

    } else{
        echo json_encode("Failed to create Group.");
    }
?>