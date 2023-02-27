<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    include_once '../config.php';
    include_once './comment.php';

    $database = new DB();
    $db = $database->getConnection();

    $comment = new Comment($db);
    $limit = ((int) $_POST['limit']) * 5;
    $comment->limit = $limit;
    $comment->post_id = $_POST['post_id'];
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