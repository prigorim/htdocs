<?php
$name = $_POST['name'];
$DB = new mysqli('localhost', 'root', '', 'notes');
$result = $DB->query("DELETE FROM `notes` WHERE `notes`.`name` = '$name'");
mysqli_close($DB);
?>