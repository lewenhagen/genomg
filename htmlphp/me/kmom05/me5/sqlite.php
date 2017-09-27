<?php
$title = "SQLite";
include("incl/header.php");
?>
<?php

$search = isset($_GET["search"]) ? htmlentities($_GET["search"]) : null;
?>

<form>
    Sök efter: <input type="text" name="search"><input type="submit" value="OK">
</form>

<?php

if (is_null($search)) {
    die("<p>Finns inget att visa.</p>");
}

$params = ["%$search%", "%$search%", "%$search%", "%$search%"];


$filename = __DIR__ . "/db/mydb.sqlite";
$dsn = "sqlite:$filename";

try {
    $db = new PDO($dsn);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "works!";
} catch (PDOException $e) {
    echo "Det gick inte att ansluta med DSN: $dsn.";
    throw $e;
}

$stmt = $db->prepare("SELECT * FROM persons WHERE firstname LIKE ? OR lastname LIKE ? OR acronym LIKE ? OR phone LIKE ?");
$stmt->execute($params);
$res = $stmt->fetchAll(PDO::FETCH_ASSOC);

$rows = null;
foreach ($res as $row) {
    $rows .= "<tr>";
    $rows .= "<td>{$row['id']}</td>";
    $rows .= "<td>{$row['firstname']}</td>";
    $rows .= "<td>{$row['lastname']}</td>";
    $rows .= "<td>{$row['acronym']}</td>";
    $rows .= "<td>{$row['phone']}</td>";
    $rows .= "</tr>";
}
// echo "<pre>";
// print_r($res);
// echo "</pre>";

echo <<<EOD
<table>
<tr>
    <th>id</th>
    <th>First</th>
    <th>Last</th>
    <th>Acr</th>
    <th>phone</th>
</tr>
$rows
</table>
EOD;

?>

<?php include("incl/footer.php"); ?>
