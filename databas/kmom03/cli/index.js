(async function() {
    const mysql = require("promise-mysql");
    const config = require("./config.json");
    const cTable = require('console.table');
    const db = await mysql.createConnection(config);
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    /**
     * Show the menu on that can be done.
     *
     * @returns {void}
     */
    function showMenu() {
        console.info(
            ` You can choose from the following commands.\n`
            + `  exit, quit, ctrl-d - to exit the program.\n`
            + `  help, menu    - to show this menu.\n`
            + `  people        - show info about persons.\n`
            + `  current       - Show current persons/projects (View).\n`
            + `  find <string> - Search in person names. \n`
        );
    }


    rl.setPrompt("Enter query: ");
    rl.prompt();

    rl.on("close", process.exit);
    rl.on("line", (line) => {
        line = line.trim();

        switch (line) {
            case "quit":
            case "exit":
                db.end();
                process.exit();
                break;
            case "help":
            case "menu":
                showMenu();
                break;
            default:
                console.log(line + " does not match any command.");
        }
        rl.prompt();
    });

})();
