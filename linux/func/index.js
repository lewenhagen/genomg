(function () {
    "use strict";

    const players = [
        { name : "Tom Brady", position : "Quarterback", noOfRings : 5 },
        { name : "Julian Edelman", position : "Wide Receiver", noOfRings : 2 },
        { name : "Chris Hogan", position : "Wide Receiver", noOfRings : 1 },
        { name : "Danny Amendola", position : "Wide Receiver", noOfRings : 2 },
        { name : "LaGarette Blount", position : "Running back", noOfRings : 2 },
        { name : "James White", position : "Running back", noOfRings : 2 },
        { name : "Dion Lewis", position : "Running back", noOfRings : 1 }
    ];

    function stringifier (player) {
        return player.position + ": " + player.name;
    }


    // var mapped = players.map(stringifier);
    // console.log(mapped);
    //
    //
    // var filtered = players.filter(player => player.noOfRings > 1);
    // console.log(filtered);


    var filteredAndMapped = players.filter(player => player.noOfRings > 1).map(stringifier);
    console.log(filteredAndMapped);

    function sumRings(total, player) {
        return total + player.noOfRings;
    }


    var totalNumOfRings = players.reduce(sumRings, 0);
    console.log("Total number of rings: " + totalNumOfRings );


})();
