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
$post_id = $sendRequest->post_id;
$user_id = $sendRequest->user_id;
// print_r(json_encode($sendRequest));
if($post_id && $user_id){
    $stmt = $conn->prepare("UPDATE likes SET status = 0 WHERE post_id = $post_id AND user_id = $user_id");
    
    if($stmt->execute()){
        echo "you dislike this post";
    }else{
        echo "something wen't wrong";
    }
}

