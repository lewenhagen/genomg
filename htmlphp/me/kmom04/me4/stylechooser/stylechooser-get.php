<?php
echo "<h3>Stylechooser with \$_GET</h3>";
$style = isset($_GET["style"]) ? htmlentities($_GET["style"]) : null;

if ($style != null) {
    $_SESSION["stylesheet"] = $style;
}
?>

<form>
    <input type="hidden" name="page" value="stylechooser-get">
    <select name="style">
        <option value="default">Default</option>
        <option value="second">Second</option>
    </select>
    <input type="submit" value="Change">
</form>
