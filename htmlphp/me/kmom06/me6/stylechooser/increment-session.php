<?php
echo "<h3>Reload page to increment the value</h3>";

$counter = isset($_SESSION["counter"]) ? $_SESSION["counter"] : 0;
$counter += 1;
$_SESSION["counter"] = $counter;
