/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();

router.get("/", (req, res) => {
    let data = {
        title: "Welcome"
    };

    res.render("people/index", data);
});

module.exports = router;
