<?php 
 header("Access-Control-Allow-Origin:*");
 header("Content-Type: application/json;");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../config.php';
$objDb = new DB;
$conn = $objDb->getConnection();
$user = json_decode( file_get_contents('php://input') );
// print_r(json_encode($user)) ;
// exit;
$user_id = $user->id;
// user 
$sql = "SELECT * FROM users WHERE id = :id";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $user_id);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);
// user posts timeline with out his group posts
$sql = "SELECT posts.body, posts.id, posts.user_id, users.user_name FROM posts INNER JOIN users ON posts.user_id = users.id WHERE user_id = :user_id AND group_id = 0 ORDER BY posts.id DESC";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$timelinePosts = $stmt->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// echo json_encode($timelinePosts);
// echo "</pre>";

$sql = "SELECT * FROM users WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 1 UNION SELECT friends.target_id FROM friends WHERE friends.source_id = :user_id AND friends.status = 1) );";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$friends = $stmt->fetchAll(PDO::FETCH_ASSOC);

// request friends
// how to accept friends
// UPDATE friends SET status='1' WHERE (friends.source_id = 5 AND friends.target_id = 1) OR (friends.source_id = 1 AND friends.target_id = 5);
$sql = "SELECT * FROM users WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 0 UNION SELECT friends.target_id FROM friends WHERE friends.source_id = :user_id AND friends.status = 0) );";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$friendsRequest = $stmt->fetchAll(PDO::FETCH_ASSOC);

$sql = "SELECT group_member.id, group_id, user_id, user_status, group_name, group_img FROM group_member INNER JOIN groups ON groups.id = group_member.group_id WHERE user_id = :user_id;";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$yourGroup = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = ['user'=> $user, 'timelinePosts' => $timelinePosts, 'friends' => $friends, 'friendsRequest' => $friendsRequest, 'yourGroup' => $yourGroup ];
// echo "<pre>";
// print_r($friends);
// echo "</pre>";

echo json_encode($data);
