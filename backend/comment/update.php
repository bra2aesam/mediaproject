<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-Type: application/json;");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './comment.php';

    $database = new DB();
    $db = $database->getConnection();

    $comment = new Comment($db);

    // $comment->id=1;
    // $comment->user_id=1;
    // $comment->post_id=18;
    // $comment->comment_body="i think that";

    $comment->id=$_POST["id"];
    $comment->user_id=$_POST["user_id"];
    $comment->post_id=$_POST["post_id"];
    $comment->comment_body=$_POST["group_id"];
    

    if($comment->updateComment()){
        echo json_encode("comment updated.");

    } else{
        echo json_encode("Failed to update comment.");
    }
?>