<?php
$title = "get post";
include("incl/header.php");

$input = isset($_GET["input"]) ? htmlentities($_GET["input"]) : null;

?>
<form action="" method="GET">
    Skriv något: <input type="text" name="input">
    <input type="submit" value="OK">
</form>

<?php

switch ($input) {
    case "cow":
        echo "$input says moooo";
        break;
    case "pig":
        echo "$input says oink oink";
        break;
    default:
        echo "Not valid: $input";
        break;
}
echo "<pre>";


echo "</pre>";

include("incl/footer.php");
