<?php
require_once("config.php");
// require_once("src/Dice.php");

$nrOfRolls = isset($_GET["rolls"]) ? $_GET["rolls"] : 6;

$dice = new BigDice();

$rolls = $dice->roll($nrOfRolls);

$hist = new Histogram($rolls);

$histResult = $hist->getResult();
$histHtml = "<ul>";

foreach ($histResult as $key => $value) {
    $histHtml .= "<li>$key: $value</li>";
}
$histHtml .= "</ul>";

$diceHtml = implode(", ", $rolls);
// unset($dice);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>oophp</title>
</head>
<body>
    <h2>Histogram</h2>
    <?= $histHtml ?>
    <h2>Tärningskast</h2>
    <?= $diceHtml ?>
    <h2>Totalt: <?= $dice->getTotal() ?></h2>
    <h2>Medel: <?= $dice->getAverage() ?></h2>
    <form action="" method="GET">
        <input type="number" name="rolls" value="<?=$nrOfRolls?>">
        <input type="submit">
    </form>
</body>
</html>
