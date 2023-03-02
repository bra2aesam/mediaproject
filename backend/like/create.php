
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
// "SELECT id, user_id, post_id, status FROM likes WHERE user_id = 1 AND post_id = $post_id;"
$stmt = $conn->prepare("SELECT id, user_id, post_id, status FROM likes WHERE user_id = $user_id AND post_id = $post_id;");
$stmt->execute();
$record = $stmt->fetch(PDO::FETCH_ASSOC);
    if($record){
        $stmt = $conn->prepare("UPDATE likes SET status = 1 WHERE post_id = $post_id AND user_id = $user_id");  
        $stmt->execute();
            echo "you dislike this post";
    }else{
        $stmt = $conn->prepare("INSERT INTO likes SET post_id = $post_id, user_id = $user_id, status = 1");
        $stmt->execute();
            echo "you liked this post";
    }
