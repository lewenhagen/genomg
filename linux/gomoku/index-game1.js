/**
 * Main program for the a game of Gomoku.
 */
"use strict";

const VERSION = "1.0.0";

// For CLI usage
var path = require("path");
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);
var arg;

import GomokuBoard from "./GomokuBoard.js";


var size = 20,
    prompt = "Gomoku$ ",
    gameBoard;

gameBoard = new GomokuBoard();



var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * Returns a random integer between min (included) and max (included)
 * Using Math.round() will give you a non-uniform distribution!
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Place a marker on the board.
 */
function placeMarker(placeArgs = "") {
    var x, y,
        player = gameBoard.playerInTurn();

    if (placeArgs != "") {
        let placeArgsArray = placeArgs.split(" ");

        if (placeArgsArray.length < 2) {
            console.log("Give me more integers!!!");
            return;
        }

        if (Number.isInteger(parseInt(placeArgsArray[0])) && Number.isInteger(parseInt(placeArgsArray[1]))) {
            x = parseInt(placeArgsArray[0]);
            y = parseInt(placeArgsArray[1]);

            if (x >= gameBoard.size || y >= gameBoard.size) {
                console.log("You gave to big numbers!!!");
                return;
            }

            if (gameBoard.isPositionTaken(x, y)) {
                console.log("The position is already taken!!!");
                return;
            }
        } else {
            console.log("You did not give me integers!!!");
            return;
        }
    } else {
        while (!gameBoard.isFull()) {
            x = getRandomIntInclusive(0, gameBoard.size);
            y = getRandomIntInclusive(0, gameBoard.size);

            if (!gameBoard.isPositionTaken(x, y)) {
                break;
            }
        }
    }

    if (gameBoard.isFull()) {
        console.log("Game board is full!!!");
        return;
    }

    gameBoard.place(x, y);
    console.log(">>> " + player + " places " + x + " " + y + "\n");
    console.log(gameBoard.asAscii());
}


function startGame(size = 20) {
    // Here starts the actual main program
    console.log(">>> Start the game with board size of " + size);
    gameBoard.start(size);

    rl.setPrompt(prompt);
    rl.prompt();
}


/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options]

Options:
 -h               Display help text.
 -v               Display the version.`);
}



/**
 * Display helptext about bad usage.
 *
 * @param String message to display.
 */
function badUsage(message) {
    console.log(`${message}
Use -h to get an overview of the command.`);
}



/**
 * Display version.
 */
function version() {
    console.log(VERSION);
}



// Walkthrough all arguments checking for options.
while ((arg = args.shift()) !== undefined) {
    switch (arg) {
        case "-h":
            usage();
            process.exit(0);
            break;

        case "-v":
            version();
            process.exit(0);
            break;

        default:
            if (Number.isInteger(arg)) {
                startGame(arg);
            } else {
                badUsage("Unknown argument.");
                process.exit(1);
                break;
            }

    }
}



rl.on("line", function(line) {
    switch (line.trim()) {
        case "exit":
            console.log("Bye!");
            process.exit(0);
            break;
        default:
            placeMarker(line.trim());
            break;
    }
    rl.prompt();
});



rl.on("close", function() {
    rl.write("Bye!");
    process.exit(0);
});

startGame();
