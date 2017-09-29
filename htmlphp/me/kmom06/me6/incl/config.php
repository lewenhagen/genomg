<?php
$name = substr(preg_replace('/[^a-z\d]/i', '', __DIR__), -30);
session_name($name);
session_start();

$stylesheets = [
    "default" => "css/style.css",
    "second" => "css/second.css"
];

$key = isset($_SESSION["stylesheet"]) ? $_SESSION["stylesheet"] : "default";

if (isset($stylesheets[$key])) {
    $stylesheet = $stylesheets[$key];
} else {
    die("Fanns inte.");
}

function dump($dumpMe)
{
    echo "<pre>";
    print_r($dumpMe);
    echo "</pre>";
}

function selected($checkMe)
{
    return basename($_SERVER['REQUEST_URI']) == $checkMe ? "selected" : "";
}
