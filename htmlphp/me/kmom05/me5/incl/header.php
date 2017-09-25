<?php include("incl/config.php"); ?>
<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <title><?=$title; ?></title>
  <link rel="stylesheet" href="<?=$stylesheet;?>">
  <link rel='shortcut icon' href='img/favicon.ico'/>
</head>
<body>
    <header class="site-header">
        <img src="img/logo.png" alt="logo" />
        <span class="site-title">Me-Sida för genomgångar</span>
        <span class="site-slogan">"En perfekt slogan"</span>
    </header>
    <nav class="navbar">
        <a class="<?= selected("me.php"); ?>" href="me.php">Hem</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "report.php" ? "selected" : ""; ?>" href="report.php">Redovisning</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "about.php" ? "selected" : ""; ?>" href="about.php">Om</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "float.php" ? "selected" : ""; ?>" href="float.php">Float</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "article.php" ? "selected" : ""; ?>" href="article.php">Article</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "array.php" ? "selected" : ""; ?>" href="array.php">Array</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "get-post.php" ? "selected" : ""; ?>" href="get-post.php">get-post</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "switch.php" ? "selected" : ""; ?>" href="switch.php">Switch case</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "stylechooser.php" ? "selected" : ""; ?>" href="stylechooser.php">Stylechooser</a>
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "sqlite.php" ? "selected" : ""; ?>" href="sqlite.php">SQLite</a>
    </nav>
