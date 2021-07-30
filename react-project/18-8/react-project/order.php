<?php
include "funtion.php";

if($_SERVER["REQUEST_METHOD"]=="GET"){
$conn=new connect_database("php_project");
$sql="o.id, u.name, u.address, a.phone, a.email, o.date_order, o.EDD, os.status,sh.name as ship, sh.phone as phone_ship, o.money, o.ship_money, o.total_money  FROM
((`customer` u INNER JOIN account a on a.id=u.id_account)
INNER JOIN orders o on o.id_cus=a.id
INNER JOIN order_status os ON o.id_status=os.id
 INNER JOIN shipping_company sh on o.id_ship=sh.code
)";
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
    add_order();
    if($_POST['method']=="PUT")
    update_product();
    if($_POST['method']=="delete")
    delete_product();
}


?>