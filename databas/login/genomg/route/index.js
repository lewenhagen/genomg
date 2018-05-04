/**
 * General routes.
 */
"use strict";

const express = require("express");
const router  = express.Router();

router.get("/", (req, res) => {
    let data = {
        title: "Welcome",
        user: req.session.acronym || null
    };

    res.render("index", data);
});

module.exports = router;
