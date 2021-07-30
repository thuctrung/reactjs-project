<?php
include "./sendMail/sendMail.php";
class connect_database{
    private $database_name;
    private $conn;

    function connect_database($name){
        $this->database_name=$name;
        $this->conn = mysqli_connect("localhost", "root", "", "$this->database_name");
    }

    function getDatabaseName(){
        return $this->database_name;
    }

    function setDatabaseName($name){
        $this->database_name=$name;
    }

    public function execute($sql){
        if (!$this->conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $result = mysqli_query($this->conn, $sql);
        return $result;
    }
    private function checkError($result){
        if(!$result)
            echo "False";
        return $result;
    }
    public function insert($state){
        $sql="insert into ".$state;
        
        return $this->checkError($this->execute($sql));
    }
    public function update($state, $id){
        $sql="update ".$state." where id=$id";
        
        $this->checkError($this->execute($sql));
    }
    public function delete($state, $id){
        $sql="delete from  ".$state." where id=$id";
        
        $this->checkError($this->execute($sql));
    }
    public function select($state){
        $sql="select ".$state;
        return $this->execute($sql);
    }
}
$conn=new connect_database("php_project");
function add_product(){
    $name=$_POST['name-product'];
    $mass=$_POST['mass'];
    $category=$_POST['category'];
    $company=$_POST['company'];
    $price=$_POST['price-product'];
    $discount=$_POST['discount'];
    $quantity=$_POST['quantity'];
    $title=$_POST['title'];
    $ED=date("Y-m-d", strtotime( $_POST['ED']));
    $MFG=$_POST['MFG'];
    $idCom=$company;
    if(isset($_FILES['image-product'])){
        $file_name = $_FILES['image-product']['name'];
        $file_size = $_FILES['image-product']['size'];
        $file_tmp = $_FILES['image-product']['tmp_name'];
        
        $expensions= array("jpeg","jpg","png");
        
        
        if($file_size > 2097152) {
            echo 'Kích thước file không được lớn hơn 2MB';
        }
        else{
            
            move_uploaded_file($file_tmp,"C:/images-react-project/".$file_name);
            $image='C:/images-react-project/'.$file_name;
            $sql="product(name, price, sell_price, title, ED, MFG, image, mass, industry_id, id_com, quantity)
            values('$name', $price, $discount, '$title', '$ED', '$MFG', '$image', $mass, $category, $idCom, $quantity);";
            $GLOBALS['conn']->insert($sql);
        }
    }
}
function update_product(){
    $id=$_POST["id"];
    $name=$_POST['name-product'];
    $mass=$_POST['mass'];
    $category=$_POST['category'];
    $company=$_POST['company'];
    $price=$_POST['price-product'];
    $discount=$_POST['discount'];
    $quantity=$_POST['quantity'];
    $title=$_POST['title'];
    $ED=date("Y-m-d", strtotime( $_POST['ED']));
    $MFG=$_POST['MFG'];
    $idCom=$company;  
    
    if(isset($_FILES['image-product'])){
        $file_name = $_FILES['image-product']['name'];
        $file_size = $_FILES['image-product']['size'];
        $file_tmp = $_FILES['image-product']['tmp_name'];
        $expensions= array("jpeg","jpg","png");
        if($file_size > 2097152) {
            echo 'Kích thước file không được lớn hơn 2MB';
        }
        else{
            move_uploaded_file($file_tmp,"C:/images-react-project/".$file_name);
            $image="C:/images-react-project/".$file_name;
            $sql="product set name='$name', price=$price, sell_price=$discount, title='$title', ED='$ED', MFG='$MFG', image='$image', mass=$mass, industry_id=$category, id_com=$idCom, quantity=$quantity ";
            $GLOBALS['conn']->update($sql, $id);
        }
    }
    else{
        $sql="Update product set name='$name', price=$price, discount=$discount, title='$title', ED='$ED', MFG='$MFG', mass=$mass, industry_id=$category, id_com=$idCom, quantity=$quantity ";
        $GLOBALS['conn']->update($sql, $id);
    }
}
function delete_product(){
    $id=$_POST['id'];
    $GLOBALS['conn']->delete("product", $id);
}
function add_supplier(){
    $name=$_POST['name'];
    $manager=$_POST['manager'];
    $address=$_POST['address'];
    $license=$_POST['license'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $sql="company(name, address, manager, license_number, phone, email) values('$name', '$address', '$manager', '$license', '$phone', '$email');";
    $GLOBALS['conn']->insert($sql);

}
function update_company(){
    $id=$_POST['id'];
    $name=$_POST['name'];
    $manager=$_POST['manager'];
    $address=$_POST['address'];
    $license=$_POST['license'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $sql="company set name='$name', address='$address', manager='$manager', license_number='$license', phone='$phone', email='$email' ";
    $GLOBALS['conn']->update($sql, $id);

}
function delete_company(){
    $id=$_POST['id'];
    
        $GLOBALS['conn']->delete("company", $id);
    
}

function register(){
    $email=$_POST['email'];
    // echo $email;
    $phone=$_POST['phone'];
    $user=$_POST['user'];
    $password=$_POST['password'];
    $status=$_POST["status"];
    if($status=="send"){
        $code=rand(100000, 999999);
        $title = 'Confirm Account';
        $content = "Đây là mã code xác nhận account admin của bạn $code";
        $nTo = 'Account admin';
        $mTo = "$email";
        $mail = sendMail($title, $content, $nTo, $mTo);
        if($mail!=1){
            echo "Lỗi gửi mail!";
        }
        echo $code;
        
    }
    else{
        $sql="account(phone, email, user, password, status) values('$phone', '$email', '$user', '$password', 'accept')";
        $GLOBALS['conn']->insert($sql);
    }
}
function register_admin(){
    $email=$_POST['email'];
    // echo $email;
    $password=$_POST['password'];
    $status=$_POST["status"];
    if($status=="send"){
        $code=rand(100000, 999999);
        $title = 'Confirm Account';
        $content = "Đây là mã code xác nhận account admin của bạn $code";
        $nTo = 'Account admin';
        $mTo = "$email";
        $mail = sendMail($title, $content, $nTo, $mTo);
        if($mail!=1){
            echo "Lỗi gửi mail!";
        }
        echo $code;
        
    }
    else{
        $sql="account_admin(email, password, status) values('$email', '$password', 'Notaccept')";
        $GLOBALS['conn']->insert($sql);
    }
}
function login(){
    $c=0;
    $email=$_POST['email'];
    $password=$_POST['password'];
    // echo $email;
    // echo $password;
    $sql="*from account";
    $result=$GLOBALS['conn']->select($sql);
    while ($row = mysqli_fetch_array($result)) {
        if($row['email']==$email&&$row['password']==$password){
            $c=1;
            if($row['status']=="accept"){
                echo "1";
            }
            
            else
            echo "0";
        }
    }
    if($c==0)
    echo "0";
}
function login_admin(){
    $c=0;
    $email=$_POST['email'];
    $password=$_POST['password'];
    // echo $email;
    // echo $password;
    $sql="*from account_admin";
    $result=$GLOBALS['conn']->select($sql);
    while ($row = mysqli_fetch_array($result)) {
        if($row['email']==$email&&$row['password']==$password){
            $c=1;
            if($row['status']=="accept"){
                echo "1";
            }
            
            else
            echo "0";
        }
    }
    if($c==0)
    echo "0";
}
 ?>