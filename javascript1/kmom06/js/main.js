(function () {
    'use strict';

    var hangman = window.Hangman;
    var counter = 0;
    var winner = -1;
    var looser = hangman.validParts.length;
    var letters = document.getElementsByClassName("letter");
    var area = document.getElementById("hiddenLetters");
    var currentWord = "";
    var hidden = [];

    function randomizeWord() {
        hangman.setWord(hangman.wordlist()[Math.floor(Math.random() * hangman.wordlist().length)]);
    }

    function placeMarkers(change) {
        for (var i = 0; i < hangman.peek().length; i++) {
            hidden[i] = " _ ";
        }
        area.innerHTML = hidden.join("");
    }

    function init() {
        for (var i = 0; i < hangman.validParts.length; i++) {
            hangman.hide(hangman.validParts[i]);
        }
        randomizeWord();
        placeMarkers();
    }

    function addLetter(letter) {
        for (var i = 0; i < hangman.peek().length; i++) {
            if (letter == hangman.peek()[i].toUpperCase()) {
                hidden[i] = hangman.peek()[i].toUpperCase();
            }
        }
        area.innerHTML = hidden.join("");
    }

    function checkStatus() {
        if (hidden.indexOf(" _ ") === -1) {
            var winnerDiv = document.createElement("div");
            winnerDiv.className = "winnerDiv";
            winnerDiv.innerHTML = "<span class='infoText'>WINNER!!</span><br>Reload to play again";
            document.getElementsByTagName("body")[0].appendChild(winnerDiv);
        }

        if (counter === looser) {
            var loserDiv = document.createElement("div");
            loserDiv.className = "loserDiv";
            loserDiv.innerHTML = "<span class='infoText'>LOSER!!</span><br>Reload to play again";
            document.getElementsByTagName("body")[0].appendChild(loserDiv);
        }
    }


    function checkLetter(target) {
        var currentWord = hangman.peek();

        if (currentWord.toUpperCase().indexOf(target.innerHTML.toUpperCase()) != -1) {
            addLetter(target.innerHTML.toUpperCase());
            target.style.backgroundColor = "lightgreen";
        } else {
            target.style.backgroundColor = "red";
            hangman.show(hangman.validParts[counter]);
            counter++;
        }
        document.getElementById("guessedLetters").innerHTML += target.innerHTML;
        // console.log(target.innerHTML.toUpperCase());
        target.style.pointerEvents = "none";

        checkStatus();
    }


    for (var i = 0; i < letters.length; i++) {
        letters[i].addEventListener("click", function(event) {
            checkLetter(event.target);
            event.target.style.textDecoration = "line-through";
            // console.log(event.target);
        });
    }
    init();
})();
