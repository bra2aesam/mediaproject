<?php 
 header("Access-Control-Allow-Origin:*");
 header("Content-Type: application/json;");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../config.php';
$objDb = new DB;
$conn = $objDb->getConnection();
$sendRequest = json_decode( file_get_contents('php://input') );
// extract($sendRequest);
$user_id = $sendRequest->user_id;
$group_id = $sendRequest->group_id;
// print_r(json_encode($sendRequest));
$stmt = $conn->prepare("SELECT * FROM `group_member` WHERE group_member.user_id = $user_id AND group_id = $group_id;");
$stmt->execute();
$yourGroup = $stmt->fetch(PDO::FETCH_ASSOC);
// print_r($yourGroup);
// exit;
if($yourGroup){
    // echo 'hello ';
    $stmt = $conn->prepare("UPDATE `group_member` SET `user_status`='0' WHERE group_id = $group_id AND user_id = $user_id;");
    
    if($stmt->execute()){
        echo "you are a group member";
    }else{
        echo "something wen't wrong";
    }
}else{
    if($user_id && $group_id){
        $stmt = $conn->prepare("INSERT INTO group_member SET user_id = $user_id , group_id = $group_id , user_status = 0");
        if($stmt->execute()){
            echo "request a group member";
        }else{
            echo "something wen't wrong";
        }
    }
    // echo "something wen't wrong";
}
?>