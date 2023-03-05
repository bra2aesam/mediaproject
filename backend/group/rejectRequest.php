
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
$group_id = $sendRequest->group_id;
$user_id = $sendRequest->user_id;
// print_r(json_encode($sendRequest));
if($group_id && $user_id){
    $stmt = $conn->prepare("UPDATE `group_member` SET `user_status`='3' WHERE group_id = $group_id AND user_id = $user_id;");
    
    if($stmt->execute()){
        echo "you are a group member";
    }else{
        echo "something wen't wrong";
    }
}

