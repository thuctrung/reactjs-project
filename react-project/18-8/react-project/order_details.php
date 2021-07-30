<?php
include "funtion.php";

if($_SERVER["REQUEST_METHOD"]=="GET"){
    $id=$_GET["id"];
$conn=new connect_database("php_project");
$sql="pro.id, pro.name, pro.price, pro.mass, od.quantity, co.name brand, pro.price*od.quantity as 'Total Amount' from((product pro INNER JOIN order_details od on pro.id=od.id_pro and od.id_order=$id)
INNER JOIN company co on pro.id_com=co.id)";
$result=$conn->select($sql);
// $count=mysqli_fetch_assoc($result);
$arr=array();
while ($row = mysqli_fetch_assoc($result)) {
    $arr[]=$row;
}
echo json_encode($arr);
}



?>