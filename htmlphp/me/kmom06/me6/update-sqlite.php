<?php
$title = "Update";
include("incl/header.php");
include("incl/functions.php");

if (isset($_GET["edit"])) {
    $db = connect();
    $editPerson = getPerson($db, htmlentities($_GET["edit"]));
}
?>

<div class="manageForms">
    <form action="sqlite-process.php">
        <h3>Update</h3>
        <label>id: <input type="text" name="id" value="<?=$editPerson['id']?>" readonly="readonly"></label>
        <label>Firstname: <input type="text" name="firstname" value="<?=$editPerson['firstname']?>"></label>
        <label>Lastname: <input type="text" name="lastname" value="<?=$editPerson['lastname']?>"></label>
        <label>Acronym: <input type="text" name="acronym" value="<?=$editPerson['acronym']?>"></label>
        <label>Phone: <input type="text" name="phone" value="<?=$editPerson['phone']?>"></label>
        <input type="submit" value="update" name="action">
    </form>
</div>

<?php include("incl/footer.php"); ?>
