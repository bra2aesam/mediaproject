<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once '../config.php';
    include_once './comment.php';

    $database = new DB();
    $db = $database->getConnection();

    $comment = new Comment($db);
    $comment->limit = 5;
    $stmt = $comment->getComment();
    $data = $stmt->fetchALL(PDO::FETCH_ASSOC);
    print_r(json_encode($data));
    // $itemCount = $stmt->rowCount();

    // if($itemCount > 0){
        
    //     $userArr = array();
    
    //     while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    //         extract($row);
    //         $e = array(
    //             "id" => $id,
    //             "user_name" => $user_name,
    //             "password" => $password,
    //             "photo" => $photo,
    //             "email" => $email
    //         );

    //         array_push($userArr, $e);
    //     }
    //     echo json_encode($userArr);
    // }
    // else{
    //     echo json_encode('');
    // }

?>