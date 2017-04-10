<?php
require_once("config.php");

$name = isset($_POST["name"]) ? $_POST["name"] : null;
$value = isset($_POST["value"]) ? $_POST["value"] : null;

if ($name != null && $value != null) {
    $_SESSION[$name] = $value;
}

$_SESSION["dice"] = new Dice();

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>oophp</title>
</head>
<body>
<ul>
    <li><a href="index1.php">index1</a></li>
    <li><a href="index2.php">index2</a></li>
    <li><a href="index3.php">index3</a></li>
</ul>

<form action="" method="POST">
    Name: <input type="text" name="name"><br>
    Value: <input type="text" name="value"><br>
    <input type="submit">
</form>


<pre><?= var_dump($_SESSION); ?></pre>
</body>
</html>
