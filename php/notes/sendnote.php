<?php
$x = $_POST['x'];
$y = $_POST['y'];
$name = $_POST['name'];
$msg = $_POST['msg'];
$DB = new mysqli('localhost', 'root', '', 'notes');
$result = $DB->query("INSERT INTO `notes`(`x`, `y`, `name`, `msg`) VALUES ('$x', '$y', '$name', '$msg') ON DUPLICATE KEY UPDATE `x` = '$x', `y` = '$y', `msg` = '$msg';");
mysqli_close($DB);
?>