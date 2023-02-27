<?php
    class Comment{

        // conn
        private $conn;

        // table
        private $dbTable = "comments";

        public $limit;
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
        public function getComment(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable  . " WHERE post_id = :post_id" . " LIMIT " . $this->limit;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(":post_id", $this->post_id);
            
            $stmt->execute();
            return $stmt;
        }

        //CREATE comment
        public function createComment(){
          
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

        

        // UPDATE group
        public function updateComment(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    user_id = :user_id, 
                    post_id = :post_id,
                    comment_body = :comment_body
                    
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->user_id=htmlspecialchars(strip_tags($this->user_id));
            $this->post_id=htmlspecialchars(strip_tags($this->post_id));
            $this->comment_body=htmlspecialchars(strip_tags($this->comment_body));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":user_id", $this->user_id);
            $stmt->bindParam(":post_id", $this->post_id);
            $stmt->bindParam(":comment_body", $this->comment_body);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

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