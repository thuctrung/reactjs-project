<?php
include "funtion.php";

if($_SERVER["REQUEST_METHOD"]=="GET"){
$conn=new connect_database("php_project");
$sql="*from shipping_company";
$result=$conn->select($sql);
// $count=mysqli_fetch_assoc($result);
$arr=array();
while ($row = mysqli_fetch_assoc($result)) {
    $arr[]=$row;
}
echo json_encode($arr);
}
if($_SERVER["REQUEST_METHOD"]=="POST"){
    if($_POST['method']=="POST")
    Shipping(1);
    if($_POST['method']=="PUT")
    Shipping(2);
}


?>