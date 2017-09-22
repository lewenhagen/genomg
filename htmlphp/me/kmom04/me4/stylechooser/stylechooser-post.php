<?php
echo "<h3>Stylechooser with \$_POST</h3>";


?>

<form method="POST" action="process.php">
    <select name="style">
        <option value="default">Default</option>
        <option value="second">Second</option>
    </select>
    <input type="submit" value="Change">
</form>
