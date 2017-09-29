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
