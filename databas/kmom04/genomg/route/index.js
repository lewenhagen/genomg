/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();

router.get("/", (req, res) => {
    let data = {
        title: "Start route"
    };

    res.render("people/index", data);
});

module.exports = router;
