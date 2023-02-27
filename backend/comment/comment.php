<?php
    class Post{

        // conn
        private $conn;

        // table
        private $dbTable = "comments";

        // col
        public $id;
        public $user_id ;
        public $post_id ;
        public $comment_body;
    
       
        
       
      
        // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET group
        public function getPost(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        //CREATE User
        public function createPost(){
          
                $sqlQuery = "INSERT INTO
                        ". $this->dbTable ."
                    SET
                    post_id = :post_id, 
                    user_id = :user_id, 
                    comment_body = :comment_body"; 
              

                $stmt = $this->conn->prepare($sqlQuery);
        
                // sanitize
                $this->post_id=htmlspecialchars(strip_tags($this->post_id));
                $this->user_id=htmlspecialchars(strip_tags($this->user_id));
                $this->comment_body=htmlspecialchars(strip_tags($this->comment_body));
               
                
                       
                // bind data
                $stmt->bindParam(":post_id", $this->post_id);
                $stmt->bindParam(":user_id", $this->user_id);
                $stmt->bindParam(":comment_body", $this->comment_body);
                
               
                if($stmt->execute()){
                   return true;
                }
                return false;


            
                    
        
            
        }

       // GET User
    //    public function getSingleUser(){
    //     $sqlQuery = "SELECT
    //                 id, 
    //                 user_name, 
    //                 email
    //               FROM
    //                 ". $this->dbTable ."
    //             WHERE 
    //                id = :id
    //             LIMIT 0,1";

    //     $stmt = $this->conn->prepare($sqlQuery);
    //     $stmt->bindParam(":id", $this->id);
    //     $stmt->execute();
    //     $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
    //     $this->user_name = $dataRow['user_name'];
    //     // $this->last_name = $dataRow['last_name'];
    //     $this->email = $dataRow['email'];
      
    // }      
        

        // UPDATE group
    //     public function updateGroup(){
    //         $sqlQuery = "UPDATE
    //                     ". $this->dbTable ."
    //                 SET
    //                 group_name = :group_name, 
    //                 group_img = :group_img
                    
    //                 WHERE 
    //                     id = :id";
        
    //         $stmt = $this->conn->prepare($sqlQuery);
        
    //         $this->group_name=htmlspecialchars(strip_tags($this->group_name));
    //         $this->group_img=htmlspecialchars(strip_tags($this->group_img));
    //         $this->id=htmlspecialchars(strip_tags($this->id));
        
    //         // bind data
    //         $stmt->bindParam(":group_name", $this->group_name);
    //         $stmt->bindParam(":group_img", $this->group_img);
    //         $stmt->bindParam(":id", $this->id);
        
    //         if($stmt->execute()){
    //            return true;
    //         }
    //         return false;
    //     }

    //    // DELETE User
    //     function deleteUser(){
    //         $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
    //         $stmt = $this->conn->prepare($sqlQuery);
        
    //         $this->id=htmlspecialchars(strip_tags($this->id));
        
    //         $stmt->bindParam(1, $this->id);
        
    //         if($stmt->execute()){
    //             return true;
    //         }
    //         return false;
    //     }

    
        // public function findUser (){
        //     $sqlQuery = "SELECT
        //                 *
        //                 FROM
        //                 ". $this->dbTable ."
        //                 WHERE email = :email AND password = :password LIMIT 0,1";

        //     $stmt = $this->conn->prepare($sqlQuery);
        //     $stmt->bindParam(":email", $this->email);
        //     $stmt->bindParam(":password", $this->password);
        //     $stmt->execute();
        //     $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        //     return $dataRow;
        //     if ($dataRow) {
        //         echo (json_decode($dataRow));
        //     }else {
        //         echo "user not found";
        //     }

            

        // }
    }      
?>