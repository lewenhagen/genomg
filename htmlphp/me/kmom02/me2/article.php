<?php
$title = "Article";
include("incl/header.php");
?>
<main>
    <article>
        <header>
            <h1>Min artikel</h1>
            <p>Uppdaterad: <time datetime="2017-09-05 13:21">5:e September 2017</time></p>
        </header>
        <p>
            Jag brukar lägga till CSS-klasser där jag tycker det behövs, det gör det enklare att styla elementen.
            Det är inget man behöver göra från början, man kan fylla på med CSS-klasser efter hand, när man känner att det behövs.
            Som du kan se av koden ovan har jag valt klasserna author och byline, mest för jag tycker det är enklare att styla de HTML-block som avses.
        </p>
        <p>
            Som du ser så handlar HTML mycket om att märka upp orden, det är viktigt att man använder en god struktur för uppmärkningen. Iallafall om man vill bli proffs på detta.
            Men, det finns inget exakt facit för hur man ska göra. Men genom att läsa specifikationerna och se hur andra gör, så lär man sig vad som fungerar och inte.
            Dessutom, om det ser bra ut i webbläsaren, då kan det ju inte vara fel, eller hur?
        </p>

        <footer class="byline">
            <img class="left" src="img/image.png" alt="bild på en pingvin">
            <p>Det här är min bylinetext. Den är återkommande och ska berätta lite om vem jag är.</p>
        </footer>
    </article>
</main>
<?php include("incl/footer.php"); ?>
