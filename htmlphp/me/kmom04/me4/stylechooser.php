<?php
$title = "Stylechooser";
include("incl/header.php");

$page = isset($_GET["page"]) ? htmlentities($_GET["page"]) : "intro";

if ($page != null) {
    switch ($page) {
        case "intro":
            $page = "$page.php";
            break;
        case "increment-session":
            $page = "$page.php";
            break;
        case "print-session":
            $page = "$page.php";
            break;
        case "destroy":
            $page = "$page.php";
            break;
        case "stylechooser-get":
            $page = "$page.php";
            break;
        case "stylechooser-post":
            $page = "$page.php";
            break;
        default:
            $notFound = $page;
            $page = "404.php";
            break;
    }
}
?>

<aside><?php include("aside.php"); ?></aside>
<main class="stylechooser-main">
    <article>
        <?php include("stylechooser/$page"); ?>
    </article>
</main>
<?php include("incl/footer.php"); ?>
