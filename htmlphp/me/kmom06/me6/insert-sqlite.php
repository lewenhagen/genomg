<?php
$title = "Insert";
include("incl/header.php");
?>

<form class="sqliteform">
    <h3>Insert</h3>
    Firstname: <input type="text" name="firstname">
    Lastname: <input type="text" name="lastname">
    Acronym: <input type="text" name="acronym">
    Phone: <input type="text" name="phone">
    <input type="submit" name="action" value="insert">
</form>

<?php include("incl/footer.php"); ?>
