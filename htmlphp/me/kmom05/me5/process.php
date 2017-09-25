<?php
include("incl/config.php");

$style = isset($_POST["style"]) ? htmlentities($_POST["style"]) : null;

if ($style != null) {
    $_SESSION["stylesheet"] = $style;
}

header("Location: stylechooser.php?page=stylechooser-post");
