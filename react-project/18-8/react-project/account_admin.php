<?php
include "funtion.php";

if($_SERVER["REQUEST_METHOD"]=="GET"){
    $conn=new connect_database("php_project");
$sql="* from account_admin";
$result=$conn->select($sql);
// $count=mysqli_fetch_assoc($result);
$arr=array();
while ($row = mysqli_fetch_assoc($result)) {
    $arr[]=$row;
}
echo json_encode($arr);
}
if($_SERVER["REQUEST_METHOD"]=="POST"){
    if($_POST['status']=="login")
    login_admin();
    else
    if($_POST['status']=="sendReset")
    reset_pass();
    else
    if($_POST['status']=="reset")
    reset_password();
    else
    if($_POST['status']=="change")
    changePassword();
    else
    if($_POST['status']=="add")
    addAccountAdmin();
    else
    if($_POST['status']=="delete")
    delete_account_admin();
    else
    if($_POST['status']=="setstatus")
    set_status();
    else
    register_admin();
}
?>