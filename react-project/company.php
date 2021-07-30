<?php
include "funtion.php";

if($_SERVER["REQUEST_METHOD"]=="GET"){
$conn=new connect_database("php_project");
$sql="*from company";
$result=$conn->select($sql);
// $count=mysqli_fetch_assoc($result);
$arr=array();
while ($row = mysqli_fetch_array($result)) {
    $arr[]=$row;
}
echo json_encode($arr);
}

?>