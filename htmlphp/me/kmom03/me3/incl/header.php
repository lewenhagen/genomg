<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <title><?=$title; ?></title>
  <link rel="stylesheet" href="css/style.css">
  <link rel='shortcut icon' href='img/favicon.ico'/>
</head>
<body>
    <header class="site-header">
        <img src="img/logo.png" alt="logo" />
        <span class="site-title">Me-Sida för Kenneth</span>
        <span class="site-slogan">Min första fina me-sida är på gång</span>
    </header>
    <nav class="navbar">
        <a class="<?= basename($_SERVER['REQUEST_URI']) == "me.php" ? "selected" : ""; ?>" href="me.php">Hem</a>
        <a href="report.php">Redovisning</a>
        <a href="about.php">Om</a>
        <a href="float.php">Float</a>
        <a href="article.php">Article</a>
        <a href="array.php">Array</a>
        <a href="get-post.php">$_GET $_POST</a>
        <a href="switch.php">Switch case</a>
    </nav>
