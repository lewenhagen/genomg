<?php
$title = "Manage SQLite";
include("incl/header.php");

?>
<div class="manageForms">
    <form action="manage-process.php">
        <h3>Insert</h3>
        <label>Firstname: <input type="text" name="firstname"></label>
        <label>Lastname: <input type="text" name="lastname"></label>
        <label>Acronym: <input type="text" name="acronym"></label>
        <label>Phone: <input type="text" name="phone"></label>
        <input type="submit" value="insert" name="action">
    </form>
</div>



<?php include("incl/footer.php"); ?>
