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
$source_id = $sendRequest->source_id;
$target_id = $sendRequest->target_id;
// print_r(json_encode($sendRequest));
if($source_id && $target_id){
    $stmt = $conn->prepare("UPDATE friends SET status = 3 WHERE source_id = $source_id AND target_id = $target_id");
    
    if($stmt->execute()){
        echo "request canceled";
    }else{
        echo "something wen't wrong";
    }
}

