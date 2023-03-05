<?php 
 header("Access-Control-Allow-Origin:*");
 header("Content-Type: application/json;");
 header("Access-Control-Allow-Methods: *");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../config.php';
$objDb = new DB;
$conn = $objDb->getConnection();
$user = json_decode(file_get_contents('php://input'));
$user_id = $user->id;

// your group
$sql = "SELECT group_member.id, group_id, user_id, user_status, group_name, group_img FROM group_member INNER JOIN groups ON groups.id = group_member.group_id WHERE user_id = :user_id;";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$yourGroup = $stmt->fetchAll(PDO::FETCH_ASSOC);

// group for you
$sql = "SELECT * FROM `groups` WHERE (groups.id NOT IN (SELECT group_id as mygroup FROM `group_member` WHERE group_member.user_id = :user_id)) AND groups.id <> 0;";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();
$groupForYou = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = ['yourGroup' => $yourGroup, 'groupForYou' => $groupForYou ];

echo json_encode($data); ?>