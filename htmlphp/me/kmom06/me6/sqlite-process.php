<?php
include("incl/functions.php");

$id = isset($_GET["id"]) && $_GET["id"] != "" ?
        htmlentities($_GET["id"]) : -1;
$fname = isset($_GET["firstname"]) && $_GET["firstname"] != "" ?
        htmlentities($_GET["firstname"]) : "N/A";
$lname = isset($_GET["lastname"]) && $_GET["lastname"] != "" ?
        htmlentities($_GET["lastname"]) : "N/A";
$acr = isset($_GET["acronym"]) && $_GET["acronym"] != "" ?
        htmlentities($_GET["acronym"]) : "N/A";
$phone = isset($_GET["phone"]) && $_GET["phone"] != "" ?
        htmlentities($_GET["phone"]) : 0000;

$action = isset($_GET["action"]) ? htmlentities($_GET["action"]) : null;

$params = [$fname, $lname, $acr, $phone];

$db = connect();

if ($action == "insert") {
    $stmt = $db->prepare("INSERT INTO persons (firstname, lastname, acronym, phone) VALUES(?, ?, ?, ?)");
    $stmt->execute($params);
} elseif ($action == "update") {
    $params[] = $id;
    $stmt = $db->prepare("UPDATE persons SET firstname=?, lastname=?, acronym=?, phone=? WHERE id=?");
    $stmt->execute($params);
}

header("Location: " . $_SERVER["HTTP_REFERER"]);
