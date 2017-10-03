<?php
$title = "SQLite";
include("incl/header.php");
include("incl/functions.php");

$db = connect();

//

$search = isset($_GET["search"]) ? htmlentities($_GET["search"]) : null;
?>

<form>
    Sök efter: <input type="text" name="search"><input type="submit" value="OK"><br><a href="?search=%">Visa alla</a>
</form>

<?php

if (is_null($search)) {
    die("<p>Ingen sökning gjord än.</p>");
}

$params = ["%$search%", "%$search%", "%$search%", "%$search%"];


$stmt = $db->prepare("SELECT * FROM persons WHERE firstname LIKE ? OR lastname LIKE ? OR acronym LIKE ? OR phone LIKE ?");
$stmt->execute($params);
$res = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo printTable($res);

?>

<?php include("incl/footer.php"); ?>
