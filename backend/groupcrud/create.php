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
        // echo json_encode("Group created.");
        $stmt = $db->prepare('SELECT * FROM groups ORDER BY id DESC LIMIT 1;');
        $stmt->execute();
        $group= $stmt->fetch(PDO::FETCH_ASSOC);
        $group_id= $group['id'];
        $user_id = $_POST['user_id'];
        $stmt = $db->prepare("INSERT INTO group_member SET user_id = $user_id , group_id = $group_id , user_status = 2");
        if($stmt->execute()){
            echo "you are a group member";
        }else{
            echo "something wen't wrong";
        }
    } else{
        echo json_encode("Failed to create Group.");
    }
?>