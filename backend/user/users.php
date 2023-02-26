<?php
    class User{

        // conn
        private $conn;

        // table
        private $dbTable = "users";

        // col
        public $id;
        public $user_name;
        // public $last_name;
        public $email;
        public $password;
       
      
        // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET Users
        public function getUsers(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE User
        public function createUser(){
            $oldData="SELECT * FROM users WHERE email = '$this->email' ";
            $stmt = $this->conn->prepare($oldData);
            $stmt->execute();
            $checkEmail = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            if($checkEmail == []){
                $sqlQuery = "INSERT INTO
                        ". $this->dbTable ."
                    SET
                    user_name = :user_name, 
                    email = :email, 
                    password = :password";
                $stmt = $this->conn->prepare($sqlQuery);
        
                // sanitize
                $this->user_name=htmlspecialchars(strip_tags($this->user_name));
                // $this->last_name=htmlspecialchars(strip_tags($this->last_name));
                $this->password=htmlspecialchars(strip_tags($this->password));
                $this->email=htmlspecialchars(strip_tags($this->email));
                       
                // bind data
                $stmt->bindParam(":user_name", $this->user_name);
                // $stmt->bindParam(":last_name", $this->last_name);
                $stmt->bindParam(":password", $this->password);
                $stmt->bindParam(":email", $this->email);
               
                if($stmt->execute()){
                   return true;
                }
                return false;


            } else {
                echo 'Your Email is Already Exist';
            }
            
                    
        
            
        }

       // GET User
       public function getSingleUser(){
        $sqlQuery = "SELECT
                    id, 
                    user_name, 
                    email
                  FROM
                    ". $this->dbTable ."
                WHERE 
                   id = :id
                LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->user_name = $dataRow['user_name'];
        // $this->last_name = $dataRow['last_name'];
        $this->email = $dataRow['email'];
      
    }      
        

        // UPDATE User
        public function updateUser(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    user_name = :user_name, 
                    email = :email
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->user_name=htmlspecialchars(strip_tags($this->user_name));
            // $this->last_name=htmlspecialchars(strip_tags($this->last_name));
            $this->email=htmlspecialchars(strip_tags($this->email));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":user_name", $this->user_name);
            // $stmt->bindParam(":last_name", $this->last_name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE User
        // function deleteUser(){
        //     $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
        //     $stmt = $this->conn->prepare($sqlQuery);
        
        //     $this->id=htmlspecialchars(strip_tags($this->id));
        
        //     $stmt->bindParam(1, $this->id);
        
        //     if($stmt->execute()){
        //         return true;
        //     }
        //     return false;
        // }

    
        public function findUser (){
            $sqlQuery = "SELECT
                        *
                        FROM
                        ". $this->dbTable ."
                        WHERE email = :email AND password = :password LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":password", $this->password);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            return $dataRow;
            if ($dataRow) {
                echo (json_decode($dataRow));
            }else {
                echo "user not found";
            }

            // $this->user_name = $dataRow['user_name'];
            // $this->last_name = $dataRow['last_name'];
            // $this->email = $dataRow['email'];

        }
    }      
?>