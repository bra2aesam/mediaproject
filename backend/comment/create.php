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

    // $comment->user_id=2;
    // $comment->post_id=18;
    // $comment->comment_body="user random";
    $comment->user_id=$_POST["user_id"];
    $comment->post_id=$_POST["post_id"];
    $comment->comment_body=$_POST["group_id"];
    



    if($comment->createComment()){
        echo json_encode("comment created.");

    } else{
        echo json_encode("Failed to create comment.");
    }
?>