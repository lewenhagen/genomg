<?php

function connect()
{
    $filename = __DIR__ . "/../db/mydb.sqlite";
    $dsn = "sqlite:$filename";

    try {
        $db = new PDO($dsn);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Det gick inte att ansluta med DSN: $dsn.";
        throw $e;
    }

    return $db;
}

function printTable($res)
{
    $html = "<table><tr>";
    $html .= "<th>id</th>";
    $html .= "<th>First</th>";
    $html .= "<th>Last</th>";
    $html .= "<th>Acr</th>";
    $html .= "<th>Phone</th>";
    $html .= "<th>Action</th>";
    $html .= "</tr>";

    $rows = null;
    foreach ($res as $row) {
        $rows .= "<tr>";
        $rows .= "<td>{$row['id']}</td>";
        $rows .= "<td>{$row['firstname']}</td>";
        $rows .= "<td>{$row['lastname']}</td>";
        $rows .= "<td>{$row['acronym']}</td>";
        $rows .= "<td>{$row['phone']}</td>";
        $rows .= "<td><a href='update-sqlite.php?edit={$row['id']}'>Edit</a> | <a href='sqlite.php?search=%&delete={$row['id']}'>Delete</a></td>";
        $rows .= "</tr>";
    }

    $html .= $rows . "</table>";

    return $html;
}

function deleteRowFromId($db, $id)
{
    $stmt = $db->prepare("DELETE FROM persons WHERE id = $id");
    $stmt->execute();
}

function getPerson($db, $id)
{
    $stmt = $db->prepare("SELECT * FROM persons WHERE id = $id");
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $res[0];
}
