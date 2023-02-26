<?php 
 header("Access-Control-Allow-Origin:*");
 header("Content-Type: application/json;");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../config.php';
$objDb = new DB;
$conn = $objDb->getConnection();
$group_id = 2;
// group post
$sql = "SELECT * FROM users INNER JOIN posts ON users.id = posts.user_id INNER JOIN groups ON posts.group_id = groups.id WHERE groups.id = :group_id;";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':group_id', $group_id);
$stmt->execute();
$group_post = $stmt->fetchAll(PDO::FETCH_ASSOC);
// group member
$sql = "SELECT * FROM users INNER JOIN group_member ON users.id = group_member.user_id INNER JOIN groups ON group_member.group_id = groups.id WHERE groups.id =:group_id";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':group_id', $group_id);
$stmt->execute();
$group_member = $stmt->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// print_r($group_member);
// echo "</pre>";


$data = ['group_post'=> $group_post, 'group_member' => $group_member];

echo "<pre>";
echo json_encode($data);
echo "</pre>";




// // group Admin
// $sql = "SELECT * FROM users INNER JOIN group_member ON users.id = group_member.user_id INNER JOIN groups ON group_member.group_id = groups.id WHERE groups.id =:group_id AND group_member.user_status = 2;";
// $stmt = $conn->prepare($sql);
// $stmt->bindParam(':group_id', $group_id);
// $stmt->execute();
// $group_admin = $stmt->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// print_r($group_admin);
// echo "</pre>";
// // group member
// $sql = "SELECT * FROM users INNER JOIN group_member ON users.id = group_member.user_id INNER JOIN groups ON group_member.group_id = groups.id WHERE groups.id =:group_id AND group_member.user_status = 1;";
// $stmt = $conn->prepare($sql);
// $stmt->bindParam(':group_id', $group_id);
// $stmt->execute();
// $group_member = $stmt->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// print_r($group_member);
// echo "</pre>";
// // group request
// $sql = "SELECT * FROM users INNER JOIN group_member ON users.id = group_member.user_id INNER JOIN groups ON group_member.group_id = groups.id WHERE groups.id =:group_id AND group_member.user_status = 0;";
// $stmt = $conn->prepare($sql);
// $stmt->bindParam(':group_id', $group_id);
// $stmt->execute();
// $group_requset = $stmt->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// print_r($group_requset);
// echo "</pre>";