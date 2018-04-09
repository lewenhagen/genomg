(async function() {
    const mysql = require("promise-mysql");
    const config = require("./config.json");
    const dbfunctions = require("./dbfunctions");
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
            + `  help, menu - to show this menu.\n`
            + `  people     - show info about persons.\n`
            + `  current    - Show current persons/projects.\n`
        );
    }


    rl.setPrompt("Enter query: ");
    rl.prompt();

    rl.on("close", process.exit);
    rl.on("line", async (line) => {
        line = line.trim().split(" ");

        let res;

        switch (line[0]) {
            case "quit":
            case "exit":
                db.end();
                process.exit();
                break;
            case "help":
            case "menu":
                showMenu();
                break;
            case "people":
                res = await dbfunctions.people(db);
                console.info(res);
                break;
            case "current":
                res = await dbfunctions.current(db);
                console.info(res);
                break;
            case "find":
                res = "Add something to search for.."
                if (line.length > 1) {
                    res = await dbfunctions.findPerson(db, line[1]);
                }
                console.info(res);
                break;
            default:
                console.log(line + " does not match any command.");
        }
        rl.prompt();
    });

})();
