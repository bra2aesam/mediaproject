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
// user posts timeline with out his group posts
// $sql = "SELECT posts.id, user_name, user_id, group_id, body FROM posts INNER JOIN users ON posts.user_id = users.id  WHERE user_id = :user_id AND group_id = 0";
$sql = "SELECT posts.id, user_name, posts.user_id, group_id, body, users.profile_img, likes.status FROM posts INNER JOIN users ON posts.user_id = users.id LEFT JOIN likes ON likes.post_id = posts.id WHERE posts.user_id = :user_id AND group_id = 0;";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$timelinePosts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// other user and other group

// $sql = "SELECT posts.id, user_name, user_id, group_id, body, group_name FROM users INNER JOIN posts ON posts.user_id = users.id INNER JOIN groups ON groups.id = posts.group_id WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 1 UNION SELECT friends.target_id FROM friends WHERE friends.source_id = :user_id AND friends.status = 1) ) AND ( posts.group_id NOT IN (SELECT group_id FROM group_member WHERE group_member.user_id = :user_id AND group_member.group_id <> 0) );";

// user posts
// $sql = "SELECT posts.id, user_name, user_id, group_id, body FROM users INNER JOIN posts ON posts.user_id = users.id WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 1 UNION SELECT friends.target_id FROM friends WHERE friends.source_id = :user_id AND friends.status = 1) ) AND posts.group_id = 0;";
$sql = "SELECT posts.id, user_name, posts.user_id, group_id, body, users.profile_img, likes.status FROM users INNER JOIN posts ON posts.user_id = users.id LEFT JOIN likes ON posts.id = likes.post_id WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 1 UNION SELECT friends.target_id FROM friends WHERE friends.source_id = :user_id AND friends.status = 1) ) AND posts.group_id = 0;";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$friendPosts = $stmt->fetchAll(PDO::FETCH_ASSOC);

//  group posts
// $sql = "SELECT posts.id, user_name, user_id, group_id, body, group_name FROM posts INNER JOIN users ON users.id = posts.user_id INNER JOIN groups ON groups.id = posts.group_id WHERE ( posts.group_id IN (SELECT group_id FROM group_member WHERE group_member.user_id = :user_id AND group_member.group_id <> 0 AND group_member.user_status > 0) );";
$sql = "SELECT posts.id, user_name, posts.user_id, group_id, body, group_name, users.profile_img, likes.status FROM posts INNER JOIN users ON users.id = posts.user_id INNER JOIN groups ON groups.id = posts.group_id LEFT JOIN likes ON posts.id = likes.post_id WHERE ( posts.group_id IN (SELECT group_id FROM group_member WHERE group_member.user_id = :user_id AND group_member.group_id <> 0 AND group_member.user_status > 0) );";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$groupsPosts = $stmt->fetchAll(PDO::FETCH_ASSOC);
// $data = ['timelinePosts' => $timelinePosts, 'friendPosts' => $friendPosts, 'groupsPosts' => $groupsPosts];
$data = [...$timelinePosts,  ...$friendPosts, ...$groupsPosts];
// echo "<pre>";
echo json_encode($data);
// echo "</pre>";