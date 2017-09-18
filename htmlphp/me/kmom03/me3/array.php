<?php
$title = "arrayer";
include("incl/header.php");

$arr = ["ett" => "one", "två" => "two", "tre" => "three", "fyra" => "four"];
$arr2 = [0, 1, "ertgdffsg45", 56, 254, 2432];

echo "<pre>";

// foreach ($arr as $key) {
//     echo "$key<br>";
// }

print_r(array_sum($arr2));

echo "</pre>";


include("incl/footer.php");
