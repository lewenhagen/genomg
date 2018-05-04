"use strict";

const port = 1337;
const path    = require("path");
const express = require("express");
const app     = express();
const session  = require("express-session");
const routeIndex = require("./route/index.js");
const routePeople = require("./route/people.js");
const routeAdmin = require("./route/admin.js");
const routeUser  = require("./route/user.js");

const middleware = require("./middleware/index.js");

app.set("view engine", "ejs");

app.use(session({
    secret: "sshh, its a secret!",
}));

app.use(middleware.logIncomingToConsole);
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routeIndex);
app.use("/admin", middleware.authenticatedOrLogin, routeAdmin);
app.use("/people", routePeople);
app.use("/user", routeUser);
app.listen(port, logStartUpDetailsToConsole);



/**
 * Log app details to console when starting up.
 *
 * @return {void}
 */
function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}
